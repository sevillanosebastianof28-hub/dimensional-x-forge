import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

const CNCGear = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position} rotation={[Math.PI / 6, 0, 0]}>
      <cylinderGeometry args={[1.2, 1.2, 0.3, 32]} />
      <meshStandardMaterial
        color="#8899aa"
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={1.5}
      />
      {/* Gear teeth */}
      {Array.from({ length: 16 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 16) * Math.PI * 2) * 1.3,
            0,
            Math.sin((i / 16) * Math.PI * 2) * 1.3
          ]}
          rotation={[0, (i / 16) * Math.PI * 2, 0]}
        >
          <boxGeometry args={[0.2, 0.3, 0.3]} />
          <meshStandardMaterial
            color="#7788aa"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </mesh>
      ))}
      {/* Center hole */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.35, 32]} />
        <meshStandardMaterial
          color="#556677"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={1.5}
        />
      </mesh>
    </mesh>
  );
};

const CNCShaft = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      {/* Main shaft */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 2.5, 32]} />
        <meshStandardMaterial
          color="#99aabb"
          metalness={0.95}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
      {/* Flange */}
      <mesh position={[-1, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
        <meshStandardMaterial
          color="#88aacc"
          metalness={0.9}
          roughness={0.15}
          envMapIntensity={1.5}
        />
      </mesh>
      {/* Mounting holes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            -1,
            Math.cos((i / 6) * Math.PI * 2) * 0.4,
            Math.sin((i / 6) * Math.PI * 2) * 0.4
          ]}
        >
          <cylinderGeometry args={[0.08, 0.08, 0.25, 16]} />
          <meshStandardMaterial
            color="#334455"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

const CNCBlock = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position} rotation={[0, Math.PI / 4, 0]}>
      {/* Main block */}
      <mesh>
        <boxGeometry args={[1.5, 1.8, 0.4]} />
        <meshStandardMaterial
          color="#6688aa"
          metalness={0.85}
          roughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>
      {/* Center bore */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 0.45, 32]} />
        <meshStandardMaterial
          color="#445566"
          metalness={0.9}
          roughness={0.15}
          envMapIntensity={1.5}
        />
      </mesh>
      {/* Corner holes */}
      {[[-0.6, 0.7], [0.6, 0.7], [-0.6, -0.7], [0.6, -0.7]].map((pos, i) => (
        <mesh key={i} position={[pos[0], pos[1], 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.45, 16]} />
          <meshStandardMaterial
            color="#334455"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

const CNCBearing = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position} rotation={[Math.PI / 6, Math.PI / 3, 0]}>
      {/* Outer ring */}
      <mesh>
        <torusGeometry args={[0.5, 0.15, 16, 32]} />
        <meshStandardMaterial
          color="#99aacc"
          metalness={0.95}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
      {/* Inner ring */}
      <mesh>
        <torusGeometry args={[0.3, 0.12, 16, 32]} />
        <meshStandardMaterial
          color="#7799bb"
          metalness={0.95}
          roughness={0.08}
          envMapIntensity={1.5}
        />
      </mesh>
      {/* Balls */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 0.4,
            Math.sin((i / 8) * Math.PI * 2) * 0.4,
            0
          ]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#aabbcc"
            metalness={0.98}
            roughness={0.05}
            envMapIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={45} />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={4}
        maxDistance={12}
        autoRotate
        autoRotateSpeed={1.5}
      />
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#00ffff" />
      
      <Environment preset="city" />
      
      <CNCGear position={[-2, 0, 0]} />
      <CNCShaft position={[1.5, 0.5, 0]} />
      <CNCBlock position={[0, -0.5, 1.5]} />
      <CNCBearing position={[-1, 1, -1.5]} />
    </>
  );
};

const CNCParts3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CNCParts3D;
