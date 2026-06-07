import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// --- WebGL Detection ---
function isWebGLAvailable() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

// --- Constants ---
const CONNECTION_DISTANCE = 3.5;
const COLORS = [
  new THREE.Color('#8b5cf6'), // violet-500
  new THREE.Color('#c084fc'), // purple-400
  new THREE.Color('#22d3ee'), // cyan-400
];

// --- 3D Scene Component ---
const NeuralNetworkScene: React.FC<{ nodeCount: number }> = ({ nodeCount }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const { viewport } = useThree();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const dataRef = useRef({
    positions: new Float32Array(0),
    velocities: new Float32Array(0),
    colors: new Float32Array(0),
  });

  useEffect(() => {
    const pos = new Float32Array(nodeCount * 3);
    const vel = new Float32Array(nodeCount * 3);
    const col = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      // Skew X towards the right side:
      const x = (Math.random() - 0.2) * viewport.width * 1.2;
      const y = (Math.random() - 0.5) * viewport.height * 1.2;
      const z = (Math.random() - 0.5) * 5; // Depth

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Slow drifting velocities
      vel[i * 3] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.02;

      // Random color from palette
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    
    dataRef.current = { positions: pos, velocities: vel, colors: col };

    if (pointsRef.current) {
      pointsRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      pointsRef.current.geometry.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    }
  }, [nodeCount, viewport.width, viewport.height]);

  // Update positions and lines
  useFrame(() => {
    if (prefersReducedMotion) return; // Pause animation

    if (!pointsRef.current || !linesRef.current) return;

    const { positions, velocities, colors } = dataRef.current;
    if (positions.length === 0) return;

    const positionsAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const pos = positionsAttr.array as Float32Array;
    
    // Update particle positions
    for (let i = 0; i < nodeCount; i++) {
      pos[i * 3] += velocities[i * 3];
      pos[i * 3 + 1] += velocities[i * 3 + 1];
      pos[i * 3 + 2] += velocities[i * 3 + 2];

      // Bounce off screen edges softly (or wrap around)
      if (pos[i * 3] > viewport.width || pos[i * 3] < -viewport.width / 2) velocities[i * 3] *= -1;
      if (pos[i * 3 + 1] > viewport.height / 2 || pos[i * 3 + 1] < -viewport.height / 2) velocities[i * 3 + 1] *= -1;
      if (pos[i * 3 + 2] > 5 || pos[i * 3 + 2] < -5) velocities[i * 3 + 2] *= -1;
    }
    positionsAttr.needsUpdate = true;

    // Recalculate lines based on new positions
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
          linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);

          const alpha = 1.0 - distSq / (CONNECTION_DISTANCE * CONNECTION_DISTANCE);
          
          const ciR = colors[i * 3] * alpha;
          const ciG = colors[i * 3 + 1] * alpha;
          const ciB = colors[i * 3 + 2] * alpha;

          const cjR = colors[j * 3] * alpha;
          const cjG = colors[j * 3 + 1] * alpha;
          const cjB = colors[j * 3 + 2] * alpha;

          lineColors.push(ciR, ciG, ciB);
          lineColors.push(cjR, cjG, cjB);
        }
      }
    }

    linesRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesRef.current.geometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial
          size={0.15}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          vertexColors
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          opacity={0.3}
        />
      </lineSegments>
    </>
  );
};

// --- Main Container Component ---
export const NeuralNetworkBackground: React.FC = () => {
  const [hasWebGL] = useState<boolean>(() => isWebGLAvailable());
  
  const getInitialNodeCount = () => {
    if (typeof window === 'undefined') return 60;
    if (window.innerWidth < 768) return 25;
    if (window.innerWidth < 1024) return 40;
    return 60;
  };

  const [nodeCount, setNodeCount] = useState<number>(getInitialNodeCount);

  useEffect(() => {
    const updateNodeCount = () => {
      setNodeCount(getInitialNodeCount());
    };

    window.addEventListener('resize', updateNodeCount);
    return () => window.removeEventListener('resize', updateNodeCount);
  }, []);

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-slate-950 to-slate-950 pointer-events-none" />
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.1} />
        <NeuralNetworkScene nodeCount={nodeCount} />
      </Canvas>
    </div>
  );
};
