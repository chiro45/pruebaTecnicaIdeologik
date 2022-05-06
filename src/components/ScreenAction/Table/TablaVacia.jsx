import React from 'react'

export const TablaVacia = () => {
  return (
 <>
 {/* me parecio buena idea que mientras el usuario no haya seleccionado un simulador quede la cabecera de la tabla */}
               <div className='container__table table-responsive table-responsive-sm table-responsive-md '>
    <table className="table align-middle mb-0 table-striped">
<thead className="bg-light" >
  <tr  className='align-items-center'>
    <th  scope='col' >ID</th>
    <th  scope='col' >Curso</th>
    <th  scope='col' >Simulador</th>
    <th  scope='col' >Versión</th>
    <th  scope='col'  >Alumnos Conectados</th>
    <th  scope='col' >%Avance </th>
    <th  scope='col' >Estado</th>
    <th  scope='col' ></th>
    <th  scope='col' className='text-center' >Acciones</th>
  </tr>
</thead>

</table>
    </div>
{/* efecto de carga para que la pantalla no se vea tan estatica */}
<div className='container__spiner'>

    <h2>Seleccione un Simulador</h2>
<div>
<div className="spinner-grow text-primary" role="status">

</div>
<div className="spinner-grow text-secondary" role="status">

</div>
<div className="spinner-grow text-success" role="status">

</div>
<div className="spinner-grow text-danger" role="status">

</div>
<div className="spinner-grow text-warning" role="status">

</div>
<div className="spinner-grow text-info" role="status">

</div>
<div className="spinner-grow text-light" role="status">

</div>
</div>
</div>
 
 </>
  )
}
