
import { useState } from 'react';
import sm2Logo from '../../assets/archivos/sm2Logo.png'
import smartraining from '../../assets/archivos/smartraining.png'


export const Login = () => {
//instanciamos el useState en true para la contraseña
const [showPasswd, setShowPasswd] = useState(true);

//funcion que se encargara de modificar el state de showPasswd
const handleShow = ()=>{
  setShowPasswd(!showPasswd)

}


  return (
    
            <div className="login__container">
                <div className='login__container-form'>
                          
                    <form className='login__from'>

                            <div className="login__form-container-imageForm">
                                    <div className='login__container-imageForm'>
                                           <img src={ sm2Logo } className='login__sms-Image-form' alt='logoSM2'/>
                                     </div>
                                    <div className='login__container-imageForm'>
                                           <img src={ smartraining }  className='login__-martImage-form' alt='SMARTRAINING'/>
                                     </div>
                            </div>
                            <div className='login__container-titleform'>
                                    <h3 className='login__titleForm'>Ingresa tus datos</h3>
                                    <p className='login__decriptForm'>Debes ingresar tus credenciales para acceder a la administracion del SMS</p>
                            </div>
                            <div className='login__container-inputs'>
                                      <input type='text' className='input' placeholder="Nombre de Usuario / RUT / Email" />
                                      <input type={(showPasswd) ? "password" : "text"} className='input' placeholder="Contraseña"/>
                                  <div className='login__container-passwd'>
                                       <label>Mostrar Contraseña</label>
                                      <input type='checkbox' onClick={handleShow}/>
                                  </div>
                            </div>

                            <div>
                              <button className='login__button-form'>
                                  ACCEDER
                              </button>
                            </div>
                            <div className='login__container-forgetpasswd'>
                              <p className='login__forgetpasswd'>¿Olvidaste tu contraseña?</p>
                            </div>
                    </form>
                  </div>
            </div>




    
  )
}
