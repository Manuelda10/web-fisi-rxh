//import styles from '@/app/page.module.css'
import Noticia_img from "@/app/(recursos)/img/Noticia_img.png"
import styles from '@/app/page.module.css'
import React from "react"

export default function CardComponent() {
  return (
    <div>
        <div>
            <h3>Noticia</h3>
            <p className={styles.card_contenido}>
            Horem ipsum dolor sit amet, consectetur 
            adipiscing elit. Etiam eu turpis molestie, 
            dictum est a, mattis tellus. Sed dignissim,
             metus nec fringilla accumsan, risus sem sollicitudin lacus, 
             ut interdum tellus elit sed risus. Maecenas eget condimentum 
             velit, sit amet feugiat lectus. Class aptent taciti sociosqu 
             ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
        </div>
        <img style={{ padding: 10, background: 'linear-gradient(0deg, #EFF2F6 0%, #EFF2F6 100%)', borderRadius: 24}} 
        src={Noticia_img}/>
    </div>
  )
}


