import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cover from "./pages/user/Cover"; 
import Dash from "./pages/admin/Dash";
import Destinations from "./pages/admin/Destinations";
import Countries from "./pages/admin/Countries";
import Tours from "./pages/admin/Tours";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de inicio (Cover) */}
        <Route path="/" element={<Cover />} />

        {/* Agrupando rutas bajo /dashboard */}
        <Route path="/dashboard/*" element={<Dash />}>
          <Route path="destinations" element={<Destinations />} />
          <Route path="countries" element={<Countries />} />
          <Route path="tours" element={<Tours />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
