import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
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
      scale={clicked ? 3 : 2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={clicked ? [1, 1, 1] : [5, 5, 1] } />
      {hovered ?  (<boxGeometry args={clicked ? [2, 3, 2] : [4, 3, 3] } />) :  (<sphereGeometry args={clicked ? [2,8,2]:[4]}/>) }
      <meshNormalMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
export default Box;