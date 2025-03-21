import { useState, useEffect } from "react";
import { listCountries } from "../../api/api"; // ✅ Ahora usamos la función específica para países
import UpdateCountry from "./UpdateCountry";

const ListCountry = () => {
  const [countries, setCountries] = useState([]);

  // Función para obtener la lista de países
  const fetchCountries = async () => {
    try {
      const data = await listCountries(); // ✅ Se llama a listCountries() sin parámetros
      setCountries(data);
    } catch (error) {
      console.error("Error al obtener la lista de países:", error);
    }
  };

  // Cargar la lista al montar el componente
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="container mt-4">
      <UpdateCountry onUpdate={fetchCountries} /> {/* Se mantiene para actualizar la lista */}

      <div className="card shadow-sm p-4 mt-4">
        <h2 className="text-center text-primary">Tabla de Países</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Id País</th>
                <th>Nombre País</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {countries.length > 0 ? (
                countries.map((country) => (
                  <tr key={country.idPais}>
                    <td>{country.idPais}</td>
                    <td>{country.nombrePais}</td>
                    <td>{country.descripcion || "Sin descripción"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">No hay datos disponibles.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListCountry;
