import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = parseInt(localStorage.getItem("userRole"), 10);

    // Si no hay token o el rol no coincide, redirigir al login
    if (!token || userRole !== requiredRole) {
      navigate("/login");
    }
  }, [navigate, requiredRole]);

  // Si el usuario está autenticado y tiene el rol correcto, renderizar el componente
  return children;
};

export default ProtectedRoute;