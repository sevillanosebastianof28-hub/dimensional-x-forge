import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });
  
  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#4A7A9E"
        metalness={0.92}
        roughness={0.15}
        envMapIntensity={1.8}
      />
    </mesh>
  );
};

const SpinningCube3D = () => {
  return (
    <Canvas
      camera={{ position: [2, 1.5, 2], fov: 50 }}
      gl={{
        antialias: true,
        alpha: true,
      }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#00A8CC" />
      <RotatingCube />
    </Canvas>
  );
};

export default SpinningCube3D;
