import { useState } from 'react'
import LogoNav from '../../../assets/archivosScreenAction/LogoNav.png'



//en este temenos el navBar y todos sus elementos

export const Navbar = ({changeSimulator}) => {

//instanciamos el useState para poder pasar la seleccion del usuario de los simuladores
    const [elementNav, setElementNav] = useState(false);
    
    //funcion que toma el value para poder mandarle al elemento padre la seleccion
    const handleChangeNav = ({target})=>{
        const id = target.id;
        changeSimulator(`${id}`)
        setElementNav(!elementNav)
    }

//realizamos cambios en el navbar
const handleClick = ()=>{
    setElementNav(!elementNav)
}
  return (
    <nav className="screenActon__container-nav">
           
            <div className="screenAction__navContainerLinks">
            <div className="screenAction__nav-containerImg">
                <img src={LogoNav} alt="logoNav"className="screenAction__navImg"/>
            </div>
            <div className='screenAction__nav-container-list'>

                <div className='containerdropdown'>
                    <div onMouseEnter={handleClick}  className={(elementNav) ? "active container" : "container"}> <a  className='linkNavbar' href='/simuladores'  >Simuladores</a></div>
                    <div className={(elementNav) ? "simuladores_dropdown" : "hidden"}>
                        <p onClick={handleChangeNav} id="VRs">VRs</p>
                        <p onClick={handleChangeNav} id="WEB 360">WEB 360</p>
                    </div>
                </div>
               
                <div className='containerA'><a className='linkNavbar' href='/estadisticas'>Estadisticas</a></div>

               <div className='containerA'> <a className='linkNavbar' href='/ubot'>Ubot</a></div>

                <div className='containerA'><a className='linkNavbar' href='/ayuda'>Ayuda</a></div>

            </div>
            </div>

            <div className='screenAction__container-navButtonLogout'>
                <button className='navButtonLogout'>Cerrar Sesion  <i className="fa-solid fa-arrow-right-from-bracket iconLogout"></i></button>
            </div>

            
            </nav>
  )
}
