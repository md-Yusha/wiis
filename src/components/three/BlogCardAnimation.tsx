
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

// Card floating effect with shadow
const FloatingCard = ({ visible, position, rotation }) => {
  const mesh = useRef<THREE.Group>(null!);
  
  useFrame(({ clock }) => {
    if (mesh.current && visible) {
      const t = clock.getElapsedTime();
      mesh.current.position.y = position[1] + Math.sin(t * 0.5) * 0.05;
      mesh.current.rotation.z = rotation[2] + Math.sin(t * 0.3) * 0.02;
    }
  });
  
  return (
    <group 
      ref={mesh} 
      position={position} 
      rotation={rotation} 
      scale={visible ? 1 : 0}
    >
      {/* Card body */}
      <Box args={[3, 2, 0.1]} castShadow receiveShadow>
        <meshStandardMaterial>
          <color attach="color" args={["white"]} />
        </meshStandardMaterial>
      </Box>
      
      {/* Card decorations */}
      <Box args={[2.8, 0.3, 0.12]} position={[0, 0.7, 0.05]}>
        <meshStandardMaterial>
          <color attach="color" args={["#1A4B84"]} />
        </meshStandardMaterial>
      </Box>
      
      <Box args={[2, 0.8, 0.12]} position={[0, -0.3, 0.05]}>
        <meshStandardMaterial>
          <color attach="color" args={["#f5f5f5"]} />
        </meshStandardMaterial>
      </Box>
    </group>
  );
};

const EventCardAnimation = ({ cardId }) => {
  const [visible, setVisible] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  
  useEffect(() => {
    if (errorOccurred) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );
    
    const card = document.getElementById(cardId);
    if (card) {
      observer.observe(card);
    }
    
    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, [cardId, errorOccurred]);

  // Error handling function
  const handleError = (e) => {
    console.error("Error in 3D rendering:", e);
    setErrorOccurred(true);
  };
  
  if (errorOccurred) {
    return null; // Return empty if error occurred to prevent repeated errors
  }
  
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 0, 5], fov: 40 }}
      onCreated={({ gl }) => {
        // Fixed error with WebGLRenderer
        gl.domElement.addEventListener('webglcontextlost', handleError);
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.8} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024}
      />
      <FloatingCard 
        visible={visible} 
        position={[0, 0, 0]} 
        rotation={[0, 0, Math.PI * 0.02]} 
      />
    </Canvas>
  );
};

export default EventCardAnimation;
