import React, {useRef,useState}from 'react';
import ReactDOM from 'react-dom';
import {Canvas, useFrame} from 'react-three-fiber';
import {OrbitControls} from '@react-three/drei';

function Box(props){
  //Provide direct access to the mesh
  const mesh = useRef();

  //Set up state for hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  //Rotate mesh
  useFrame(()=> {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  });

  return(
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5,1.5,1.5] : [1,1,1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
        <boxBufferGeometry args={[1,1,1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
  );
}


ReactDOM.render(
 <Canvas>
   <OrbitControls />
   <ambientLight />
   <pointLight position={[10,10,10]} />
   <Box position={[-1.2,0,0]} />
   <Box position={[1.2,0,0]} />
  </Canvas>,
  document.getElementById('root')
);


