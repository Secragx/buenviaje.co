import React from 'react';
//import mundi from '../../assets/world-tour.png';
import cartagena from '../../assets/nacional/cartagena.png';
import '../../styles/cover/catalogStyle.css'
import Card from './Card'
import vcocora from '../../assets/nacional/cocora.png';
import bogota from '../../assets/nacional/bogota.png';

export default function Catalog() {
  return (
    <>
    <div className="container-fluid text-center">
      <div className="row gx-0">
        <div className="col">
          <Card 
          name={"Valle del Cocora"}
          image={vcocora}
          
          />
        </div>
        <div className="col">
          <Card
          name={"Playa Blanca"}
          image={cartagena}
          />
        </div>
        <div className="col">
          <Card
          name={"La Candelaria"}
          image={bogota}
          />
        </div>
      </div>
    </div>
    </>
  );
}
