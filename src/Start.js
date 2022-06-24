import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './threejs/Scene1'
//Standard imports 
import React, { Component , useState} from 'react';

import './App.css';
import DrawerMenu2 from '../src/components/Drawer/DrawerMenu2';

export default function Start(props) {

  const [startScene, setStartScene] = useState(true);
  
  //Add drawer to hide return button 
  
  const sceneChange = (data) => {
    setStartScene(data);
  }

  props.func(startScene);
  
  return (
    <div id="canvas-container" >
      <div  style={{ padding:'1px', backgroundColor:'#101730ff',textAlign:'center'}}> <DrawerMenu2 func={sceneChange}/> </div>
    <Suspense fallback={null}>
      <Canvas shadows flat linear camera={{ position: [0, 10, 0], fov: 90 }} 
                dpr={[1, 2]}>
        <Scene />
        <OrbitControls />
      </Canvas>
    </Suspense>
    </div>
  )
}