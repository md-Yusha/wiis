
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Book model
const Book = () => {
  const group = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      
      // Regular animation
      group.current.rotation.y = Math.sin(t * 0.3) * 0.2 + Math.PI * 0.1;
      
      // Interactive animations
      if (hovered) {
        group.current.rotation.y += 0.01;
        group.current.position.y = Math.sin(t * 2) * 0.05 + 0.1;
      }
      
      if (clicked) {
        group.current.rotation.y += 0.03;
      }
    }
  });

  return (
    <group 
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Book cover */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.2, 3]} />
        <meshStandardMaterial color="#1A4B84" />
      </mesh>
      
      {/* Pages */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.9, 0.4, 2.9]} />
        <meshStandardMaterial color="#F5F5F5" />
      </mesh>
      
      {/* Book spine decoration */}
      <mesh position={[-0.9, 0.05, 0]}>
        <boxGeometry args={[0.2, 0.25, 2.8]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
      
      {/* Cover decoration */}
      <mesh position={[0, 0, -1.2]}>
        <boxGeometry args={[1.5, 0.21, 0.3]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
    </group>
  );
};

// 3D Globe model
const Globe = () => {
  const group = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      
      // Regular rotation
      group.current.rotation.y = t * 0.2;
      
      // Interactive animations
      if (hovered) {
        group.current.position.y = Math.sin(t * 2) * 0.05 + 0.1;
        group.current.rotation.z = Math.sin(t) * 0.05;
      }
      
      if (clicked) {
        group.current.rotation.y = t * 0.8;
      }
    }
  });
  
  return (
    <group 
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Main sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 64, 32]} />
        <meshStandardMaterial color="#3D7DAD" metalness={0.1} roughness={0.7} />
      </mesh>
      
      {/* Axis */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 8]}>
        <boxGeometry args={[0.1, 3.5, 0.1]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[1, 0.2, 1]} />
        <meshStandardMaterial color="#1A4B84" />
      </mesh>
    </group>
  );
};

// Main export component with model selection
const AcademicsModel = ({ modelType = "book" }) => {
  return (
    <div className="canvas-element hover:cursor-pointer">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        {modelType === "book" ? <Book /> : <Globe />}
      </Canvas>
    </div>
  );
};

export default AcademicsModel;
