"use client"
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import useScreenSize from '../hook/useScreenSize';

export default function Wizard(props) {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb');
  const modelRef = useRef();
  const screenSize = useScreenSize();

  const getModelScale = () => {
    if (!screenSize) return 0.8; // Default scale
    if (screenSize >= 1536) return 1;    // 2xl screens: 1536px+
    if (screenSize >= 1024) return 0.9;  // lg screens: 1024px+
    if (screenSize >= 768) return 0.8;   // md screens: 768px+
    if (screenSize >= 640) return 0.65;  // sm screens: 640px+
    if (screenSize >= 414) return 0.5;   
    return 0.45;                        
  };

  const getModelPosition = () => {
    if (!screenSize) return -1.5; 
    if (screenSize >= 1536) return -1.5; 
    if (screenSize >= 1024) return -1.3; 
    if (screenSize >= 768) return -1.1;  
    if (screenSize >= 640) return -0.8;  
    if (screenSize >= 414) return -0.6;  
    return -0.5;                         
  };

  // Adjust vertical oscillation amplitude based on screen size
  const getOscillationAmplitude = () => {
    if (screenSize >= 768) return 0.15;  // Larger screens
    return 0.1;                          // Mobile screens
  };

  useFrame((state) => {
    const basePosition = getModelPosition();
    const amplitude = getOscillationAmplitude();
    modelRef.current.position.y = basePosition + Math.sin(state.clock.elapsedTime) * amplitude;
  });

  // Get initial position for the model
  const getInitialPosition = () => {
    const y = getModelPosition();
    return [0, y, 0]; // You can adjust x and z if needed
  };

  const scale = getModelScale();
  
  return (
    <group {...props} dispose={null}
      ref={modelRef}
      position={getInitialPosition()}
      scale={[scale, scale, scale]}
      // For mobile, you might want to adjust the rotation slightly
      rotation={[screenSize <= 414 ? 0.15 : 0.25, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.GlobeMat}
        position={[0, 1.943, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/scene-transformed.glb');