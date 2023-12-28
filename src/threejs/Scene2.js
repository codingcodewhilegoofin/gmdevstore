import React, { Component, useState, Suspense, useEffect } from 'react';
import useSpline from '@splinetool/r3f-spline';
import ArduinoUIMenu from './arduinoUIMenu';

import { PerspectiveCamera, OrthographicCamera, Preload, BakeShadows, meshBounds, AdaptiveDpr, Float, Html, useProgress } from '@react-three/drei';

export default function Scene2({ ...props }) {

  const [arduinoUI, setArduinoUI] = useState(false);

  function Loader() {
    const { progress, errors } = useProgress();
    return <Html center>{progress}{errors} % Loading...</Html>
  }

  const { nodes, materials } = useSpline('https://prod.spline.design/TLG5AexNXgBZPKUV/scene.splinecode');

  useEffect(() => {
    if (arduinoUI) {
      alert("Hi")
    }

    return () => {

    }
  }, [arduinoUI])


  return (
    <>
      <Html fullscreen  distanceFactor={100}  >
        {arduinoUI ? <></> : <></>}
      </Html>
      <color attach="background" args={['#243232ff']} />
      <fog attach="fog" args={['#2E5252ff', 2000, 2000]} />
      <group {...props} dispose={null}>
        <group name="Shibuu" position={[1248, -373, -1132]} rotation={[-2.74, -0.47, -2.95]} >
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={nodes.Plane.material}
            castShadow
            receiveShadow
            position={[1023, 554, -271]}
            rotation={[0.28, 3.05, 0]}
            scale={[0.4, 0.45, 0.4]}
            onClick={() => alert("My first 3D model created in blender... supposed to be a dog lol ")}
          />
        </group>
        <mesh
          name="fsdwebsite.png"
          geometry={nodes['fsdwebsite.png'].geometry}
          material={materials['fsdwebsite.png Material']}
          castShadow
          receiveShadow
          position={[181, 73, 135]}
          rotation={[0, Math.PI, 0]}
          scale={[0.12, 0.14, 0.2]}
          onClick={() => {
            window.location.href = "https://fullstackingdevelopment.com/";

          }}
        />
        <mesh
        
          castShadow
          receiveShadow
          position={[576, 159, -509]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.43, 0.22, 0.2]}
          onClick={() => alert("The website you're on!")}
        />
        <group
          name="uploads_files_2257883_dumpster_obj"
          position={[-720, -558, -715]}
          rotation={[0, 1.01, 0]}
          scale={10}
          onClick={() => alert("Trash just like my code!")}
        >
          <mesh
            name="Dumpster"
            geometry={nodes.Dumpster.geometry}
            material={nodes.Dumpster.material}
            castShadow
            receiveShadow
            scale={[1.09, 1, 1]}
          />
          <mesh
            name="Cover.001_Cover"
            geometry={nodes['Cover.001_Cover'].geometry}
            material={nodes['Cover.001_Cover'].material}
            castShadow
            receiveShadow
          />
          <mesh name="Cover" geometry={nodes.Cover.geometry} material={nodes.Cover.material} castShadow receiveShadow />
          <mesh name="Wheel" geometry={nodes.Wheel.geometry} material={nodes.Wheel.material} castShadow receiveShadow />
          <mesh
            name="Wheel.003_Wheel"
            geometry={nodes['Wheel.003_Wheel'].geometry}
            material={nodes['Wheel.003_Wheel'].material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Wheel.002_Wheel"
            geometry={nodes['Wheel.002_Wheel'].geometry}
            material={nodes['Wheel.002_Wheel'].material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Wheel.001_Wheel"
            geometry={nodes['Wheel.001_Wheel'].geometry}
            material={nodes['Wheel.001_Wheel'].material}
            castShadow
            receiveShadow
          />
        </group>
        <group name="Raton" position={[427.89, 4.25, -280.36]} rotation={[0, -Math.PI / 2, 0]} scale={0.2}>
          <mesh
            name="Object001"
            geometry={nodes.Object001.geometry}
            material={nodes.Object001.material}
            castShadow
            receiveShadow
            onClick={() => alert("My mouse!")}
          />
        </group>
        <group name="arduino-nano" position={[10.76, 15.8, 66.83]} rotation={[0.02, 0, Math.PI / 2]} scale={0.01}>
          <group name="instance_0" position={[2637.82, 12048.73, 3937.01]} rotation={[-Math.PI, 0, 0]}>
            <mesh
              name="Arduino_Nano"
              geometry={nodes.Arduino_Nano.geometry}
              material={nodes.Arduino_Nano.material}
              castShadow
              receiveShadow
              onClick={() => setArduinoUI(!arduinoUI)}
            >
              <mesh
                name="ID649"
                geometry={nodes.ID649.geometry}
                material={nodes.ID649.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID587"
                geometry={nodes.ID587.geometry}
                material={nodes.ID587.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID530"
                geometry={nodes.ID530.geometry}
                material={nodes.ID530.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID599"
                geometry={nodes.ID599.geometry}
                material={nodes.ID599.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID503"
                geometry={nodes.ID503.geometry}
                material={nodes.ID503.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID619"
                geometry={nodes.ID619.geometry}
                material={nodes.ID619.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID639"
                geometry={nodes.ID639.geometry}
                material={nodes.ID639.material}
                castShadow
                receiveShadow
              />
              <group name="instance_22" position={[2578.76, 1263.99, 408.89]} rotation={[0, 0, -Math.PI]} scale={0.01}>
                <group name="ELEC-23-2Pins_3">
                  <group name="instance_3" position={[79660.55, 20313.24, 0]}>
                    <mesh
                      name="pin_1"
                      geometry={nodes.pin_1.geometry}
                      material={nodes.pin_1.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_4" position={[-39033.96, 20313.24, 0]}>
                    <mesh
                      name="pin_2"
                      geometry={nodes.pin_2.geometry}
                      material={nodes.pin_2.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_2" position={[20313.24, 20313.24, 0]}>
                    <mesh
                      name="pin_21"
                      geometry={nodes.pin_21.geometry}
                      material={nodes.pin_21.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_5" position={[0, 0, 81777.47]}>
                    <mesh
                      name="block_1"
                      geometry={nodes.block_1.geometry}
                      material={nodes.block_1.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </group>
              </group>
              <mesh
                name="ID694"
                geometry={nodes.ID694.geometry}
                material={nodes.ID694.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID664"
                geometry={nodes.ID664.geometry}
                material={nodes.ID664.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID572"
                geometry={nodes.ID572.geometry}
                material={nodes.ID572.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID609"
                geometry={nodes.ID609.geometry}
                material={nodes.ID609.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID704"
                geometry={nodes.ID704.geometry}
                material={nodes.ID704.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID493"
                geometry={nodes.ID493.geometry}
                material={nodes.ID493.material}
                castShadow
                receiveShadow
              />
              <group name="instance_23" position={[449.69, 5171.06, 3528.12]} rotation={[Math.PI, 0, Math.PI / 2]}>
                <mesh
                  name="ELEC-23-2Pins_2"
                  geometry={nodes['ELEC-23-2Pins_2'].geometry}
                  material={nodes['ELEC-23-2Pins_2'].material}
                  castShadow
                  receiveShadow
                >
                  <group name="instance_21" position={[2355.19, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_11"
                      geometry={nodes.pin_11.geometry}
                      material={nodes.pin_11.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_8" position={[-1168.25, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_12"
                      geometry={nodes.pin_12.geometry}
                      material={nodes.pin_12.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_11" position={[-2929.98, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_13"
                      geometry={nodes.pin_13.geometry}
                      material={nodes.pin_13.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_19" position={[1168.25, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_22"
                      geometry={nodes.pin_22.geometry}
                      material={nodes.pin_22.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_12" position={[-4116.92, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_23"
                      geometry={nodes.pin_23.geometry}
                      material={nodes.pin_23.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_7" position={[-1761.72, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_24"
                      geometry={nodes.pin_24.geometry}
                      material={nodes.pin_24.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_16" position={[-593.47, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_25"
                      geometry={nodes.pin_25.geometry}
                      material={nodes.pin_25.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_13" position={[3523.45, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_26"
                      geometry={nodes.pin_26.geometry}
                      material={nodes.pin_26.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_15" position={[2929.98, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_27"
                      geometry={nodes.pin_27.geometry}
                      material={nodes.pin_27.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_18" scale={0.01}>
                    <mesh
                      name="pin_28"
                      geometry={nodes.pin_28.geometry}
                      material={nodes.pin_28.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_20" position={[1761.72, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_29"
                      geometry={nodes.pin_29.geometry}
                      material={nodes.pin_29.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_14" position={[4116.92, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_14"
                      geometry={nodes.pin_14.geometry}
                      material={nodes.pin_14.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_9" position={[-2355.19, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_210"
                      geometry={nodes.pin_210.geometry}
                      material={nodes.pin_210.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_17" position={[593.47, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_15"
                      geometry={nodes.pin_15.geometry}
                      material={nodes.pin_15.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_10" position={[-3523.45, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_211"
                      geometry={nodes.pin_211.geometry}
                      material={nodes.pin_211.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </mesh>
              </group>
              <group name="instance_6" position={[4069.86, 5170.22, 3528.12]} rotation={[Math.PI, 0, Math.PI / 2]}>
                <mesh
                  name="ELEC-23-2Pins_21"
                  geometry={nodes['ELEC-23-2Pins_21'].geometry}
                  material={nodes['ELEC-23-2Pins_21'].material}
                  castShadow
                  receiveShadow
                >
                  <group name="instance_191" position={[1168.25, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_212"
                      geometry={nodes.pin_212.geometry}
                      material={nodes.pin_212.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_101" position={[-3523.45, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_213"
                      geometry={nodes.pin_213.geometry}
                      material={nodes.pin_213.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_111" position={[-2929.98, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_16"
                      geometry={nodes.pin_16.geometry}
                      material={nodes.pin_16.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_141" position={[4116.92, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_17"
                      geometry={nodes.pin_17.geometry}
                      material={nodes.pin_17.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_201" position={[1761.72, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_214"
                      geometry={nodes.pin_214.geometry}
                      material={nodes.pin_214.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_211" position={[2355.19, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_18"
                      geometry={nodes.pin_18.geometry}
                      material={nodes.pin_18.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_91" position={[-2355.19, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_215"
                      geometry={nodes.pin_215.geometry}
                      material={nodes.pin_215.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_151" position={[2929.98, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_216"
                      geometry={nodes.pin_216.geometry}
                      material={nodes.pin_216.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_121" position={[-4116.92, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_217"
                      geometry={nodes.pin_217.geometry}
                      material={nodes.pin_217.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_131" position={[3523.45, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_218"
                      geometry={nodes.pin_218.geometry}
                      material={nodes.pin_218.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_81" position={[-1168.25, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_19"
                      geometry={nodes.pin_19.geometry}
                      material={nodes.pin_19.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_181" scale={0.01}>
                    <mesh
                      name="pin_219"
                      geometry={nodes.pin_219.geometry}
                      material={nodes.pin_219.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_161" position={[-593.47, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_220"
                      geometry={nodes.pin_220.geometry}
                      material={nodes.pin_220.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_171" position={[593.47, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_110"
                      geometry={nodes.pin_110.geometry}
                      material={nodes.pin_110.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_71" position={[-1761.72, 0, 0]} scale={0.01}>
                    <mesh
                      name="pin_221"
                      geometry={nodes.pin_221.geometry}
                      material={nodes.pin_221.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </mesh>
              </group>
              <mesh
                name="ID540"
                geometry={nodes.ID540.geometry}
                material={nodes.ID540.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID560"
                geometry={nodes.ID560.geometry}
                material={nodes.ID560.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID513"
                geometry={nodes.ID513.geometry}
                material={nodes.ID513.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID550"
                geometry={nodes.ID550.geometry}
                material={nodes.ID550.material}
                castShadow
                receiveShadow
              />
              <group name="instance_1" position={[2578.76, 670.52, 408.89]} rotation={[0, 0, -Math.PI]} scale={0.01}>
                <group name="ELEC-23-2Pins_31">
                  <group name="instance_24" position={[20313.24, 20313.24, 0]}>
                    <mesh
                      name="pin_222"
                      geometry={nodes.pin_222.geometry}
                      material={nodes.pin_222.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_31" position={[79660.55, 20313.24, 0]}>
                    <mesh
                      name="pin_111"
                      geometry={nodes.pin_111.geometry}
                      material={nodes.pin_111.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_41" position={[-39033.96, 20313.24, 0]}>
                    <mesh
                      name="pin_223"
                      geometry={nodes.pin_223.geometry}
                      material={nodes.pin_223.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="instance_51" position={[0, 0, 81777.47]}>
                    <mesh
                      name="block_11"
                      geometry={nodes.block_11.geometry}
                      material={nodes.block_11.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </group>
              </group>
              <mesh
                name="ID684"
                geometry={nodes.ID684.geometry}
                material={nodes.ID684.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="ID674"
                geometry={nodes.ID674.geometry}
                material={nodes.ID674.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="group_0"
                geometry={nodes.group_0.geometry}
                material={nodes.group_0.material}
                castShadow
                receiveShadow
                position={[1262.18, 10762.26, 1820.14]}
                rotation={[Math.PI, 0, 0]}
              >
                <mesh
                  name="ID75"
                  geometry={nodes.ID75.geometry}
                  material={nodes.ID75.material}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="ID85"
                  geometry={nodes.ID85.geometry}
                  material={nodes.ID85.material}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="ID45"
                  geometry={nodes.ID45.geometry}
                  material={nodes.ID45.material}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="ID35"
                  geometry={nodes.ID35.geometry}
                  material={nodes.ID35.material}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="ID65"
                  geometry={nodes.ID65.geometry}
                  material={nodes.ID65.material}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="ID25"
                  geometry={nodes.ID25.geometry}
                  material={nodes.ID25.material}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="ID55"
                  geometry={nodes.ID55.geometry}
                  material={nodes.ID55.material}
                  castShadow
                  receiveShadow
                />
              </mesh>
              <mesh
                name="ID629"
                geometry={nodes.ID629.geometry}
                material={nodes.ID629.material}
                castShadow
                receiveShadow
              />
            </mesh>
          </group>
        </group>
        <mesh
          name="desk.jpg"
          geometry={nodes['desk.jpg'].geometry}
          material={materials['desk.jpg Material']}
          castShadow
          receiveShadow
          position={[483.33, 195.52, -35.62]}
          rotation={[-Math.PI, -0.83, -Math.PI]}
          scale={0.2}
        />
        <group name="Laptop" position={[179.61, -0.07, 61.88]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.1}>
          <mesh
            name="Laptop_Keyboard"
            geometry={nodes.Laptop_Keyboard.geometry}
            material={nodes.Laptop_Keyboard.material}
            castShadow
            receiveShadow
            position={[-4.33, 79.14, -0.24]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              name="Laptop_Screen"
              geometry={nodes.Laptop_Screen.geometry}
              material={nodes.Laptop_Screen.material}
              castShadow
              receiveShadow
              position={[0.02, 7.31, 0.33]}

            />
          </mesh>
        </group>
        <group
          name="Monitor 2"
          position={[220.41, 189.61, 257.35]}
          rotation={[-Math.PI, -0.83, -Math.PI]}
          scale={[0.25, 0.25, 0.2]}
          onClick={() => alert("My desk!")}
        >
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            castShadow
            receiveShadow
            position={[-1575.7, 30, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="Button_two001"
            geometry={nodes.Button_two001.geometry}
            material={nodes.Button_two001.material}
            castShadow
            receiveShadow
            position={[-792.22, -496.83, 27.9]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[20, 10, 8]}
          />
          <mesh
            name="Button_two"
            geometry={nodes.Button_two.geometry}
            material={nodes.Button_two.material}
            castShadow
            receiveShadow
            position={[-740.48, -496.83, 27.9]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[20, 10, 8]}
          />
          <mesh
            name="Button"
            geometry={nodes.Button.geometry}
            material={nodes.Button.material}
            castShadow
            receiveShadow
            position={[-695.83, -497.37, 28.55]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
        <group name="Monitor" position={[580.67, 151.59, -194.02]} rotation={[0, -Math.PI / 2, 0]} scale={0.2}>
          <mesh
            name="Cube1"
            geometry={nodes.Cube1.geometry}
            material={nodes.Cube1.material}
            castShadow
            receiveShadow
            position={[-1575.7, 30, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            onClick={() => {
              window.location.href = "/#/";

            }}
          />
          <mesh
            name="Button_two0011"
            geometry={nodes.Button_two0011.geometry}
            material={nodes.Button_two0011.material}
            castShadow
            receiveShadow
            position={[-792.22, -496.83, 27.9]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[20, 10, 8]}
          />
          <mesh
            name="Button_two1"
            geometry={nodes.Button_two1.geometry}
            material={nodes.Button_two1.material}
            castShadow
            receiveShadow
            position={[-740.48, -496.83, 27.9]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[20, 10, 8]}
          />
          <mesh
            name="Button1"
            geometry={nodes.Button1.geometry}
            material={nodes.Button1.material}
            castShadow
            receiveShadow
            position={[-695.83, -497.37, 28.55]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
        <group name="KEYBOARD_OBJ" position={[395.4, 18.51, -397.95]} rotation={[3.16, 4.73, 3.16]} scale={0.2}>
          <mesh
            name="Big Buttons.001"
            geometry={nodes['Big Buttons.001'].geometry}
            material={nodes['Big Buttons.001'].material}
            castShadow
            receiveShadow
            onClick={() => alert("My keyboard !")}
          />
          <mesh
            name="Small Buttons.001"
            geometry={nodes['Small Buttons.001'].geometry}
            material={nodes['Small Buttons.001'].material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Chassis.001"
            geometry={nodes['Chassis.001'].geometry}
            material={nodes['Chassis.001'].material}
            castShadow
            receiveShadow
          />
        </group>
        <group name="Office Chair37" position={[-97.59, -601.26, -413.83]} rotation={[0, Math.PI / 2, 0]} scale={2}>
          <mesh
            name="Plane1"
            geometry={nodes.Plane1.geometry}
            material={nodes.Plane1.material}
            castShadow
            receiveShadow
            position={[0.45, 347.72, -16.46]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            onClick={() => alert("Wish I had pewdiepies chair")}
          />
          <mesh
            name="Plane004"
            geometry={nodes.Plane004.geometry}
            material={nodes.Plane004.material}
            castShadow
            receiveShadow
            position={[0.45, 132.15, 100.43]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={36.1}
          />
          <mesh
            name="Plane002"
            geometry={nodes.Plane002.geometry}
            material={nodes.Plane002.material}
            castShadow
            receiveShadow
            position={[0.45, 148.16, 100.43]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[18.69, 58.11, 10.38]}
          />
          <mesh
            name="Circle001"
            geometry={nodes.Circle001.geometry}
            material={nodes.Circle001.material}
            castShadow
            receiveShadow
            position={[0.45, 151.28, 100.43]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[8.57, 8.57, 22.59]}
          />
          <mesh
            name="aseito_logo"
            geometry={nodes.aseito_logo.geometry}
            material={nodes.aseito_logo.material}
            castShadow
            receiveShadow
            position={[0.45, 368.44, -8.99]}
            scale={6.09}
          />
          <mesh
            name="Circle"
            geometry={nodes.Circle.geometry}
            material={nodes.Circle.material}
            castShadow
            receiveShadow
            position={[0.45, 148.16, 100.43]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={10.16}
          />
          <mesh
            name="Circle005"
            geometry={nodes.Circle005.geometry}
            material={nodes.Circle005.material}
            castShadow
            receiveShadow
            position={[-70, 47.51, 16.89]}
            rotation={[-Math.PI, 0.87, Math.PI / 2]}
            scale={[-8.98, 8.98, 8.98]}
          />
          <mesh
            name="Circle002"
            geometry={nodes.Circle002.geometry}
            material={nodes.Circle002.material}
            castShadow
            receiveShadow
            position={[1.23, 47.51, 208.3]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[-8.98, 8.98, 8.98]}
          />
          <mesh
            name="Circle004"
            geometry={nodes.Circle004.geometry}
            material={nodes.Circle004.material}
            castShadow
            receiveShadow
            position={[69.7, 47.51, 15.89]}
            rotation={[0, 0.87, -Math.PI / 2]}
            scale={[-8.98, 8.98, 8.98]}
          />
          <mesh
            name="Plane005"
            geometry={nodes.Plane005.geometry}
            material={nodes.Plane005.material}
            castShadow
            receiveShadow
            position={[-107.03, 107.39, 124.38]}
            rotation={[-Math.PI / 2, -0.2, 0]}
            scale={12.6}
          />
          <mesh
            name="Plane003"
            geometry={nodes.Plane003.geometry}
            material={nodes.Plane003.material}
            castShadow
            receiveShadow
            position={[0.45, 66, 99.64]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[8.18, 5.51, 8.18]}
          />
          <mesh
            name="Circle003"
            geometry={nodes.Circle003.geometry}
            material={nodes.Circle003.material}
            castShadow
            receiveShadow
            position={[102.83, 47.51, 136.07]}
            rotation={[0, -Math.PI / 9, -Math.PI / 2]}
            scale={[-8.98, 8.98, 8.98]}
          />
          <mesh
            name="Plane001"
            geometry={nodes.Plane001.geometry}
            material={nodes.Plane001.material}
            castShadow
            receiveShadow
            position={[0.45, 207.53, 71.02]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={83.56}
          />
          <mesh
            name="Circle006"
            geometry={nodes.Circle006.geometry}
            material={nodes.Circle006.material}
            castShadow
            receiveShadow
            position={[-101.4, 47.51, 137.53]}
            rotation={[Math.PI, -Math.PI / 9, Math.PI / 2]}
            scale={[-8.98, 8.98, 8.98]}
          />
        </group>
        <group name="LDesk" rotation={[Math.PI, 0, Math.PI]} scale={5}>
          <mesh
            name="tri_top_Cube.001_DeskMaterial"
            geometry={nodes['tri_top_Cube.001_DeskMaterial'].geometry}
            material={nodes['tri_top_Cube.001_DeskMaterial'].material}
            castShadow
            receiveShadow
          />
          <mesh
            name="secondary_top_Cube.004_DeskMaterial"
            geometry={nodes['secondary_top_Cube.004_DeskMaterial'].geometry}
            material={nodes['secondary_top_Cube.004_DeskMaterial'].material}
            castShadow
            receiveShadow
          />
          <mesh
            name="secondary_stand_top_Cube.005_DeskMaterial"
            geometry={nodes['secondary_stand_top_Cube.005_DeskMaterial'].geometry}
            material={nodes['secondary_stand_top_Cube.005_DeskMaterial'].material}
            castShadow
            receiveShadow
          />
          <mesh
            name="main_top_Cube.006_DeskMaterial"
            geometry={nodes['main_top_Cube.006_DeskMaterial'].geometry}
            material={nodes['main_top_Cube.006_DeskMaterial'].material}
            castShadow
            receiveShadow
          />
          <mesh
            name="secondary_mid_bar_Cube.008_DeskMaterial"
            geometry={nodes['secondary_mid_bar_Cube.008_DeskMaterial'].geometry}
            material={nodes['secondary_mid_bar_Cube.008_DeskMaterial'].material}
            castShadow
            receiveShadow
          />
          <mesh
            name="main_legs_Cube_DeskMaterial"
            geometry={nodes.main_legs_Cube_DeskMaterial.geometry}
            material={nodes.main_legs_Cube_DeskMaterial.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="secondary_legs_Cube.013_DeskMaterial"
            geometry={nodes['secondary_legs_Cube.013_DeskMaterial'].geometry}
            material={nodes['secondary_legs_Cube.013_DeskMaterial'].material}
            castShadow
            receiveShadow
          />
          <mesh
            name="tri_legs_Cube.023_DeskMaterial"
            geometry={nodes['tri_legs_Cube.023_DeskMaterial'].geometry}
            material={nodes['tri_legs_Cube.023_DeskMaterial'].material}
            castShadow
            receiveShadow
          />
          <mesh
            name="stopper_Cube.016_DeskMaterial"
            geometry={nodes['stopper_Cube.016_DeskMaterial'].geometry}
            material={nodes['stopper_Cube.016_DeskMaterial'].material}
            castShadow
            receiveShadow
          />
        </group>

        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-581.072}
          shadow-camera-right={581.072}
          shadow-camera-top={581.072}
          shadow-camera-bottom={-581.072}
          position={[-1525.61, 1195.48, 1597.86]}
        />

        <hemisphereLight name="Default Ambient Light" intensity={0.49} position={[0, 1, 0]} />
      </group>
    </>
  )
}
