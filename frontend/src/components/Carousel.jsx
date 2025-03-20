import React from 'react'
import Navegador from './Navegador'
import Buscador from './Buscador'
import Banners from './Banners';
import '../styles/carouselStyle.css';

export default function Carousel() {
    return (
        <>
            <div className="carousel-container position-relative">
                <Navegador/>
                <Banners/>
                <Buscador />
            </div>
        </>
    )
}
