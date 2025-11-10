import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShapeProps {
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
}

const FloatingShape = ({ geometry, position, rotation, speed }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} geometry={geometry}>
      <meshStandardMaterial
        color={0xaaaaaa}
        metalness={1}
        roughness={0.2}
        envMapIntensity={1.5}
      />
    </mesh>
  );
};

const Scene3D = () => {
  const geometries = [
    new THREE.TorusGeometry(2, 0.5, 16, 100),
    new THREE.CylinderGeometry(0.7, 1, 3, 32),
    new THREE.BoxGeometry(2, 1, 0.5),
    new THREE.SphereGeometry(1, 32, 32),
  ];

  const shapes = geometries.map((geo, i) => ({
    geometry: geo,
    position: [
      Math.random() * 6 - 3,
      Math.random() * 3 - 1.5,
      Math.random() * 4 - 2,
    ] as [number, number, number],
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      0,
    ] as [number, number, number],
    speed: 1 + i * 0.2,
  }));

  return (
    <>
      <ambientLight intensity={0.7} color={0x66ffff} />
      <pointLight position={[10, 20, 20]} intensity={2} distance={500} color={0x00ffff} />
      
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </>
  );
};

export default Scene3D;
