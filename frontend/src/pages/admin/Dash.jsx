import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dash = () => {
  const navigate = useNavigate();

  // Verificar autenticación y rol al cargar el componente
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = parseInt(localStorage.getItem("userRole"), 10);

    // Si no hay token o el rol no es de administrador, redirigir al login
    if (!token || userRole !== 1) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container">
      <h1 className="text-center mt-4">Dashboard</h1>
      <div className="row mt-4">
        <div className="col-md-4 text-center">
          <Link to="/admin-dashboard/destinations">
            <button className="btn btn-primary">Ir a Destinos</button>
          </Link>
        </div>
        <div className="col-md-4 text-center">
          <Link to="/admin-dashboard/countries">
            <button className="btn btn-secondary">Ir a Países</button>
          </Link>
        </div>
        <div className="col-md-4 text-center">
          <Link to="/admin-dashboard/tours">
            <button className="btn btn-success">Ir a Tours</button>
          </Link>
        </div>
        <div className="col-md-4 text-center">
          <Link to="/admin-dashboard/users">
            <button className="btn btn-success">Ir a Usuarios</button>
          </Link>
        </div>
      </div>

      {/* Aquí se renderizan las rutas hijas */}
      <Outlet />
    </div>
  );
};

export default Dash;