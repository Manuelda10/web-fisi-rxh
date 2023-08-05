import './/index.css';
import Image from 'next/image';


export default function Sidebar({show, toggleSidebar}){
    return(
        <div className={`sidebar ${show ? 'show' : ''}`}>
            <div className='sidebar-title'>
                <div className='logo-container'>
                    <Image
                        priority
                        src={'/assets/img/logo-fisi.png'}
                        alt='Logo de la fisi'
                        width={40}
                        height={40}
                    />
                </div>
                <div className='title-container'>
                    <p>FACULTAD DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</p>
                </div>
                <div className='menu-logo-container'>
                    <Image
                        priority
                        src={'/assets/img/menu.svg'}
                        alt='hamburger menu'
                        width={30}
                        height={30}
                        onClick={toggleSidebar}
                    />
                </div>
            </div>
        </div>
    )
}