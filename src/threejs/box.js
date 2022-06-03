//import ReactDOM from 'react-dom'
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame  } from '@react-three/fiber'
import { useTexture } from "@react-three/drei"


function Box(props) {
  
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  //const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)


 

  // Subscribe this component to the render-loop, rotate the mesh every frame
  //useFrame((state, delta) => (ref.current.rotation.z += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX

  return (
    /* the direct equivalent to new THREE.Mesh(). 
    
    All three.js objects will be treated as native 
    JSX elements, just like you can just write
    <div /> or <span /> in regular ReactDOM.
    
    */
  
    <mesh // Scence object used to hold geometry and material for 3D space
      {...props}
      ref={ref}
      scale={1}
      position={props.position}
      /* [Math.PI / -2, 0, 0]} */
      rotation={props.rotation}>
      onClick={(event) => click(!clicked)}
  
      <planeBufferGeometry args={[100, 100, 25, 25]} />
      <meshPhysicalMaterial  color="red" side={THREE.DoubleSide} />
    </mesh>
  
  )
}
export default Box;