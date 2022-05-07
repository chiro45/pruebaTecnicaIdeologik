
import { useState } from 'react';
import { Navbar } from './Navbar/Navbar';


import Vr360 from '../../assets/archivosScreenAction/Vr360.png'
import Vr from '../../assets/archivosScreenAction/Vr.png'
import Raster from '../../assets/archivosScreenAction/Raster.png'



import { Tabla } from './Table/Tabla';
import { useSelector } from 'react-redux';



export const ScreenAction = () => {

  //state para el cambio del llamado desde el navBar
 const [simulator, setSimulator] = useState('(no seleccionado)');

 const {products} =  useSelector(store => store.productReducer)



 //cuando 
  const handleChangeSimulator = (simulator)=>{
    //cambia el valor de simulator => que es la descript de la tabla
    setSimulator(simulator)

    
       
  }
  return (
    <>
        <div className="container__screenAction">
          <nav>
                <Navbar  changeSimulator={handleChangeSimulator} />
          </nav>
          <div className='containerDerecha'>
          <ul className='lista'>
              <li className='elementLista'>Inicio</li>
              <li ><img className="raster" alt="a" src={Raster}/></li>
              <li className='elementLista'>Simuladores</li>
              <li ><img className="raster" alt="a" src={Raster}/></li>
              <li className='elementLista'>{simulator}</li>
              <li ><img className="raster"  alt="a"src={Raster}/></li>
              <li className='elementLista'>Listado</li>
            </ul>
            
          </div>
            <div className='containerSectionTable'>
            <img className='imgIcon' rel='icon'  alt="icon"src={(simulator=== 'VRs') ? Vr : Vr360}/>
              <h3>Simuladores {simulator}</h3>

            </div>
              {/* <Table simuladores={simuladores}/> */}
            <Tabla simuladores={products}/>


        </div>
    
    
    
    </>
  )
}
