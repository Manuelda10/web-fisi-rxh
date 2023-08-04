//import styles from './globals.css' className={styles.main}
//import Logo_Facultad from "@/app/(recursos)/img/Logo_Facultad.jpg"
import styles from '@/app/page.module.css'
import React from "react"

export default function HeaderComponente() {
  return (
    <div className={styles.hedar_styles}>
      <div>
        <div>FACULTAD DE INGENIERÍA <br/>DE SISTEMAS E INFORMÁTICA</div>
      </div>
      <div className={styles.altoma}>
        <a href="#">Facultad</a>
        <a href="#">Pregrado</a>
        <a href="#">Posgrado</a>
        <a href="#">Investigación</a>
        <a href="#">Mapa Interactivo</a>
      </div>
    </div>
  )
}


