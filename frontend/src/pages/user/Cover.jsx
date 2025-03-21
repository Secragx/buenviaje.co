import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/cover/dashStyle.css'
import Carousel from '../../components/Cover/Carousel'
import Catalog from '../../components/Cover/Catalog' 
import Subtitle from '../../components/Cover/Subtitle'


export default function Cover() {
  return (
    <div id='general'>
      {/*<Link to='/UserInsert'>Insertar Usuario</Link>
    <br/>
    <Link to='/ProductInsert'>
    <input type='submit' className='btn-btn-primary'value="Insert"/>
    </Link>
    <br/>*/}
      <Carousel />
      <Subtitle/>
      <Catalog />
    </div>    
  )
}
