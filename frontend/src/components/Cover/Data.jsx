import React from 'react'
import '../../styles/cover/dataStyle.css'

/* export default function Datos(props) { */
export default function Data({name, age}) {
  return (
    <>
        {/* <h1 className='tituloPrincipal'>Datos</h1>
        <div className='contenedor'>
            <p className='parrafo'>Nombre: Danny</p>
            <p className='parrafo'>Edad: 32</p>
        </div> */}

        {/* <h1 className='tituloPrincipal'>Datos</h1>
        <div className='contenedor'>
            <p className='parrafo'>Nombre: {props.name}</p>
            <p className='parrafo'>Edad: {props.age}</p>
        </div>*/}

        <h1 className='tituloPrincipal'>Datos</h1>
        <div className='contenedor'>
            <p className='parrafo'>Nombre: {name}</p>
            <p className='parrafo'>Edad: {age}</p>
        </div>
    </>   
  )
}


/* archivo principal de estilo por cada componente*/