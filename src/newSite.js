import { Canvas } from '@react-three/fiber'
import React, { Component, useState, Suspense } from 'react';
import './App.css';
import DrawerMenu from '../src/components/Drawer/DrawerMenu';
import { Bounds, OrbitControls, PerspectiveCamera, OrthographicCamera, Preload, BakeShadows, meshBounds, AdaptiveDpr, Float, Html, useProgress, useBounds } from '@react-three/drei';

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

  return (
    <div id="canvas-container" >
      <div style={{ padding: '1px', backgroundColor: '#101730ff', textAlign: 'center' }}> <DrawerMenu /> </div>

      <Canvas shadows flat linear>

        <Suspense fallback={<Loader />}>
          <Bounds
            fit
            clip
            margin={1}
          >
            <SelectToZoom>
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