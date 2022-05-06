
import { Link } from 'react-router-dom'
 
import image from '../../assets/archivos/image.png'

//pantalla para controlar las rutas  desconocidas


export const NothinScreen = () => {

  return (
    <div >
      <img  alt='image404' src={image}/>
      <div >
        <h1 >Esta pagina no existe</h1>
        <h2>Esta pagina no existe aprete <Link  className='btn btn-primary' to='/'>aquí</Link> para volver al inicio</h2>
      </div>
    </div>
  )
}
