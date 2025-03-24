import React from 'react'
import { Link } from 'react-router-dom'
//import icon from '../../assets/icon.png'
import buenviaje from '../../assets/buenviaje.svg'
import '../../styles/cover/navBarStyle.css'

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
                <div className="container-fluid custom-nav-container">
                    <a className="navbar-brand turismo-font" href="/">
                        {/*<img src={icon} alt="Icon" width="50" className="d-inline-block align-text-top icon-frame" />*/}
                        <img src={buenviaje} alt="Voyager" height="40" className="d-inline-block align-text-top" />
                    </a>
                    {/*<h3> 
                        <small className="text-muted"> Rock your world!</small>
                    </h3>*/}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/*<li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Sitios Turísticos</a>
                            </li>*/}
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quienes somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nacional</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Internacional</a>
                            </li>
                            {/*<li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>*/}
                            <li className="nav-item">
                                {/*<a className="nav-link" href="#">Login</a>*/}
                            </li>
                        </ul>
                        <Link to="/login" type="button" className="btn btn-primary">
                        Login
                        </Link>
                        {/*<form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>*/}
                    </div>
                </div>
            </nav>
        </>
    )
}
