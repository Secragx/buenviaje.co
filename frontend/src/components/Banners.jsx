import React from 'react'
import banner from '../assets/banner.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import '../styles/carouselStyle.css';

export default function Banners() {
    return (
        <>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                {/*<div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>*/}
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="7000">
                        <img src={banner} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>¿Buscas aventura y sensaciones indescriptibles? En buenviaje.co te conéctamos con los mejores planes de montaña del pais.</h5>
                            <p>Todo lo que necesitas para tener la mejor experiencia.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="7000">
                        <img src={banner2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>¿Buscar disfrutar con tus seres querido de experiencias inigualables en lugares inigualables?</h5>
                            <p>Te ofrecemos los mejores planes.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="7000">
                        <img src={banner3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>¿Buscas conectarte contigo mismo y con la grandeza de las bellezas naturales?</h5>
                            <p>Aquí encuentras los mejores lugares.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
