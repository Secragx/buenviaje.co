import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cover from "./pages/Cover";
import Login from "./pages/Login";
import Dash from "./pages/admin/Dash";
import Destinations from "./pages/admin/Destinations";
import Countries from "./pages/admin/Countries";
import Tours from "./pages/admin/Tours";
import Users from "./pages/admin/Users";
import ProtectedRoute from "./components/ProtectedRoute"; // Importa el componente ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de inicio (Cover) */}
        <Route path="/" element={<Cover />} />
        <Route path="/login" element={<Login />} />

        {/* Ruta protegida para el dashboard de administrador */}
        <Route
          path="/admin-dashboard/*"
          element={
            <ProtectedRoute requiredRole={1}> {/* Rol 1 = Administrador */}
              <Dash />
            </ProtectedRoute>
          }
        >
          <Route path="users" element={<Users />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="countries" element={<Countries />} />
          <Route path="tours" element={<Tours />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;