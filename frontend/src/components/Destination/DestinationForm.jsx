import React, { useState, useEffect } from "react";
import { listCountries, createDestination } from "../../api/api";

const DestinationForm = ({ onAdd }) => {
    const [newDestination, setNewDestination] = useState({ ciudadDestino: "", id_pais: "" });
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        listCountries().then(setCountries).catch(error => console.error("Error al obtener países:", error));
    }, []);

    const handleChange = (e) => {
        setNewDestination({ ...newDestination, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createDestination(newDestination.ciudadDestino, newDestination.id_pais);
            setNewDestination({ ciudadDestino: "", id_pais: "" });
            onAdd(); // Llamada a onAdd para actualizar la lista de destinos
        } catch (error) {
            console.error("Error al agregar destino:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 border rounded">
            <h2 className="mb-3">Agregar Destino</h2>
            <div className="mb-3">
                <label className="form-label">Ciudad Destino:</label>
                <input
                    type="text"
                    className="form-control"
                    name="ciudadDestino"
                    value={newDestination.ciudadDestino}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">País:</label>
                <select
                    className="form-select"
                    name="id_pais"
                    value={newDestination.id_pais}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione un país</option>
                    {countries.map((country) => (
                        <option key={country.idPais} value={country.idPais}>
                            {country.nombrePais}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    );
};

export default DestinationForm;
