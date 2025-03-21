import React from "react";
import { Link, Outlet } from "react-router-dom"; // Importa Outlet

const Dash = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Dashboard</h1>
      <div className="row mt-4">
        <div className="col-md-4 text-center">
          <Link to="/dashboard/destinations">
            <button className="btn btn-primary">Ir a Destinos</button>
          </Link>
        </div>
        <div className="col-md-4 text-center">
          <Link to="/dashboard/countries">
            <button className="btn btn-secondary">Ir a Países</button>
          </Link>
        </div>
        <div className="col-md-4 text-center">
          <Link to="/dashboard/tours">
            <button className="btn btn-success">Ir a Tours</button>
          </Link>
        </div>
      </div>
      
      {/* Aquí se renderizan las rutas hijas */}
      <Outlet /> 
    </div>
  );
};

export default Dash;
