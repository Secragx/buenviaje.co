import React from 'react'
import Navegador from './NavBar'
import Buscador from './SearchBar'
import Banners from './Banner';
import '../../styles/cover/carouselStyle.css';

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
