import React from 'react';
import '../styles/carouselStyle.css';  // Importa el archivo de estilos

export default function Buscador() {
    return (
        <>
            <div className="buscador-container position-absolute top-100 start-50 translate-middle w-75">
                    <form className="d-flex w-100 col-md-6 col-lg-4" role="search">
                        <input 
                            className="form-control me-2 custom-input" 
                            type="search" 
                            placeholder="Busca destino favorito..." 
                            aria-label="Search"
                        />
                        <button 
                            className="btn btn-outline-success custom-button" 
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
        </>
    );
}

