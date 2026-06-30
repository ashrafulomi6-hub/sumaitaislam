'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Wireframe } from '@react-three/drei';
import * as THREE from 'three';

/**
 * A quiet, premium 3D moment for the hero: a wireframe icosahedron that
 * drifts and reacts subtly to pointer position. Kept lightweight —
 * no postprocessing, no heavy particle counts — to protect performance.
 */
function FloatingNode({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const { x, y } = state.pointer;
    ref.current.rotation.y += 0.0015;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, y * 0.2, 0.02);
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, x * 0.1, 0.02);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <Wireframe stroke="#2563EB" thickness={0.012} backfaceStroke="#11111122" />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 60;
  const positions = useRef<Float32Array>(
    new Float32Array(
      Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 8)
    )
  );

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions.current} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#666666" sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <FloatingNode position={[0.6, 0.2, 0]} scale={1.4} />
        <Particles />
      </Suspense>
    </Canvas>
  );
}
