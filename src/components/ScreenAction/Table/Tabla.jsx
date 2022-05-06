import { TablaVacia } from "./TablaVacia"





export const Tabla = ({simuladores = []}) => {
//si todavia no hay simuladores en el state se presenta la pantalla vacia, sino mostramos la tabla y su respectiva iteracion
  return (
    (simuladores.length === 0)
    ? <TablaVacia/>
   :
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
    <th  scope='col' >{(simuladores[0].bateria) ?"Batería" : null}</th>
    <th  scope='col' className='text-center' >Acciones</th>
  </tr>
</thead>
<tbody>
  {
    simuladores.map(({curso,nombre, version, alumnosCon, avance, estado, bateria=null}, i)=>(
        <tr key={i} >
        <th  scope='row'>{i+1}</th>
        <td>{curso}</td>
        <td>{nombre}</td>
        <td>{version}</td>
        <td>{alumnosCon}</td>
        <td>{avance}</td>
        <td>{estado}</td>
        <td>{bateria}</td>
        <td className='td-buttons'> 
        <button className='btn btn-info btn-blues btn-sm'>Mensaje Emerjente Masivo</button> 
        <button className='btn btn-ligth btn-sm'>Gameplay</button>
        <button className='btn btn-info  btn-blues btn-sm'>Reporte</button> 
        <button className='btn btn-info  btn-blues btn-floating'><i className="fa-solid fa-plus"></i></button> 
        </td>
        </tr>
        
    )

    
    )
    
}
  
</tbody>
</table>

      

    </div>
  )
}
