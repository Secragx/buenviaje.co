// TourForm.jsx
import React, { useState, useEffect } from "react";
import { createTour, listDestinations } from "../../api/api";

const TourForm = ({ onAdd }) => {
    const [newTour, setNewTour] = useState({
        nombreTour: "",
        idDestino: "",
        precio: "",
        descripcion: "",
        fechaInicio: "",
        fechaFin: ""
    });
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        listDestinations().then(setDestinations).catch(error => console.error("Error al obtener destinos:", error));
    }, []);

    const handleChange = (e) => {
        setNewTour({ ...newTour, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTour(newTour.nombreTour, newTour.idDestino, newTour.precio, newTour.descripcion, newTour.fechaInicio, newTour.fechaFin);
            setNewTour({ nombreTour: "", idDestino: "", precio: "", descripcion: "", fechaInicio: "", fechaFin: "" });
            onAdd();
        } catch (error) {
            console.error("Error al agregar tour:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 border rounded">
            <h2 className="mb-3">Agregar Tour</h2>
            <div className="mb-3">
                <label className="form-label">Nombre del Tour:</label>
                <input type="text" className="form-control" name="nombreTour" value={newTour.nombreTour} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Destino:</label>
                <select className="form-select" name="idDestino" value={newTour.idDestino} onChange={handleChange} required>
                    <option value="">Seleccione un destino</option>
                    {destinations.map(dest => (
                        <option key={dest.idDestino} value={dest.idDestino}>{dest.ciudadDestino}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Precio:</label>
                <input type="number" className="form-control" name="precio" value={newTour.precio} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Descripción:</label>
                <textarea className="form-control" name="descripcion" value={newTour.descripcion} onChange={handleChange} required></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha de Inicio:</label>
                <input type="date" className="form-control" name="fechaInicio" value={newTour.fechaInicio} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha de Fin:</label>
                <input type="date" className="form-control" name="fechaFin" value={newTour.fechaFin} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    );
};

export default TourForm;