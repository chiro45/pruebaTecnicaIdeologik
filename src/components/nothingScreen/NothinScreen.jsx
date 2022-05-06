
import image from '../../assets/archivos/image.png'

import { Link } from 'react-router-dom'
 


export const NothinScreen = () => {

  


  return (
    <div className='container__nothingscreen'>

      <img className='imgNothing' src={image}/>
      <div className='container__nothigScreen-text'>

        <h1 className='nothinscreen__title'>Esta pagina no existe</h1>
        <h2>Esta pagina no existe aprete <Link  className='nothing__link' to='/'>aquí</Link> para volver al inicio</h2>



      </div>



    </div>
  )
}
