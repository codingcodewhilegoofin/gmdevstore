import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Box from './threejs/box';
import { MapControls } from '@react-three/drei'






function NewSite() {
    return(
        /*The Canvas component does some 
        important setup work behind 
        the scenes: 
        
        1:It sets up a Scene and a Camera, 
        the basic building blocks necessary for rendering

        2:It renders our scene every frame, 
        you do not need a traditional render-loop

        */
        <div id="canvas-container" >
            <Canvas > // 1: set up a Scene and a Camera
                <MapControls/>
                <ambientLight intensity={2} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <Box position={[1, 1, -5]} />
                <Box position={[-2, 1, -20]} />
            </Canvas>
        </div>
    );
}
export default NewSite;