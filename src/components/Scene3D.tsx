import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TurbineWheel = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.003;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main disc */}
      <mesh>
        <cylinderGeometry args={[2, 2, 0.3, 32]} />
        <meshPhysicalMaterial
          color={0xb0b8c0}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Spokes */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.8, Math.sin(angle) * 0.8, 0]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[1.2, 0.2, 0.25]} />
            <meshPhysicalMaterial
              color={0x9aa8b2}
              metalness={1}
              roughness={0.15}
              clearcoat={1}
            />
          </mesh>
        );
      })}
      
      {/* Center hub */}
      <mesh>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
        <meshPhysicalMaterial
          color={0x808890}
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* Holographic ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.02, 16, 64]} />
        <meshBasicMaterial color={0x00ffff} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

const MachinedPlate = ({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.y += 0.006;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      {/* Main plate */}
      <mesh>
        <boxGeometry args={[1.5, 2.5, 0.3]} />
        <meshPhysicalMaterial
          color={0xc0c8d0}
          metalness={0.95}
          roughness={0.1}
          clearcoat={1}
        />
      </mesh>
      
      {/* Holes */}
      {[[0, 0.8, 0.16], [0, -0.8, 0.16]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.3, 0.3, 0.35, 32]} />
          <meshPhysicalMaterial
            color={0x404040}
            metalness={1}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Holographic ring */}
      <mesh position={[0, 0, 0.5]}>
        <torusGeometry args={[1.3, 0.015, 16, 64]} />
        <meshBasicMaterial color={0x00ffff} transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

const CylindricalPart = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.z += 0.003;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Main cylinder */}
      <mesh>
        <cylinderGeometry args={[0.8, 0.8, 0.4, 32]} />
        <meshPhysicalMaterial
          color={0xa8b0b8}
          metalness={0.95}
          roughness={0.15}
          clearcoat={1}
        />
      </mesh>
      
      {/* Flange holes */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.55, Math.sin(angle) * 0.55, 0]}
          >
            <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
            <meshPhysicalMaterial
              color={0x303030}
              metalness={1}
              roughness={0.4}
            />
          </mesh>
        );
      })}

      {/* Holographic ring */}
      <mesh>
        <torusGeometry args={[0.95, 0.015, 16, 64]} />
        <meshBasicMaterial color={0x00ffff} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.3} color={0x00ffff} />
      <directionalLight position={[5, 10, 15]} intensity={1.2} color={0x00ffff} />
      <directionalLight position={[-5, -5, 5]} intensity={0.5} color={0x0088ff} />
      <pointLight position={[0, 0, 5]} intensity={0.8} color={0x00ffff} distance={20} />
      
      {/* Main turbine wheel */}
      <TurbineWheel position={[1, -0.5, 0]} />
      
      {/* Machined plates */}
      <MachinedPlate position={[2.5, 1, 1]} rotation={[0.3, 0.5, 0.2]} />
      <MachinedPlate position={[-1, 1.5, -1]} rotation={[0.5, -0.3, 0.4]} />
      
      {/* Cylindrical parts */}
      <CylindricalPart position={[0.5, 2, 0.5]} />
    </>
  );
};

export default Scene3D;
