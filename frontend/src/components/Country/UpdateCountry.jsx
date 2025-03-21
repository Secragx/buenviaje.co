import { useState, useEffect } from "react";
import { listCountries, updateCountryDescription } from "../../api/api"; // ✅ Ahora usamos listCountries()

const UpdateCountry = ({ onUpdate }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [description, setDescription] = useState("");

  // Obtener la lista de países al montar el componente
  useEffect(() => {
    listCountries().then(setCountries); // ✅ Se llama directamente a listCountries()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCountry || !description) return;

    try {
      const success = await updateCountryDescription(selectedCountry, description);
      if (success) {
        onUpdate(); // ✅ Recarga la lista de países en ListCountry
        setDescription("");
        setSelectedCountry(""); // ✅ Resetea la selección tras actualizar
      }
    } catch (error) {
      console.error("Error al actualizar la descripción:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h2 className="text-center text-primary">Modificar Descripción</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Seleccione el País:</label>
            <select
              className="form-select"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              required
            >
              <option value="">Seleccione...</option>
              {countries.map((country) => (
                <option key={country.idPais} value={country.idPais}>
                  {country.nombrePais}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Nueva Descripción:</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCountry;
