import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import{
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';

import CanvasLoader from '../Loader';

// const lod = new THREE.LOD();
// lod.addLevel(lowResModel, 200); // Distance to switch to low res
// lod.addLevel(highResModel, 0); // Distance for high res
// scene.add(lod);


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1}
    floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[ 0 , 0 , 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial
           color="#fff8eb"
           polygonOffset
           polygonOffsetFactor={-5}
           flatShading
           />
          <Decal
            position={[0, 0, 1]}
            rotation={[ 2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
           />
      </mesh>
      </Float>
  )
}

const BallCanvas =({ icon }) => {
  return (
    <Canvas
    frameLoop='demand'
    gl={{ preserveDrawingBuffer: true}}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls  enableZoom={false} />
      <Ball imgUrl={icon}/>

    </Suspense>
    <Preload all />
  </Canvas>
  )
}

export default BallCanvas;