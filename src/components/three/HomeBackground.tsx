
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Individual floating sphere
const FloatingSphere = ({ position, size, speed, color }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      const t = clock.getElapsedTime() * speed;
      mesh.current.position.y = position[1] + Math.sin(t) * 0.5;
      mesh.current.rotation.y = t * 0.2;
      mesh.current.rotation.z = t * 0.1;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
};

// Collection of shapes for background
const BackgroundShapes = () => {
  // Create a collection of spheres with different positions
  const spheres = [
  ];

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      {spheres.map((sphere, index) => (
        <FloatingSphere 
          key={index}
          position={sphere.position}
          size={sphere.size}
          speed={sphere.speed}
          color={sphere.color}
        />
      ))}
    </>
  );
};

// Main component that renders the background
const HomeBackground = () => {
  const [errorOccurred, setErrorOccurred] = useState(false);
  
  const handleError = (e: any) => {
    console.error("Error in 3D rendering:", e);
    setErrorOccurred(true);
  };
  
  if (errorOccurred) {
    return null; // Return nothing if error occurred
  }
  
  return (
    <div className="canvas-container absolute inset-0 -z-10">
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [0, 0, 10], fov: 60 }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', handleError);
        }}
        onError={handleError}
      >
        <BackgroundShapes />
      </Canvas>
    </div>
  );
};

export default HomeBackground;
