
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {startLogin } from '../../actions/auth';
import sm2Logo from '../../assets/archivos/sm2Logo.png'
import smartraining from '../../assets/archivos/smartraining.png'
import { useForm } from '../../hooks/useForm';


export const Login = () => {
  const dispatch = useDispatch();
//instanciamos el useState en true para la contraseña
const [showPasswd, setShowPasswd] = useState(true);


//utilizamos un customHook
const [values,handleInputChange] = useForm({
  //debemos pasarle los nombres de los inputs
  user:'',
  password: ''
});

const {user, password} = values;


//funcion que se encargara de modificar el state de showPasswd
const handleShow = ()=>{
  setShowPasswd(!showPasswd)

}
//realizamos el envio del formulario para el ingreso a la station
const handleSubmit = (e)=>{
  e.preventDefault();
  dispatch(startLogin(user, password))

}

  return (
    
            <>
            <div className="login__container">
                <div className='login__container-form'>
                          
                    <form className='login__from' onSubmit={handleSubmit}>

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
                                      <input 
                                      type='text'
                                       className='input' 
                                       placeholder="Nombre de Usuario / RUT / Email"
                                       name='user' 
                                       value={user}
                                       onChange={handleInputChange}/>
                                      <input 
                                      type={(showPasswd) ? "password" : "text"} 
                                      className='input' 
                                      placeholder="Contraseña"
                                      name='password'
                                      value={password}
                                      onChange={handleInputChange}/>
                                  <div className='login__container-passwd'>
                                       <label>Mostrar Contraseña</label>
                                      <input type='checkbox' onClick={handleShow}/>
                                  </div>
                            </div>

                            <div>
                              <button type='submit' className='login__button-form'>
                                  ACCEDER
                              </button>
                            </div>
                            <div className='login__container-forgetpasswd'>
                              <p className='login__forgetpasswd'>¿Olvidaste tu contraseña?</p>
                            </div>
                    </form>
                  </div>
            </div></>




    
  )
}
