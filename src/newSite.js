import { Canvas } from '@react-three/fiber'
import React, { Component, useState, Suspense, useEffect } from 'react';
import './App.css';
import * as THREE from 'three'
import DrawerMenu from '../src/components/Drawer/DrawerMenu';
import { useGLTF, Detailed, Sparkles, Sky, SpotLight, Bounds, OrbitControls, PerspectiveCamera, OrthographicCamera, Preload, BakeShadows, meshBounds, AdaptiveDpr, Float, Html, useProgress, useBounds } from '@react-three/drei';
const Scene2 = React.lazy(() => import(/* webpackPrefetch: true */'./threejs/Scene2'));

export default function NewSite(...props) {

  function Loader() {
    const { progress, errors } = useProgress();
    return <Html center color="black"> Loading 3D environment could take a while ...</Html>
  }

  function SelectToZoom({ children }) {
    const api = useBounds()
    return (
      <group onClick={(e) => (e.stopPropagation(), e.delta <= 50 && api.refresh(e.object).fit().clip().observe())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
        {children}
      </group>
    )
  }

  const arduinoUrlBase = 'https://gmapps-api-v1.gmdev.workers.dev/api/Arduino/';

  const [colorArduino, setColorArduino] = useState('white');
  const [colorArduinoStatus, setColorArduinoStatus] = useState('white');
  const [ArduinoStatusData, setArduinoStatusData] = useState([{
    
      value: 'false',
      status: '404',
      name: '_'
    
  }]);


  const onClickTurnOnLED = () => {
    try {
      async function turnArduinoOn() {

        const response = await fetch((arduinoUrlBase + 'ToggleON'));

        if (!response.ok) {
          const message = `A fetching error has occured: ${response.status}`;
          throw new Error(message);
        }
        console.log("Response is ", response);
      }

      turnArduinoOn().catch(error => {
        console.log("Error" + error.message);
      });

      turnArduinoOn().then(data => {
        setColorArduino('blue')
      })

    } catch (error) {
      console.log("Arduino Turn On Error" + error);
    }
  }

  useEffect(() => {

    async function getArduinoStatus() {

      const response = await fetch((arduinoUrlBase + 'STATUS'));

      if (!response.ok) {
        const message = `A fetching error has occured: ${response.status}`;
        throw new Error(message);
      }
      console.log("Response is ", response);

      const data = await response.json();
      console.log("Data is ", data);

      return data;
    }

    getArduinoStatus().then(data => {
      if (data.value === 'true') {
        setColorArduinoStatus('blue');
      }
      else {
        setColorArduinoStatus('red');
      }

    })

    const timer = setInterval(() => {
      getArduinoStatus().then(data => {
        if (data.value === 'true') {
          setColorArduinoStatus('blue');
          setArduinoStatusData(data);
        }
        else {
          setColorArduinoStatus('red');
        }

      })
    }, 60000);


    return () => clearInterval(timer);
  }, [])


  return (
    <div id="canvas-container" style={{ width: '99%', padding: '0px', margin: '0px' }}>
      <div style={{ width: '100%', backgroundColor: '#101730ff', textAlign: 'center', padding: '0px', margin: '5px' }}> <DrawerMenu  /> </div>

      <Canvas
        shadows
        flat
        linear
      >

        <Suspense fallback={<Loader />}>
          <SpotLight
            distance={5}
            angle={0.15}
            attenuation={5}
            anglePower={5} // Diffuse-cone anglePower (default: 5)
            postition={[0, 10, 0]}
          />

          <mesh
            name="button1"
            castShadow
            receiveShadow
            position={[0, 10, 100]}
            rotation={[0, 0, 0]}
            scale={.5}
            onClick={() => onClickTurnOnLED()}
          >
            <circleBufferGeometry args={[10, 10, 10]} />
            <meshPhysicalMaterial color="blue" side={THREE.DoubleSide} />
          </mesh>

          <mesh
            name="button2"
            castShadow
            receiveShadow
            position={[-60, 10, 100]}
            rotation={[0, 0, 0]}
            scale={.5}
            onClick={() => alert('btn2')}
          >
            <circleBufferGeometry args={[10, 10, 10]} />
            <meshPhysicalMaterial color="blue" side={THREE.DoubleSide} />
          </mesh>

          <mesh
            name="button3"
            castShadow
            receiveShadow
            position={[-125, 10, 100]}
            rotation={[0, 0, 0]}
            scale={.5}
          >
            <circleBufferGeometry args={[10, 10, 10]} />
            <meshPhysicalMaterial color="blue" side={THREE.DoubleSide} />
          </mesh>

          <mesh
            name="box1"
            castShadow
            receiveShadow
            position={[0, 100, 100]}
            rotation={[0, 0, 0]}
            scale={.5}
          >
            <boxBufferGeometry args={[10, 10, 10]} />
            <meshPhysicalMaterial color={colorArduino} side={THREE.DoubleSide} />
          </mesh>

          <mesh
            name="box2"
            castShadow
            receiveShadow
            position={[-60, 100, 100]}
            rotation={[0, 0, 0]}
            scale={.5}
          >
            <boxBufferGeometry args={[10, 10, 10]} />
            <meshPhysicalMaterial color="white" side={THREE.DoubleSide} />
          </mesh>

          <mesh
            name="box3"
            castShadow
            receiveShadow
            position={[-125, 100, 100]}
            rotation={[0, 0, 0]}
            scale={.5}
          >
            <boxBufferGeometry args={[10, 10, 10]} />
            <meshPhysicalMaterial color={colorArduinoStatus} side={THREE.DoubleSide} />
          </mesh>

          <mesh
            name="floor"
            castShadow
            receiveShadow
            position={[200, -15490, -300]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5}
          >
            <boxBufferGeometry args={[1000, 1000, 6000]} />
            <meshPhysicalMaterial color="black" side={THREE.DoubleSide} />
          </mesh>

          <mesh
            name="floorextra"
            castShadow
            receiveShadow
            position={[5000, -20490, 10000]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5}
          >
            <boxBufferGeometry args={[1000, 1000, 6000]} />
            <meshPhysicalMaterial color="black" side={THREE.DoubleSide} />
          </mesh>

          <mesh
            name="floorextra2"
            castShadow
            receiveShadow
            position={[10000, -30490, -10000]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5}
          >
            <boxBufferGeometry args={[1000, 1000, 6000]} />
            <meshPhysicalMaterial color="black" side={THREE.DoubleSide} />
          </mesh>


          <Float
            speed={.2} // Animation speed, defaults to 1
            rotationIntensity={10} // XYZ rotation intensity, defaults to 1
            floatIntensity={3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[8, 20]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <mesh
              name="floor2"
              castShadow
              receiveShadow
              position={[-15000, -10490, -10000]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={5}
            >
              <boxBufferGeometry args={[1000, 1000, 6000]} />
              <meshPhysicalMaterial color="black" side={THREE.DoubleSide} />
            </mesh>

          </Float>

          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={3} // XYZ rotation intensity, defaults to 1
            floatIntensity={3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <mesh
              name="floor3"
              castShadow
              receiveShadow
              position={[-10000, 15490, 7000]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={5}
            >
              <boxBufferGeometry args={[1000, 1000, 6000]} />
              <meshPhysicalMaterial color="black" side={THREE.DoubleSide} />
            </mesh>

          </Float>

          <Bounds
            fit
            clip
            margin={1}
          >
            <SelectToZoom>

              <Float
                speed={1} // Animation speed, defaults to 1
                rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
              >
                <mesh
                  name="cube"
                  castShadow
                  receiveShadow
                  position={[3000, 500, 3000]}
                  rotation={[0, 0, 0]}
                  scale={1}
                >
                  <boxBufferGeometry args={[100, 100, 100]} />
                  <meshPhysicalMaterial color="white" side={THREE.DoubleSide} />
                </mesh>
              </Float>

              <Float
                speed={3} // Animation speed, defaults to 1
                rotationIntensity={6} // XYZ rotation intensity, defaults to 1
                floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[8, 40]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
              >
                <mesh
                  name="cube"
                  castShadow
                  receiveShadow
                  position={[-3000, 600, -7000]}
                  rotation={[0, 0, 0]}
                  scale={1}
                >
                  <boxBufferGeometry args={[100, 100, 100]} />
                  <meshPhysicalMaterial color="white" side={THREE.DoubleSide} />
                </mesh>
              </Float>

              <Scene2 />
              <AdaptiveDpr pixelated />
              <BakeShadows />
              <Preload all />

            </SelectToZoom>
          </Bounds>
          <OrbitControls makeDefault />
        </Suspense>
      </Canvas>

    </div>
  )
}