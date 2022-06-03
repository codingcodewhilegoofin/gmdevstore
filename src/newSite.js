//IMPORTS ( code written for you )
// Standard React 
import React, 
{ 
    Suspense, 
    useRef, 
    useState, 
    useMemo 
} from "react";

// ThreeJS
import * as THREE from "three";

// React Three Fiber
import { 
    Canvas, 
    useFrame 
} from "@react-three/fiber";

//DREI:
import { 
    Bounds, 
    ContactShadows, 
    useBounds, 
    MapControls, 
    Loader, 
    OrbitControls, 
    PerspectiveCamera, 
    Stars, 
    useGLTF 
} from '@react-three/drei'

//Local:
import Box from './threejs/box';

// Main entry point for new website
function NewSite() {

    let theme = false;

    return (

         /* A regular html div 
         */
        <div id="canvas-container" >

             {/* Canvas:
                 We can tell the renderer information about how we want the canvas to be seen.

                 Equivalent to this three.js code: 

                 const scene = new THREE.Scene()
                 const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
                 const renderer = new THREE.WebGLRenderer()
             */}
            <Canvas 
                style={!theme ? { background: "#1C2222" } : { background: "white" }} 
                camera={{ position: [0, 0, 0], fov: 90 }} 
                dpr={[1, 2]}
                onPointerMissed={ () => {
                    alert("Try clicking an object or zooming into the world!")
                }}
                onCreated={ () => {
                 
                }}
            >
                
                {/* Lighting:

                */}
                <spotLight 
                    position={[0, 20, 0]} 
                    intensity={50} 
                    angle={0.1} 
                    penumbra={2} 
                    color={'blue'}
                />
                <hemisphereLight 
                    color="purple" 
                    groundColor="blue" 
                    position={[0, 100, 0]} 
                    intensity={10} 
                />

                {/* Suspense: 
                    Will wait for code to load
                */}
                <Suspense 
                    fallback={null}
                >
                    {/* Bounds: 
                        Calculates a boundary box and centers the camera accordingly
                    */}
                    <Bounds 
                        fit 
                        clip 
                        margin={2}
                    >
                        <Box rotation={[Math.PI / -2, 0, 0]}/>
                        <Box position={[0, 100,0]} rotation={[Math.PI / -2, 0, 0]}/>
                        {/* SelectToZoom:
                    
                        */}
                        <SelectToZoom>
                        
                            {/* React Component:
                    
                            */}
                           <Box position={[50, 50,0]} rotation={[0, Math.PI / 2, 0]} />
                           <Box position={[-50, 50,0]} rotation={[0, Math.PI / 2, 0]} />
                           <Box position={[0, 50,50]} rotation={[0, 0,Math.PI / 2]} />
                           <Box position={[0, 50,-50]} rotation={[0, 0,Math.PI / 2]} />

                            {/* Mesh:
                                type of VISIBLE object
                                
                                most common kind of visible object used in 3D computer graphics
                            */}
                           <mesh position={[0, 10, 0]}>
                           {/* Geometry defines the shape */}
                           <boxGeometry scale={1}   rotation={90}/>
                           {/* Material defines how the surface of the mesh looks */}
                           <meshPhysicalMaterial  color="green" side={THREE.DoubleSide} />
                           </mesh>
                        
                        </SelectToZoom>
                    </Bounds>
                    
                    {/* ContactShadows:
                        type of VISIBLE object
                                
                        most common kind of visible object used in 3D computer graphics
                    */}
                    <ContactShadows 
                        rotation-x={Math.PI / 2} 
                        position={[0, -35, 0]} 
                        opacity={0.2} 
                        width={200} 
                        height={200} 
                        blur={1} 
                        far={50} 
                    />
                  
                </Suspense>


                {/* Camera:
                    
                    This camera is a perspective camera that 
                    will view the scene using perspective projection 
                    
                    This is a special type of camera a CONTROLS type.

                    This will update the frames allowing the camera to 
                    orbit around a target point.
                */}           
                <OrbitControls 
                   
                    clip 
                    observe 
                    damping={6} 
                    margin={1.2}
                    makeDefault 
                    minPolarAngle={0} 
                    maxPolarAngle={Math.PI / 1.75} 
                />
            </Canvas>
        </div>
    );
}

//Functions used by our main component
function Model({ name, ...props }) {
    const { nodes } = useGLTF('../public/Katana.glb')
    return <mesh geometry={nodes[name].geometry} material={nodes[name].material} material-emissive="red" material-roughness={1} {...props} dispose={null} />
}

// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
function SelectToZoom({ children }) {
    const api = useBounds()
    return (
        <group onClick={(e) => (e.stopPropagation(), e.delta <= 50 && api.refresh(e.object).fit().clip().observe())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
            {children}
        </group>
    )
}
export default NewSite;