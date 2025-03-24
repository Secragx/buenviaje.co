import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import Banner from './Banner';
import '../../styles/cover/carouselStyle.css';

export default function Carousel() {
    return (
        <>
            <div className="carousel-container position-relative">
                <NavBar/>
                <Banner/>
                <SearchBar />
            </div>
        </>
    )
}
