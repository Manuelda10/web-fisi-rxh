import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { Color } from "three";
import * as THREE from "three";

export default function PrimerPiso3D(props) {
  const { nodes, materials } = useGLTF("/maps/PrimerPiso.glb");
  const COLORS = {
    basico: '#A79D9D',
    escalera: '#F7F3F3',
    principal: '#B02B30',
    piso: '#fdf5e6',
    cancha: '#229E18',
    pasto: '#28B463'
  }


  

  /*
    //const [color, setColor] = useState('#621518');
    //onPointerOver={() => setColor('white')}
    //onPointerOut={() => setColor('blue')}
    material={new THREE.MeshPhongMaterial({ color: COLORS.principal })}
  */ 

  return (
    <group {...props} dispose={null}>
      <mesh
        //onPointerOver={() => setColor('white')}
        //onPointerOut={() => setColor('blue')}
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh0.geometry}
      />
      <mesh
        castShadow
        receiveShadow
        position={[0, 0, 0]}
        //onPointerOver={() => setColor('red')}
        geometry={nodes.imagetostl_mesh1.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.principal })}
      />
      <Html position={[70,49,0]} >
        <div className="text" style={{color: 'white', fontSize: '1.5rem', fontWeight: 'bold', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}> 
            <p>Hola</p>
        </div>
      </Html>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh2.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.principal })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh3.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh4.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      {/*Esta es una escalera*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh5.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.escalera })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh6.geometry}
        material={materials.mat6}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh7.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh8.geometry}
        material={materials.mat8}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh9.geometry}
        material={materials.mat9}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh10.geometry}
        material={materials.mat10}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh11.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh12.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh13.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh14.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh15.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh16.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico})}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh17.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      {/*Escalera*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh18.geometry}
        material={materials.mat18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh19.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh20.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh21.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh22.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh23.geometry}
        material={materials.mat23}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh24.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh25.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      {/*Escalera*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh26.geometry}
        material={materials.mat26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh27.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh28.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
    {/*Escalera*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh29.geometry}
        material={materials.mat29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh30.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh31.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh32.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh33.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh34.geometry}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh35.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      {/*Centro de la cancha*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh36.geometry}
        material={materials.mat36}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh37.geometry}
        material={materials.mat37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh38.geometry}
        material={materials.mat38}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh39.geometry}
        material={materials.mat39}
      />
      {/*Piso*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh40.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.piso })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh41.geometry}
        material={new THREE.MeshPhongMaterial({ color: COLORS.basico })}
      />
      {/*Letras---------------------------------------------------------*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh42.geometry}
        material={materials.mat42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh43.geometry}
        material={materials.mat43}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh44.geometry}
        material={materials.mat44}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh45.geometry}
        material={materials.mat45}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh46.geometry}
        material={materials.mat46}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh47.geometry}
        material={materials.mat47}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh48.geometry}
        material={materials.mat48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh49.geometry}
        material={materials.mat49}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh50.geometry}
        material={materials.mat50}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh51.geometry}
        material={materials.mat51}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh52.geometry}
        material={materials.mat52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh53.geometry}
        material={materials.mat53}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh54.geometry}
        material={materials.mat54}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh55.geometry}
        material={materials.mat55}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh56.geometry}
        material={materials.mat56}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh57.geometry}
        material={materials.mat57}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh58.geometry}
        material={materials.mat58}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh59.geometry}
        material={materials.mat59}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh60.geometry}
        material={materials.mat60}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh61.geometry}
        material={materials.mat61}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh62.geometry}
        material={materials.mat62}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh63.geometry}
        material={materials.mat63}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh64.geometry}
        material={materials.mat64}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh65.geometry}
        material={materials.mat65}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh66.geometry}
        material={materials.mat66}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh67.geometry}
        material={materials.mat67}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh68.geometry}
        material={materials.mat68}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh69.geometry}
        material={materials.mat69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh70.geometry}
        material={materials.mat70}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh71.geometry}
        material={materials.mat71}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh72.geometry}
        material={materials.mat72}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh73.geometry}
        material={materials.mat73}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh74.geometry}
        material={materials.mat74}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh75.geometry}
        material={materials.mat75}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh76.geometry}
        material={materials.mat76}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh77.geometry}
        material={materials.mat77}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh78.geometry}
        material={materials.mat78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh79.geometry}
        material={materials.mat79}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh80.geometry}
        material={materials.mat80}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh81.geometry}
        material={materials.mat81}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh82.geometry}
        material={materials.mat82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh83.geometry}
        material={materials.mat83}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh84.geometry}
        material={materials.mat84}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh85.geometry}
        material={materials.mat85}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh86.geometry}
        material={materials.mat86}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh87.geometry}
        material={materials.mat87}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh88.geometry}
        material={materials.mat88}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh89.geometry}
        material={materials.mat89}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh90.geometry}
        material={materials.mat90}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh91.geometry}
        material={materials.mat91}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh92.geometry}
        material={materials.mat92}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh93.geometry}
        material={materials.mat93}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh94.geometry}
        material={materials.mat94}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh95.geometry}
        material={materials.mat95}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh96.geometry}
        material={materials.mat96}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh97.geometry}
        material={materials.mat97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh98.geometry}
        material={materials.mat98}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh99.geometry}
        material={materials.mat99}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh100.geometry}
        material={materials.mat100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh101.geometry}
        material={materials.mat101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh102.geometry}
        material={materials.mat102}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh103.geometry}
        material={materials.mat103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh104.geometry}
        material={materials.mat104}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh105.geometry}
        material={materials.mat105}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh106.geometry}
        material={materials.mat106}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh107.geometry}
        material={materials.mat107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh108.geometry}
        material={materials.mat108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh109.geometry}
        material={materials.mat109}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh110.geometry}
        material={materials.mat110}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh111.geometry}
        material={materials.mat111}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh112.geometry}
        material={materials.mat112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh113.geometry}
        material={materials.mat113}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh114.geometry}
        material={materials.mat114}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh115.geometry}
        material={materials.mat115}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh116.geometry}
        material={materials.mat116}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh117.geometry}
        material={materials.mat117}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh118.geometry}
        material={materials.mat118}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh119.geometry}
        material={materials.mat119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh120.geometry}
        material={materials.mat120}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh121.geometry}
        material={materials.mat121}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh122.geometry}
        material={materials.mat122}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh123.geometry}
        material={materials.mat123}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh124.geometry}
        material={materials.mat124}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh125.geometry}
        material={materials.mat125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh126.geometry}
        material={materials.mat126}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh127.geometry}
        material={materials.mat127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh128.geometry}
        material={materials.mat128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh129.geometry}
        material={materials.mat129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh130.geometry}
        material={materials.mat130}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh131.geometry}
        material={materials.mat131}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh132.geometry}
        material={materials.mat132}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh133.geometry}
        material={materials.mat133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh134.geometry}
        material={materials.mat134}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh135.geometry}
        material={materials.mat135}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh136.geometry}
        material={materials.mat136}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh137.geometry}
        material={materials.mat137}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh138.geometry}
        material={materials.mat138}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh139.geometry}
        material={materials.mat139}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh140.geometry}
        material={materials.mat140}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh141.geometry}
        material={materials.mat141}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh142.geometry}
        material={materials.mat142}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh143.geometry}
        material={materials.mat143}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh144.geometry}
        material={materials.mat144}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh145.geometry}
        material={materials.mat145}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh146.geometry}
        material={materials.mat146}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh147.geometry}
        material={materials.mat147}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh148.geometry}
        material={materials.mat148}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh149.geometry}
        material={materials.mat149}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh150.geometry}
        material={materials.mat150}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh151.geometry}
        material={materials.mat151}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh152.geometry}
        material={materials.mat152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh153.geometry}
        material={materials.mat153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh154.geometry}
        material={materials.mat154}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh155.geometry}
        material={materials.mat155}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh156.geometry}
        material={materials.mat156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh157.geometry}
        material={materials.mat157}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh158.geometry}
        material={materials.mat158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh159.geometry}
        material={materials.mat159}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh160.geometry}
        material={materials.mat160}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh161.geometry}
        material={materials.mat161}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh162.geometry}
        material={materials.mat162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh163.geometry}
        material={materials.mat163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh164.geometry}
        material={materials.mat164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh165.geometry}
        material={materials.mat165}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh166.geometry}
        material={materials.mat166}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh167.geometry}
        material={materials.mat167}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh168.geometry}
        material={materials.mat168}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh169.geometry}
        material={materials.mat169}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh170.geometry}
        material={materials.mat170}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh171.geometry}
        material={materials.mat171}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh172.geometry}
        material={materials.mat172}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh173.geometry}
        material={materials.mat173}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh174.geometry}
        material={materials.mat174}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh175.geometry}
        material={materials.mat175}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh176.geometry}
        material={materials.mat176}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh177.geometry}
        material={materials.mat177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh178.geometry}
        material={materials.mat178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh179.geometry}
        material={materials.mat179}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh180.geometry}
        material={materials.mat180}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh181.geometry}
        material={materials.mat181}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh182.geometry}
        material={materials.mat182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh183.geometry}
        material={materials.mat183}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh184.geometry}
        material={materials.mat184}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh185.geometry}
        material={materials.mat185}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh186.geometry}
        material={materials.mat186}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh187.geometry}
        material={materials.mat187}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh188.geometry}
        material={materials.mat188}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh189.geometry}
        material={materials.mat189}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh190.geometry}
        material={materials.mat190}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh191.geometry}
        material={materials.mat191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh192.geometry}
        material={materials.mat192}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh193.geometry}
        material={materials.mat193}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh194.geometry}
        material={materials.mat194}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh195.geometry}
        material={materials.mat195}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh196.geometry}
        material={materials.mat196}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh197.geometry}
        material={materials.mat197}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh198.geometry}
        material={materials.mat198}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh199.geometry}
        material={materials.mat199}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh200.geometry}
        material={materials.mat200}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh201.geometry}
        material={materials.mat201}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh202.geometry}
        material={materials.mat202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh203.geometry}
        material={materials.mat203}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh204.geometry}
        material={materials.mat204}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh205.geometry}
        material={materials.mat205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh206.geometry}
        material={materials.mat206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh207.geometry}
        material={materials.mat207}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh208.geometry}
        material={materials.mat208}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh209.geometry}
        material={materials.mat209}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh210.geometry}
        material={materials.mat210}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh211.geometry}
        material={materials.mat211}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh212.geometry}
        material={materials.mat212}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh213.geometry}
        material={materials.mat213}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh214.geometry}
        material={materials.mat214}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh215.geometry}
        material={materials.mat215}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh216.geometry}
        material={materials.mat216}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh217.geometry}
        material={materials.mat217}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh218.geometry}
        material={materials.mat218}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh219.geometry}
        material={materials.mat219}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh220.geometry}
        material={materials.mat220}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh221.geometry}
        material={materials.mat221}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh222.geometry}
        material={materials.mat222}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh223.geometry}
        material={materials.mat223}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh224.geometry}
        material={materials.mat224}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh225.geometry}
        material={materials.mat225}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh226.geometry}
        material={materials.mat226}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh227.geometry}
        material={materials.mat227}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh228.geometry}
        material={materials.mat228}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh229.geometry}
        material={materials.mat229}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh230.geometry}
        material={materials.mat230}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh231.geometry}
        material={materials.mat231}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh232.geometry}
        material={materials.mat232}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh233.geometry}
        material={materials.mat233}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh234.geometry}
        material={materials.mat234}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh235.geometry}
        material={materials.mat235}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh236.geometry}
        material={materials.mat236}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh237.geometry}
        material={materials.mat237}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh238.geometry}
        material={materials.mat238}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh239.geometry}
        material={materials.mat239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh240.geometry}
        material={materials.mat240}
      />
      {/*Letras---------------------------------------------------------*/}
      {/*Escalera*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh242.geometry}
        material={materials.mat242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh243.geometry}
        material={materials.mat243}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh244.geometry}
        material={materials.mat244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh245.geometry}
        material={materials.mat245}
      />
    </group>
  );
}

useGLTF.preload("/maps/PrimerPiso.glb");