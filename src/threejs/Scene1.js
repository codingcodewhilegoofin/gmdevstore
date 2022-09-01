import React, { Component, useState, Suspense } from 'react';
import useSpline from '@splinetool/r3f-spline';
import * as THREE from 'three'
import { PerspectiveCamera, OrthographicCamera, Preload, BakeShadows, meshBounds, AdaptiveDpr, Float, Html, useProgress } from '@react-three/drei';
const Background = React.lazy(() => import('./Background'));

export default function Scene1({ ...props }) {

  const [trashClick, setTrashClick] = useState(true);
  const [doorClick, setDoorClick] = useState(true);
  props.func2(trashClick);
  props.func3(doorClick);

  const onTrashClick = () => {
    
    window.location.href = "/#/";
    window.location.reload();
  }
  const onDoorClick = () => {
    
    window.location.href = "/#/dependency+";
    window.location.reload();
  }
  const onShrekClick = () => {
    alert("Shrek Loves you ");
  }
  const onSecretClick = () => {
    alert("Tehehe you found a secret");
  }

  function Loader() {
    const { progress, errors } = useProgress();
    return <Html center>{progress}{errors} % Loading...</Html>
  }

  const { nodes, materials } = useSpline('https://prod.spline.design/pAUUxrxwTGA74AC2/scene.splinecode');

  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 1589.744, 2000]} />
      <group {...props} dispose={null}>
        <PerspectiveCamera
          name="Camera 20170707201829"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          up={[0, 1, 0]}
          position={[500, 0, 1000]}
        />
        <mesh
          onClick={onDoorClick}
          name="Rectangle 20170707201830"
          geometry={nodes['Rectangle 20170707201830'].geometry}
          material={materials['Rectangle 20170707201830 Material']}
          position={[-1122.38, -46.68, -520.34]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1.49]}

        >

        </mesh>

        <group
          name="CHARACTER_Shrek"
          position={[-2367.51, -206.52, 29.71]}
          rotation={[3.07, 1.51, -Math.PI]}
          scale={[7.39, 7.62, 4]}
        >
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >

            <mesh
              onClick={onShrekClick}
              name="Ecelon_Ecelon_Shrek"
              geometry={nodes.Ecelon_Ecelon_Shrek.geometry}
              material={nodes.Ecelon_Ecelon_Shrek.material}
              castShadow
              receiveShadow
            >

            </mesh>
            <mesh
              name="Ecelon_Ecelon_shrekshirt_S"
              geometry={nodes.Ecelon_Ecelon_shrekshirt_S.geometry}
              material={nodes.Ecelon_Ecelon_shrekshirt_S.material}
              castShadow
              receiveShadow
            >
              <Html as='h2'> <h2 style={{ color: 'Green', fontWeight: '900', lineSpacing: '5px' }}>Shrek </h2></Html>
            </mesh>
          </Float>
        </group>
        <mesh
          name="Rectangle 20170707201829"
          geometry={nodes['Rectangle 20170707201829'].geometry}
          material={materials['Rectangle 20170707201829 Material']}
          castShadow
          receiveShadow
          position={[-935.57, 280.14, -179.19]}
          scale={[5.47, 4.49, 0]}

        >

        </mesh>
        <group name="Text 20170707201831" position={[-925.43, 156.43, -162.96]} scale={[1, 1, 2.07]}>
          <mesh
            name="O"
            geometry={nodes.O.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-153.89, 76.22, 0]}
          />
          <mesh
            name="r"
            geometry={nodes.r.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-139.11, 76.22, 0]}
          />
          <mesh
            name="c"
            geometry={nodes.c.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-125.83, 76.22, 0]}
          />
          <mesh
            name="l"
            geometry={nodes.l.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-115.9, 76.22, 0]}
          />
          <mesh
            name="i"
            geometry={nodes.i.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-109.43, 76.22, 0]}
          />
          <mesh
            name="i1"
            geometry={nodes.i1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-109.43, 76.22, 0]}
          />
          <mesh
            name="c1"
            geometry={nodes.c1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-102.54, 76.22, 0]}
          />
          <mesh
            name="k"
            geometry={nodes.k.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-92.62, 76.22, 0]}
          />
          <mesh
            name="k1"
            geometry={nodes.k1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-92.62, 76.22, 0]}
          />
          <mesh
            name="t"
            geometry={nodes.t.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-77.14, 76.22, 0]}
          />
          <mesh
            name="h"
            geometry={nodes.h.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-69.6, 76.22, 0]}
          />
          <mesh
            name="e"
            geometry={nodes.e.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-57.12, 76.22, 0]}
          />
          <mesh
            name="d"
            geometry={nodes.d.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-43.07, 76.22, 0]}
          />
          <mesh
            name="o"
            geometry={nodes.o.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-30.99, 76.22, 0]}
          />
          <mesh
            name="o1"
            geometry={nodes.o1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-19.5, 76.22, 0]}
          />
          <mesh
            name="r1"
            geometry={nodes.r1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-8.02, 76.22, 0]}
          />
          <mesh
            name="f"
            geometry={nodes.f.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[5.26, 76.22, 0]}
          />
          <mesh
            name="o2"
            geometry={nodes.o2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[13.27, 76.22, 0]}
          />
          <mesh
            name="r2"
            geometry={nodes.r2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[24.75, 76.22, 0]}
          />
          <mesh
            name="a"
            geometry={nodes.a.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[38.03, 76.22, 0]}
          />
          <mesh
            name="3"
            geometry={nodes['3'].geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[52.42, 76.22, 0]}
          />
          <mesh
            name="D"
            geometry={nodes.D.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[62.52, 76.22, 0]}
          />
          <mesh
            name="v"
            geometry={nodes.v.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[81.15, 76.22, 0]}
          />
          <mesh
            name="e1"
            geometry={nodes.e1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[92.24, 76.22, 0]}
          />
          <mesh
            name="r3"
            geometry={nodes.r3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[103.04, 76.22, 0]}
          />
          <mesh
            name="s"
            geometry={nodes.s.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[113.08, 76.22, 0]}
          />
          <mesh
            name="i2"
            geometry={nodes.i2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[122.47, 76.22, 0]}
          />
          <mesh
            name="i3"
            geometry={nodes.i3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[122.47, 76.22, 0]}
          />
          <mesh
            name="o3"
            geometry={nodes.o3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[129.35, 76.22, 0]}
          />
          <mesh
            name="n"
            geometry={nodes.n.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[140.83, 76.22, 0]}
          />
        </group>
        <group
          onClick={onSecretClick}
          name="Text 20170707201834"
          position={[-808.22, -87.55, 94.42]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 9.84]}
        >
          <mesh
            name="H"
            geometry={nodes.H.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-39.19, 93.68, 0]}
          />
          <mesh
            name="e2"
            geometry={nodes.e2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-34.08, 93.68, 0]}
          />
          <mesh
            name="h1"
            geometry={nodes.h1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-30.29, 93.68, 0]}
          />
          <mesh
            name="e3"
            geometry={nodes.e3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-26.22, 93.68, 0]}
          />
          <mesh
            name="y"
            geometry={nodes.y.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-20.65, 93.68, 0]}
          />
          <mesh
            name="o4"
            geometry={nodes.o4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-17.05, 93.68, 0]}
          />
          <mesh
            name="u"
            geometry={nodes.u.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-12.97, 93.68, 0]}
          />
          <mesh
            name="f1"
            geometry={nodes.f1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-7.12, 93.68, 0]}
          />
          <mesh
            name="o5"
            geometry={nodes.o5.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-4.65, 93.68, 0]}
          />
          <mesh
            name="u1"
            geometry={nodes.u1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-0.58, 93.68, 0]}
          />
          <mesh
            name="n1"
            geometry={nodes.n1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[3.49, 93.68, 0]}
          />
          <mesh
            name="d1"
            geometry={nodes.d1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[7.56, 93.68, 0]}
          />
          <mesh
            name="a1"
            geometry={nodes.a1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[13.41, 93.68, 0]}
          />
          <mesh
            name="s1"
            geometry={nodes.s1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[19.14, 93.68, 0]}
          />
          <mesh
            name="e4"
            geometry={nodes.e4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[22.88, 93.68, 0]}
          />
          <mesh
            name="c2"
            geometry={nodes.c2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[26.67, 93.68, 0]}
          />
          <mesh
            name="r4"
            geometry={nodes.r4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[30.47, 93.68, 0]}
          />
          <mesh
            name="e5"
            geometry={nodes.e5.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[32.93, 93.68, 0]}
          />
          <mesh
            name="t1"
            geometry={nodes.t1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[36.72, 93.68, 0]}
          />
        </group>
        <group
          name="Text 20170707201833"
          position={[-736.57, -104.76, 9.2]}
          rotation={[0.26, -Math.PI / 3, 0.17]}
          scale={[1, 1, 9.84]}
        >
          <mesh
            name="C"
            geometry={nodes.C.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-89.28, 70.91, 0]}
          />
          <mesh
            name="l1"
            geometry={nodes.l1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-65.05, 70.91, 0]}
          />
          <mesh
            name="i4"
            geometry={nodes.i4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-55.41, 70.91, 0]}
          />
          <mesh
            name="i5"
            geometry={nodes.i5.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-55.41, 70.91, 0]}
          />
          <mesh
            name="c3"
            geometry={nodes.c3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-45.77, 70.91, 0]}
          />
          <mesh
            name="k2"
            geometry={nodes.k2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-25.47, 70.91, 0]}
          />
          <mesh
            name="m"
            geometry={nodes.m.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[3.64, 70.91, 0]}
          />
          <mesh
            name="e6"
            geometry={nodes.e6.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[37.07, 70.91, 0]}
          />
          <mesh
            name=":"
            geometry={nodes[':'].geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[66.78, 70.91, 0]}
          />
          <mesh
            name=":1"
            geometry={nodes[':1'].geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[66.78, 70.91, 0]}
          />
          <mesh
            name=")"
            geometry={nodes[')'].geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[76.45, 70.91, 0]}
          />
        </group>
        <group name="Text 20170707201832" position={[-1132.3, 9.49, -418.43]} scale={[1, 1, 2.07]}>
          <mesh
            name="C1"
            geometry={nodes.C1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-117.94, 70.91, 0]}
          />
          <mesh
            name="l2"
            geometry={nodes.l2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-93.7, 70.91, 0]}
          />
          <mesh
            name="i6"
            geometry={nodes.i6.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-84.07, 70.91, 0]}
          />
          <mesh
            name="i7"
            geometry={nodes.i7.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-84.07, 70.91, 0]}
          />
          <mesh
            name="c4"
            geometry={nodes.c4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-74.43, 70.91, 0]}
          />
          <mesh
            name="k3"
            geometry={nodes.k3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-54.13, 70.91, 0]}
          />
          <mesh
            name="t2"
            geometry={nodes.t2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-25.02, 70.91, 0]}
          />
          <mesh
            name="h2"
            geometry={nodes.h2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-11.8, 70.91, 0]}
          />
          <mesh
            name="e7"
            geometry={nodes.e7.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[9.93, 70.91, 0]}
          />
          <mesh
            name="d2"
            geometry={nodes.d2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[39.64, 70.91, 0]}
          />
          <mesh
            name="o6"
            geometry={nodes.o6.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[61.37, 70.91, 0]}
          />
          <mesh
            name="o7"
            geometry={nodes.o7.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[83.1, 70.91, 0]}
          />
          <mesh
            name="r5"
            geometry={nodes.r5.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[104.83, 70.91, 0]}
          />
        </group>
        <group name="Text 20170707201830" position={[-971.83, 186.14, -162.96]} scale={[1, 1, 2.07]}>
          <mesh
            name="C2"
            geometry={nodes.C2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-251.63, 74.45, 0]}
          />
          <mesh
            name="l3"
            geometry={nodes.l3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-230.24, 74.45, 0]}
          />
          <mesh
            name="i8"
            geometry={nodes.i8.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-221.74, 74.45, 0]}
          />
          <mesh
            name="i9"
            geometry={nodes.i9.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-221.74, 74.45, 0]}
          />
          <mesh
            name="c5"
            geometry={nodes.c5.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-213.23, 74.45, 0]}
          />
          <mesh
            name="k4"
            geometry={nodes.k4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-195.32, 74.45, 0]}
          />
          <mesh
            name="t3"
            geometry={nodes.t3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-169.64, 74.45, 0]}
          />
          <mesh
            name="h3"
            geometry={nodes.h3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-157.97, 74.45, 0]}
          />
          <mesh
            name="e8"
            geometry={nodes.e8.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-138.8, 74.45, 0]}
          />
          <mesh
            name="T"
            geometry={nodes.T.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-112.58, 74.45, 0]}
          />
          <mesh
            name="r6"
            geometry={nodes.r6.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-92.8, 74.45, 0]}
          />
          <mesh
            name="a2"
            geometry={nodes.a2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-81.23, 74.45, 0]}
          />
          <mesh
            name="s2"
            geometry={nodes.s2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-62.67, 74.45, 0]}
          />
          <mesh
            name="h4"
            geometry={nodes.h4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-45.03, 74.45, 0]}
          />
          <mesh
            name="C3"
            geometry={nodes.C3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-25.86, 74.45, 0]}
          />
          <mesh
            name="a3"
            geometry={nodes.a3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-4.47, 74.45, 0]}
          />
          <mesh
            name="n2"
            geometry={nodes.n2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[14.09, 74.45, 0]}
          />
          <mesh
            name="t4"
            geometry={nodes.t4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[41.65, 74.45, 0]}
          />
          <mesh
            name="o8"
            geometry={nodes.o8.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[53.31, 74.45, 0]}
          />
          <mesh
            name="s3"
            geometry={nodes.s3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[80.87, 74.45, 0]}
          />
          <mesh
            name="e9"
            geometry={nodes.e9.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[98.51, 74.45, 0]}
          />
          <mesh
            name="e10"
            geometry={nodes.e10.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[116.35, 74.45, 0]}
          />
          <mesh
            name="m1"
            geometry={nodes.m1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[142.57, 74.45, 0]}
          />
          <mesh
            name="i10"
            geometry={nodes.i10.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[172.07, 74.45, 0]}
          />
          <mesh
            name="i11"
            geometry={nodes.i11.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[172.07, 74.45, 0]}
          />
          <mesh
            name="n3"
            geometry={nodes.n3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[180.57, 74.45, 0]}
          />
          <mesh
            name="e11"
            geometry={nodes.e11.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[199.75, 74.45, 0]}
          />
          <mesh
            name="!"
            geometry={nodes['!'].geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[217.58, 74.45, 0]}
          />
          <mesh
            name="!1"
            geometry={nodes['!1'].geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[217.58, 74.45, 0]}
          />
        </group>
        <group name="Text 20170707201829" position={[-925.43, 223.2, -162.96]} scale={[1, 1, 2.07]}>
          <mesh
            name="E"
            geometry={nodes.E.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-297.07, 74.45, 0]}
          />
          <mesh
            name="v1"
            geometry={nodes.v1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-277.34, 74.45, 0]}
          />
          <mesh
            name="e12"
            geometry={nodes.e12.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-260.35, 74.45, 0]}
          />
          <mesh
            name="r7"
            geometry={nodes.r7.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-242.51, 74.45, 0]}
          />
          <mesh
            name="y1"
            geometry={nodes.y1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-230.95, 74.45, 0]}
          />
          <mesh
            name="o9"
            geometry={nodes.o9.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-213.96, 74.45, 0]}
          />
          <mesh
            name="n4"
            geometry={nodes.n4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-194.79, 74.45, 0]}
          />
          <mesh
            name="e13"
            geometry={nodes.e13.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-175.62, 74.45, 0]}
          />
          <mesh
            name="s4"
            geometry={nodes.s4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-157.78, 74.45, 0]}
          />
          <mesh
            name="f2"
            geometry={nodes.f2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-131.75, 74.45, 0]}
          />
          <mesh
            name="i12"
            geometry={nodes.i12.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-120.11, 74.45, 0]}
          />
          <mesh
            name="i13"
            geometry={nodes.i13.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-120.11, 74.45, 0]}
          />
          <mesh
            name="r8"
            geometry={nodes.r8.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-111.61, 74.45, 0]}
          />
          <mesh
            name="s5"
            geometry={nodes.s5.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-100.04, 74.45, 0]}
          />
          <mesh
            name="t5"
            geometry={nodes.t5.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-82.4, 74.45, 0]}
          />
          <mesh
            name="D1"
            geometry={nodes.D1.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-62.35, 74.45, 0]}
          />
          <mesh
            name="e14"
            geometry={nodes.e14.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-40.12, 74.45, 0]}
          />
          <mesh
            name="v2"
            geometry={nodes.v2.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[-22.28, 74.45, 0]}
          />
          <mesh
            name="p"
            geometry={nodes.p.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[3.09, 74.45, 0]}
          />
          <mesh
            name="o10"
            geometry={nodes.o10.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[22.26, 74.45, 0]}
          />
          <mesh
            name="r9"
            geometry={nodes.r9.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[41.43, 74.45, 0]}
          />
          <mesh
            name="t6"
            geometry={nodes.t6.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[53, 74.45, 0]}
          />
          <mesh
            name="f3"
            geometry={nodes.f3.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[64.66, 74.45, 0]}
          />
          <mesh
            name="o11"
            geometry={nodes.o11.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[76.3, 74.45, 0]}
          />
          <mesh
            name="l4"
            geometry={nodes.l4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[95.47, 74.45, 0]}
          />
          <mesh
            name="i14"
            geometry={nodes.i14.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[103.98, 74.45, 0]}
          />
          <mesh
            name="i15"
            geometry={nodes.i15.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[103.98, 74.45, 0]}
          />
          <mesh
            name="o12"
            geometry={nodes.o12.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[112.48, 74.45, 0]}
          />
          <mesh
            name="i16"
            geometry={nodes.i16.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[140.04, 74.45, 0]}
          />
          <mesh
            name="i17"
            geometry={nodes.i17.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[140.04, 74.45, 0]}
          />
          <mesh
            name="s6"
            geometry={nodes.s6.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[148.55, 74.45, 0]}
          />
          <mesh
            name="t7"
            geometry={nodes.t7.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[174.57, 74.45, 0]}
          />
          <mesh
            name="r10"
            geometry={nodes.r10.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[186.24, 74.45, 0]}
          />
          <mesh
            name="a4"
            geometry={nodes.a4.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[197.8, 74.45, 0]}
          />
          <mesh
            name="s7"
            geometry={nodes.s7.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[216.37, 74.45, 0]}
          />
          <mesh
            name="h5"
            geometry={nodes.h5.geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[234.01, 74.45, 0]}
          />
          <mesh
            name="."
            geometry={nodes['.'].geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[253.18, 74.45, 0]}
          />
          <mesh
            name=".1"
            geometry={nodes['.1'].geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[262.22, 74.45, 0]}
          />
          <mesh
            name=".2"
            geometry={nodes['.2'].geometry}
            material={materials['My Text Material']}
            castShadow
            receiveShadow
            position={[271.26, 74.45, 0]}
          />
        </group>
        <Suspense fallback={<Loader />}>
          <Background nodes={nodes} materials={materials} />

        </Suspense>
        <group name="concrete-bin" position={[-818.48, -154.79, 0]} rotation={[-Math.PI / 2, 0, -2.5]} scale={2}>
          <mesh
            onClick={onTrashClick}
            name="concrete-bin1"
            geometry={nodes['concrete-bin1'].geometry}
            material={nodes['concrete-bin1'].material}
            castShadow
            receiveShadow
          />
        </group>
        <mesh 
          scale={1}
          position={[0 , 200, 0]}
          rotation={[0 , 0, 0]}
          castShadow
          receiveShadow
        >
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial color="white" side={THREE.FrontSide} />

        </mesh>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.96}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          color="#759999"
          position={[0, 1385, 0]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={1.79} color="#465478" position={[0, 1, 0]} />

      </group>

    </>
  )
}
