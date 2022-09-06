import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useProgress, Preload, BakeShadows, AdaptiveDpr,  } from '@react-three/drei'
//import Scene from './threejs/Scene1'
//Standard imports 
import React, { Component, useState, Suspense } from 'react';
import './App.css';
import DrawerMenu2 from '../src/components/Drawer/DrawerMenu2';


const Scene = React.lazy(() => import(/* webpackPrefetch: true */'./threejs/Scene1'));

export default function Start(props) {

  const [startScene, setStartScene] = useState(false);
  

  const sceneChange = (data) => {
    setStartScene(data);
  }
  const trashbtnClick = (data) => {
    setStartScene(data);
  }
  const doorbtnClick = (data) => {
    setStartScene(data);
  }

  function Loader() {
    const { progress, errors } = useProgress();
    return <Html center>{progress}{errors} % Loading...</Html>
  }

  props.func(startScene);
  

  return (
    <div id="canvas-container" >
      <div style={{ padding: '1px', backgroundColor: '#101730ff', textAlign: 'center' }}> <DrawerMenu2 func={sceneChange} /> </div>
      
      <Canvas shadows flat linear>
        
        <Suspense fallback={<Loader />}>
          <Scene func2={trashbtnClick} func3={doorbtnClick}/>
          <AdaptiveDpr pixelated />
          <BakeShadows />
          <Preload all />
        </Suspense>
        <OrbitControls />
      </Canvas>

    </div>
  )
}