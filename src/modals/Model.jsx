"use client";
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { CameraControls, OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PointLight } from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/dog.glb");
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.35;
    // ref.current.rotation.z += delta;
  });
  return (
    <group
      {...props}
      dispose={null}
      position={[0, -1.5, 0]}
      ref={ref}
      scale={[1.1, 1.1, 1.1]}
    >
      <ambientLight intensity={2} />
      {/* <directionalLight position={[-5, 2.5,-5]} intensity={2}/> */}
      {/* <directionalLight position={[-8, 2.5,8]} intensity={1}/> */}
      {/* <directionalLight position={[8, 2.5,8]} intensity={1}/> */}
      {/* <pointLight position={[-3, 5,-3]} intensity={150}/> */}
      <OrbitControls enableZoom={false} enablePan={false} enableDamping={false}/>
      {/* <rectAreaLight position={[0.17,2.5,1.9]} color={"blue"} height={1} width={2.7} intensity={50} rotateX={180} /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main.geometry}
        material={materials.palette}
        position={[3.686, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[-3.399, 0, -2.954]}
        scale={[7.05, 1, 7.05]}
      />
    </group>
  );
}

useGLTF.preload("/dog.glb");
