import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShapeProps {
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
}

const FloatingShape = ({ geometry, position, rotation, scale, speed }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004 + speed * 0.001;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} geometry={geometry} scale={scale}>
      <meshPhysicalMaterial
        color={0x9aa8b2}
        metalness={1}
        roughness={0.15}
        emissive={0x00ffff}
        emissiveIntensity={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
};

const Scene3D = () => {
  const geometries = [
    new THREE.TorusKnotGeometry(1, 0.3, 128, 32),
    new THREE.CylinderGeometry(0.5, 1, 3, 64),
    new THREE.BoxGeometry(1.5, 1, 0.5),
    new THREE.TorusGeometry(1.2, 0.3, 32, 100),
  ];

  const shapes = geometries.map((geo, i) => ({
    geometry: geo,
    position: [
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 4,
    ] as [number, number, number],
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      0,
    ] as [number, number, number],
    scale: 1.2,
    speed: i,
  }));

  return (
    <>
      <ambientLight intensity={0.4} color={0x00ffff} />
      <directionalLight position={[5, 10, 15]} intensity={1} color={0x00ffff} />
      
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </>
  );
};

export default Scene3D;
