/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/pclub.gltf --transform
*/
import { useFrame } from '@react-three/fiber'
import React, { useRef,useState,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { ShaderNode, GeometryNode } from '@react-three/fiber';
export function Model(props) {
  const group = useRef()
  
  const { nodes, materials, animations } = 
  useGLTF('/pclub-transformed.glb')
  
  const [name, setName] = useState("jump")
  const { actions } = useAnimations(animations, group)
  
  const shaderNodes = Object.values(nodes).filter(node => node.isShaderNode);
  console.log(shaderNodes);
  const geometryNodes = Object.values(nodes).filter(node => node.isGeometryNode);
  console.log(geometryNodes);
  return (
    <group ref={group} {...props}  dispose={null}>
      
      <group name="Scene">
      {shaderNodes.map((node, index) => (
        <ShaderNode key={index} node={node} />
      ))}
      {geometryNodes.map((node, index) => (
        <GeometryNode key={index} node={node} />
      ))}
        <mesh name="Cube043" geometry={nodes.Cube043.geometry} material={materials['Material.024']} position={[0, -46.13, 0]} scale={[17.63, 46.24, 17.63]} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[11.8, 1.1, 0.04]} rotation={[Math.PI, -1.57, Math.PI]} scale={0.94} />
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={nodes.Cube007.material} position={[9.72, 0.83, 0.65]} rotation={[0, 1.57, 0]} scale={[-0.81, -0.14, -0.06]} />
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={nodes.Cube008.material} position={[9.72, 1.53, 0.65]} rotation={[0, 1.57, 0]} scale={[-0.81, -0.14, -0.06]} />
        <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={nodes.Cube019.material} position={[-0.12, 1.1, -10.91]} rotation={[0, -1.57, 0]} scale={0.94} />
        <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={nodes.Cube016.material} position={[-2.2, 0.83, -10.29]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[-0.81, -0.14, -0.06]} />
        <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={nodes.Cube015.material} position={[-2.2, 1.53, -10.29]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[-0.81, -0.14, -0.06]} />
        <mesh name="Cube022" geometry={nodes.Cube022.geometry} material={nodes.Cube022.material} position={[-10.92, 0.97, -0.21]} rotation={[0, -1.56, 0]} scale={0.94} />
        <mesh name="Cube025" geometry={nodes.Cube025.geometry} material={nodes.Cube025.material} position={[-12.99, 0.71, 0.42]} rotation={[-Math.PI, 1.56, -Math.PI]} scale={[-0.81, -0.14, -0.06]} />
        <mesh name="Cube026" geometry={nodes.Cube026.geometry} material={nodes.Cube026.material} position={[-12.99, 1.41, 0.42]} rotation={[-Math.PI, 1.56, -Math.PI]} scale={[-0.81, -0.14, -0.06]} />
        <mesh name="Cube037" geometry={nodes.Cube037.geometry} material={nodes.Cube037.material} position={[-0.1, 0.87, 11.62]} rotation={[0, -1.57, 0]} scale={0.94} />
        <mesh name="Cube034" geometry={nodes.Cube034.geometry} material={nodes.Cube034.material} position={[-2.18, 0.61, 12.24]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[-0.81, -0.14, -0.06]} />
        <mesh name="Cube033" geometry={nodes.Cube033.geometry} material={nodes.Cube033.material} position={[-2.18, 1.3, 12.24]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[-0.81, -0.14, -0.06]} />
        <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Material.002']} position={[11.74, 1.54, 2.14]} rotation={[Math.PI, -1.57, Math.PI]} scale={[0.06, 0.08, 1.17]} />
        <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['Material.002']} position={[11.74, 0.88, 2.14]} rotation={[Math.PI, -1.57, Math.PI]} scale={[0.06, 0.08, 1.17]} />
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials['Material.002']} position={[9.74, 0.84, -0.73]} rotation={[Math.PI, -1.57, Math.PI]} scale={[0.2, 0.2, 0.06]} />
        <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials['Material.002']} position={[9.74, 1.55, -0.73]} rotation={[Math.PI, -1.57, Math.PI]} scale={[0.2, 0.2, 0.06]} />
        <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials['Material.002']} position={[-0.17, 1.54, -8.81]} rotation={[0, -1.57, 0]} scale={[0.06, 0.08, 1.17]} />
        <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials['Material.002']} position={[-0.17, 0.88, -8.81]} rotation={[0, -1.57, 0]} scale={[0.06, 0.08, 1.17]} />
        <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials['Material.002']} position={[-2.18, 0.84, -11.67]} rotation={[0, -1.57, 0]} scale={[0.2, 0.2, 0.06]} />
        <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials['Material.002']} position={[-2.18, 1.55, -11.67]} rotation={[0, -1.57, 0]} scale={[0.2, 0.2, 0.06]} />
        <mesh name="Cube023" geometry={nodes.Cube023.geometry} material={materials['Material.002']} position={[-10.95, 1.42, 1.88]} rotation={[0, -1.56, 0]} scale={[0.06, 0.08, 1.17]} />
        <mesh name="Cube024" geometry={nodes.Cube024.geometry} material={materials['Material.002']} position={[-10.95, 0.75, 1.88]} rotation={[0, -1.56, 0]} scale={[0.06, 0.08, 1.17]} />
        <mesh name="Cube027" geometry={nodes.Cube027.geometry} material={materials['Material.002']} position={[-12.98, 0.72, -0.96]} rotation={[0, -1.56, 0]} scale={[0.2, 0.2, 0.06]} />
        <mesh name="Cube028" geometry={nodes.Cube028.geometry} material={materials['Material.002']} position={[-12.98, 1.43, -0.96]} rotation={[0, -1.56, 0]} scale={[0.2, 0.2, 0.06]} />
        <mesh name="Cube036" geometry={nodes.Cube036.geometry} material={materials['Material.002']} position={[-0.14, 1.31, 13.71]} rotation={[0, -1.57, 0]} scale={[0.06, 0.08, 1.17]} />
        <mesh name="Cube035" geometry={nodes.Cube035.geometry} material={materials['Material.002']} position={[-0.14, 0.65, 13.71]} rotation={[0, -1.57, 0]} scale={[0.06, 0.08, 1.17]} />
        <mesh name="Cube032" geometry={nodes.Cube032.geometry} material={materials['Material.002']} position={[-2.16, 0.61, 10.86]} rotation={[0, -1.57, 0]} scale={[0.2, 0.2, 0.06]} />
        <mesh name="Cube031" geometry={nodes.Cube031.geometry} material={materials['Material.002']} position={[-2.16, 1.32, 10.86]} rotation={[0, -1.57, 0]} scale={[0.2, 0.2, 0.06]} />
        <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials['Material.018']} position={[11.83, 4.44, 0.04]} rotation={[Math.PI, -1.57, Math.PI]} scale={[0.94, 2.35, 0.94]} />
        <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials['Material.018']} position={[-0.09, 4.44, -10.91]} rotation={[0, -1.57, 0]} scale={[0.94, 2.35, 0.94]} />
        <mesh name="Cube029" geometry={nodes.Cube029.geometry} material={materials['Material.018']} position={[-10.88, 4.32, -0.22]} rotation={[0, -1.56, 0]} scale={[0.94, 2.35, 0.94]} />
        <mesh name="Cube030" geometry={nodes.Cube030.geometry} material={materials['Material.018']} position={[-0.06, 4.21, 11.61]} rotation={[0, -1.57, 0]} scale={[0.94, 2.35, 0.94]} />
        <group name="Cube003" position={[-0.05, 10.7, -0.23]} scale={[0.18, 1.98, 1.98]}>
          <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.003']} />
          <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials['Material.003']} />
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials['Material.002']} position={[1.4, 0.72, -0.01]} rotation={[0, 0, -Math.PI / 2]} scale={[1.33, 5.59, 1]} />
          <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.001']} position={[0.82, -0.82, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.17, 1.9, 0.17]} />
          <mesh name="Cone" geometry={nodes.Cone.geometry} material={materials.Material} position={[0.75, -0.82, 0]} rotation={[0, 0, Math.PI / 2]} scale={[0.74, 5.41, 0.74]} />
          <mesh name="Cube005_2" geometry={nodes.Cube005_2.geometry} material={nodes.Cube005_2.material} position={[-0.12, 1.56, -0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0.36, 0.06, 0.08]} />
          <mesh name="Cube006_1" geometry={nodes.Cube006_1.geometry} material={nodes.Cube006_1.material} position={[-0.12, 1.21, -0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0.36, 0.06, 0.04]} />
          <mesh name="Cube039" geometry={nodes.Cube039.geometry} material={materials['Material.002']} position={[0.64, 2.33, -0.2]} rotation={[0, 0, -Math.PI / 2]} scale={[0.05, 0.29, 0.11]} />
        </group>
        <group name="Cube" position={[11.8, 1.1, 0.04]} rotation={[Math.PI, -1.57, Math.PI]} scale={[2.2, 1, 2.2]}>
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials['Material.003']} />
          <mesh name="Cube009_2" geometry={nodes.Cube009_2.geometry} material={materials['Material.003']} />
        </group>
        <group name="Cube020" position={[-0.12, 1.1, -10.91]} rotation={[0, -1.57, 0]} scale={[2.2, 1, 2.2]}>
          <mesh name="Cube022_1" geometry={nodes.Cube022_1.geometry} material={materials['Material.011']} />
          <mesh name="Cube022_2" geometry={nodes.Cube022_2.geometry} material={materials['Material.011']} />
        </group>
        <group name="Cube021" position={[-10.92, 0.97, -0.21]} rotation={[0, -1.56, 0]} scale={[2.2, 1, 2.2]}>
          <mesh name="Cube022_1" geometry={nodes.Cube022_1.geometry} material={materials['Material.011']} />
          <mesh name="Cube022_2" geometry={nodes.Cube022_2.geometry} material={materials['Material.011']} />
        </group>
        <group name="Cube038" position={[-0.1, 0.87, 11.62]} rotation={[0, -1.57, 0]} scale={[2.2, 1, 2.2]}>
          <mesh name="Cube022_1" geometry={nodes.Cube022_1.geometry} material={materials['Material.011']} />
          <mesh name="Cube022_2" geometry={nodes.Cube022_2.geometry} material={materials['Material.011']} />
        </group>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.002']} position={[11.8, 2.12, 0.04]} rotation={[Math.PI, -1.57, Math.PI]} scale={1.27} />
        <mesh name="Plane012" geometry={nodes.Plane012.geometry} material={materials['Material.002']} position={[-0.12, 2.12, -10.91]} rotation={[0, -1.57, 0]} scale={1.27} />
        <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={materials['Material.002']} position={[-10.92, 1.99, -0.21]} rotation={[0, -1.56, 0]} scale={1.27} />
        <mesh name="Plane024" geometry={nodes.Plane024.geometry} material={materials['Material.002']} position={[-0.1, 1.89, 11.62]} rotation={[0, -1.57, 0]} scale={1.27} />
        <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.005']} position={[11.8, 2.13, 0.04]} rotation={[Math.PI, -1.57, Math.PI]} scale={0.94} />
        <mesh name="Plane011" geometry={nodes.Plane011.geometry} material={materials['Material.005']} position={[-0.12, 2.13, -10.91]} rotation={[0, -1.57, 0]} scale={0.94} />
        <mesh name="Plane014" geometry={nodes.Plane014.geometry} material={materials['Material.005']} position={[-10.92, 2.01, -0.21]} rotation={[0, -1.56, 0]} scale={0.94} />
        <mesh name="Plane023" geometry={nodes.Plane023.geometry} material={materials['Material.005']} position={[-0.1, 1.9, 11.62]} rotation={[0, -1.57, 0]} scale={0.94} />
        <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.002']} position={[10.19, 2.11, 1.73]} rotation={[Math.PI, -1.57, Math.PI]} scale={0.16} />
        <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials['Material.002']} position={[13.47, 2.11, 1.74]} rotation={[Math.PI, -1.57, Math.PI]} scale={0.16} />
        <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['Material.002']} position={[13.48, 2.11, -1.63]} rotation={[Math.PI, -1.57, Math.PI]} scale={0.16} />
        <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials['Material.002']} position={[10.15, 2.11, -1.64]} rotation={[Math.PI, -1.57, Math.PI]} scale={0.16} />
        <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={materials['Material.002']} position={[-1.72, 2.11, -9.21]} rotation={[0, -1.57, 0]} scale={0.16} />
        <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={materials['Material.002']} position={[1.56, 2.11, -9.22]} rotation={[0, -1.57, 0]} scale={0.16} />
        <mesh name="Plane008" geometry={nodes.Plane008.geometry} material={materials['Material.002']} position={[1.55, 2.11, -12.59]} rotation={[0, -1.57, 0]} scale={0.16} />
        <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['Material.002']} position={[-1.78, 2.11, -12.58]} rotation={[0, -1.57, 0]} scale={0.16} />
        <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={materials['Material.002']} position={[-12.5, 1.99, 1.49]} rotation={[0, -1.56, 0]} scale={0.16} />
        <mesh name="Plane016" geometry={nodes.Plane016.geometry} material={materials['Material.002']} position={[-9.23, 1.99, 1.46]} rotation={[0, -1.56, 0]} scale={0.16} />
        <mesh name="Plane017" geometry={nodes.Plane017.geometry} material={materials['Material.002']} position={[-9.26, 1.99, -1.91]} rotation={[0, -1.56, 0]} scale={0.16} />
        <mesh name="Plane018" geometry={nodes.Plane018.geometry} material={materials['Material.002']} position={[-12.59, 1.99, -1.87]} rotation={[0, -1.56, 0]} scale={0.16} />
        <mesh name="Plane022" geometry={nodes.Plane022.geometry} material={materials['Material.002']} position={[-1.69, 1.88, 13.31]} rotation={[0, -1.57, 0]} scale={0.16} />
        <mesh name="Plane021" geometry={nodes.Plane021.geometry} material={materials['Material.002']} position={[1.58, 1.88, 13.3]} rotation={[0, -1.57, 0]} scale={0.16} />
        <mesh name="Plane020" geometry={nodes.Plane020.geometry} material={materials['Material.002']} position={[1.57, 1.88, 9.94]} rotation={[0, -1.57, 0]} scale={0.16} />
        <mesh name="Plane019" geometry={nodes.Plane019.geometry} material={materials['Material.002']} position={[-1.76, 1.88, 9.95]} rotation={[0, -1.57, 0]} scale={0.16} />
        <mesh name="Cube_FloatyParticles001" geometry={nodes.Cube_FloatyParticles001.geometry} material={materials['Material.007']} position={[11.76, 2.05, 0.04]} rotation={[Math.PI, -1.57, Math.PI]} scale={0.94} />
        <mesh name="Cube_FloatyParticles002" geometry={nodes.Cube_FloatyParticles002.geometry} material={materials['Material.007']} position={[0.03, 2.16, -10.8]} rotation={[0, -1.57, 0]} scale={0.94} />
        <mesh name="Cube_FloatyParticles003" geometry={nodes.Cube_FloatyParticles003.geometry} material={materials['Material.007']} position={[-10.76, 2.04, -0.1]} rotation={[0, -1.56, 0]} scale={0.94} />
        <mesh name="Cube_FloatyParticles004" geometry={nodes.Cube_FloatyParticles004.geometry} material={materials['Material.007']} position={[0.05, 1.94, 11.73]} rotation={[0, -1.57, 0]} scale={0.94} />
        <mesh name="Cube040" geometry={nodes.Cube040.geometry} material={materials['Material.023']} position={[0, 0.85, 0]} scale={[4.61, 0.54, 4.61]} />
        <mesh name="Cube041" geometry={nodes.Cube041.geometry} material={materials['Material.023']} position={[0, 1.93, 0]} scale={[4.61, 0.54, 4.61]} />
        <mesh name="Cube042" geometry={nodes.Cube042.geometry} material={materials['Material.023']} position={[0, 3.01, 0]} scale={[4.61, 0.54, 4.61]} />
        <mesh name="DustParticles" geometry={nodes.DustParticles.geometry} material={materials['DustParticles.002']} position={[-0.12, 7.49, -0.29]} scale={5.08} />
      </group>
    </group>
  )
}

useGLTF.preload('/pclub-transformed.glb')
