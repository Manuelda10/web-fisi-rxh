"use client"

import { useRef, useState } from "react";
import PrimerPiso3D from "@/app/(components)/maps/PrimerPiso";
import SegundoPiso3D from "@/app/(components)/maps/SegundoPiso";
import TercerPiso3D from "@/app/(components)/maps/TercerPiso";

import { Canvas } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, OrbitControls, Environment, Center } from "@react-three/drei";
import {motion} from "framer-motion-3d";
import './/index.css'
import Sidebar from "@/app/(components)/sidebar/sidebar";

export default function MapPage() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <main>
            {!showSidebar && <div className="line-button" onClick={toggleSidebar}>
                <div className="line"></div>
            </div>}
            <Sidebar show={showSidebar} toggleSidebar={toggleSidebar} ></Sidebar>
        <div className="canvas-container">
            <Canvas>
                <ambientLight intensity={0.5}/>
                <pointLight color='white' intensity={0.8} position={[10, 10, 10]}/>
                <Environment preset="city"/>
                <Center>
                    <PrimerPiso3D></PrimerPiso3D>
                </Center>                
                <PerspectiveCamera 
                    makeDefault 
                    position={[0, 180, 130]} 
                    fov={85}
                />
                <OrbitControls/>
            </Canvas>
        </div>

        </main>
    )
}