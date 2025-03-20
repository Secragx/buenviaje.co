import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/dashStyle.css'
import Carousel from '../components/Carousel'
import Catalogo from '../components/Catalogo' 
import Tarjeta from '../components/Tarjeta'
import ComponenteUno from '../components/ComponenteUno'


export default function Dash() {
  return (
    <div id='general'>
      {/*<Link to='/UserInsert'>Insertar Usuario</Link>
    <br/>
    <Link to='/ProductInsert'>
    <input type='submit' className='btn-btn-primary'value="Insert"/>
    </Link>
    <br/>*/}
      <Carousel />
      <ComponenteUno/>
      <Catalogo />
    </div>    
  )
}
