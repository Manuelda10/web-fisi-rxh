import React from "react"
import HeaderComponente from "@/app/(components)/header/header.js"
import CardComponent from "@/app/(components)/card/card.js"
import styles from '@/app/page.module.css'
import Vector from "@/app/(recursos)/img/Vector.png"
import Logo from "@/app/(recursos)/img/Logo.png"
import Servicios_img from "@/app/(recursos)/img/Servicios_img.png"


export default function Home() {
    return (
        <div>
            <HeaderComponente></HeaderComponente>
            <section className={styles.noticia}>
                <div style= {{marginRight:31 }}>
                    <div className={styles.texto_noticia}>FISITECH HACKATHON - 2023</div>
                    <p className={styles.txt_secundario}>
                    La Facultad de Ingeniería de Sistemas e Informática de la 
                    Universidad Nacional Mayor de San Marcos, en colaboración 
                    con los miembros del tercio estudiantil ...
                    </p>
                    
                    <div className={styles.boton}>
                        <img src={Vector} />
                        Seguir  leyendo
                    </div>
                </div>
                <img style={{width: 573, height: 328, padding: 10, background: 'linear-gradient(0deg, #EFF2F6 0%, #EFF2F6 100%)', borderRadius: 24, border: '2px #621518 solid'}}
                src={"https://static.wikia.nocookie.net/digimon/images/7/7f/Agumon_t.gif/revision/latest?cb=20200405154705"} />
            </section>


            <section style={{marginLeft: 112,marginRight:112}}>
                <div className={styles.gen_noticia} >
                    <div className={styles.tit_noticia}>
                        <img src={Vector}/>
                        <h2 style= {{marginLeft: 10}}>Noticias</h2>
                    </div>
                    <p className={styles.descrip_noticia}>
                    Lee más noticias para mantenerte informado y 
                    ser parte de nuestra historia en constante evolución. 
                    Sigue nuestras redes sociales y suscríbete a nuestro 
                    boletín para no perderte ninguna actualización.
                    </p>
                </div>

                <div className={styles.borderline}></div>

                <div className={styles.gen_articulo}>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                </div>

                <div className={styles.gen_arcticulo2}>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                </div>
                
                <div style={{marginTop: 64}}>
                    <div>
                        <div className={styles.tit_servicios}>
                            <img src={Logo}/>
                            <h2>Nuestros Servicios</h2>
                        </div>
                        <p className={styles.dsc_servicios}>
                        Descubre más sobre cada servicio y cómo pueden 
                        ayudarte a alcanzar tus metas académicas y profesionales.
                        Contáctanos para obtener más información o para 
                        inscribirte en nuestros servicios.
                        </p>
                    </div>

                    <div className={styles.card_servicios}>
                        <img src = {Servicios_img}/>
                        <img src = {Servicios_img}/>
                        <img src = {Servicios_img}/>
                        <img src = {Servicios_img}/>
                        <img src = {Servicios_img}/>
                        <img src = {Servicios_img}/>
                    </div>

                </div>



            </section>
        </div>
    )
}