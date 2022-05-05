import LogoNav from '../../assets/archivosScreenAction/LogoNav.png'

export const ScreenAction = () => {
  return (
    <>
        <div className="container__screenAction">
            <nav className="screenActon__container-nav">
           
            <div className="screenAction__navContainerLinks">
            <div className="screenAction__nav-containerImg">
                <img src={LogoNav} className="screenAction__navImg"/>
            </div>
            <div className='screenAction__nav-container-list'>
                <ul>
                    <li>Simuladores</li>
                    <li>Estadisticas</li>
                    <li>Ubot</li>
                    <li>Ayuda</li>
                </ul>

            </div>
            </div>

            <div className='screenAction__container- navButtonLogout'>
                <button className='navButtonLogout'>Cerrar Sesion</button>
            </div>

            
            </nav>




        </div>
    
    
    
    </>
  )
}
