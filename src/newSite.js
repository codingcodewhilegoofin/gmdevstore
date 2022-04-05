import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Box from './threejs/box';
import { MapControls } from '@react-three/drei'






function NewSite() {
    return(
        /*
        
        The Canvas component does some 
        important setup work behind 
        the scenes: 
        
        1:It sets up a Renderer,  Scene and a Camera, 
        the basic building blocks necessary for rendering

        2:It renders our scene every frame, 
        you do not need a traditional render-loop

        Camera will create a Viewing Frustum: 
        Everything inside the frustum is visible, while everything outside it is not. 

        */
        <div id="canvas-container" >
            <Canvas
                style={{background:'#1C2222'}}
            > // 1: set up a Scene and a Camera
                <MapControls/>
                <ambientLight intensity={5} />
                <directionalLight color="blue" position={[0, 0, 0]} />
                <Box position={[1, 0, -10]} />
                <Box position={[1, -50, -30]} />
                <mesh>
                    <boxBufferGeometry />
                    <meshBasicMaterial color="#2F4845" transparent/>
                </mesh>
            </Canvas>
        </div>
    );
}
export default NewSite;