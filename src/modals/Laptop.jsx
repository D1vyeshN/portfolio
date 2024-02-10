"use client";

import React, { useRef } from "react";
import {
  AsciiRenderer,
  Billboard,
  Html,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  OrbitControls,
  Outlines,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export function Laptop(props) {
  const texture_1 = useLoader(TextureLoader, "/assets/pokemonVerse.png");
  const texture_2 = useLoader(TextureLoader, "/assets/onlineStore.png");
  const texture_3 = useLoader(TextureLoader, "/assets/portfiliodark.png");
  const texture_4 = useLoader(TextureLoader, "/assets/youTubeLite.png");
  const texture_5 = useLoader(TextureLoader, "/assets/crtptopedia.png");
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.5;
    ref.current.rotation.z += delta * 0.5;
    ref.current.rotation.x += delta * 0.5;
  });
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={1.7} />
      <directionalLight position={[2, 1, 1]} />
      <mesh {...props} ref={ref} receiveShadow castShadow>
        <boxGeometry args={[2.5, 2.5, 2.5]} />

          {/* <AsciiRenderer  bgColor="#000" color fgColor="#000"/> */}
        <meshStandardMaterial map={texture_1} attach="material-5"/>
        <meshStandardMaterial map={texture_1} attach="material-1"/>
        <meshStandardMaterial map={texture_2} attach="material-0"/>
        <meshStandardMaterial map={texture_3} attach="material-2"/>
        <meshStandardMaterial map={texture_4} attach="material-3"/>
        <meshStandardMaterial map={texture_5} attach="material-4"/>
      </mesh>
    </>
  );
}
