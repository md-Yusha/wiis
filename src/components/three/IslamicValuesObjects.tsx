
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Simplified 3D Quran Stand
const QuranStand = ({ position, visible }) => {
  const mesh = useRef<THREE.Group>(null!);
  
  useFrame(({ clock }) => {
    if (mesh.current && visible) {
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      mesh.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });
  
  return (
    <group 
      ref={mesh} 
      position={[position[0], position[1], position[2]]}
      scale={visible ? 1 : 0}
      visible={visible}
    >
      {/* Base */}
      <mesh>
        <boxGeometry args={[1.5, 0.2, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Stand surface */}
      <mesh position={[0, 0, 0]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[1.5, 0.05, 1.2]} />
        <meshStandardMaterial color="#A0522D" />
      </mesh>
      
      {/* Decorative elements */}
      <mesh position={[0, 0, 0]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[1.4, 0.03, 1.1]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
      
      {/* Book */}
      <mesh position={[0, 0.2, 0]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[1, 0.1, 0.8]} />
        <meshStandardMaterial color="#2E5090" />
      </mesh>
    </group>
  );
};

// Crescent Moon
const CrescentMoon = ({ position, visible }) => {
  const mesh = useRef<THREE.Group>(null!);
  
  useFrame(({ clock }) => {
    if (mesh.current && visible) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.2;
      mesh.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <group 
      ref={mesh} 
      position={[position[0], position[1], position[2]]} 
      scale={visible ? 1 : 0}
      visible={visible}
    >
      {/* Outer circle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.1, 16, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.5} roughness={0.2} />
      </mesh>
      
      {/* Inner circle */}
      <mesh position={[0.3, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  );
};

// Prayer Mat
const PrayerMat = ({ position, visible }) => {
  const mesh = useRef<THREE.Group>(null!);
  
  useFrame(({ clock }) => {
    if (mesh.current && visible) {
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
      mesh.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.4) * 0.15;
    }
  });
  
  return (
    <group 
      ref={mesh} 
      position={[position[0], position[1], position[2]]}
      scale={visible ? 1 : 0}
      visible={visible}
    >
      {/* Mat base */}
      <mesh>
        <boxGeometry args={[2, 0.05, 1.2]} />
        <meshStandardMaterial color="#3D7DAD" />
      </mesh>
      
      {/* Decorative border */}
      <mesh position={[0, 0, 0.55]}>
        <boxGeometry args={[2, 0.06, 0.1]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
      
      {/* Decorative border */}
      <mesh position={[0, 0, -0.55]}>
        <boxGeometry args={[2, 0.06, 0.1]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
      
      {/* Center decoration */}
      <mesh>
        <boxGeometry args={[0.8, 0.06, 0.8]} />
        <meshStandardMaterial color="#1A4B84" />
      </mesh>
    </group>
  );
};

// Main component that manages visibility of objects based on scroll position
const IslamicValuesObjects = ({ sectionId = "quran-section", section2Id = "prayers-section", section3Id = "character-section" }) => {
  const [quranVisible, setQuranVisible] = useState(false);
  const [crescentVisible, setCrescentVisible] = useState(false);
  const [matVisible, setMatVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const quranSection = document.getElementById(sectionId);
      const prayerSection = document.getElementById(section2Id);
      const characterSection = document.getElementById(section3Id);
      
      if (quranSection) {
        const rect = quranSection.getBoundingClientRect();
        setQuranVisible(rect.top < window.innerHeight * 0.75 && rect.bottom > 0);
      }
      
      if (prayerSection) {
        const rect = prayerSection.getBoundingClientRect();
        setCrescentVisible(rect.top < window.innerHeight * 0.75 && rect.bottom > 0);
      }
      
      if (characterSection) {
        const rect = characterSection.getBoundingClientRect();
        setMatVisible(rect.top < window.innerHeight * 0.75 && rect.bottom > 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionId, section2Id, section3Id]);

  return (
    <>
      <div className="canvas-element">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <QuranStand position={[0, 0, 0]} visible={quranVisible} />
        </Canvas>
      </div>
      
      <div className="canvas-element">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <CrescentMoon position={[0, 0, 0]} visible={crescentVisible} />
        </Canvas>
      </div>
      
      <div className="canvas-element">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <PrayerMat position={[0, 0, 0]} visible={matVisible} />
        </Canvas>
      </div>
    </>
  );
};

export default IslamicValuesObjects;
