// TourTable.jsx
import React from "react";
import { deleteTour } from "../../api/api";

const TourTable = ({ tours, onUpdate }) => {
    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este tour?")) {
            try {
                await deleteTour(id);
                onUpdate();
            } catch (error) {
                console.error("Error al eliminar tour:", error);
            }
        }
    };

    return (
        <>
            <h2>Lista de Tours</h2>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Destino</th>
                        <th>Precio</th>
                        <th>Fechas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tours.length > 0 ? (
                        tours.map(tour => (
                            <tr key={tour.idTour}>
                                <td>{tour.idTour}</td>
                                <td>{tour.nombreTour}</td>
                                <td>{tour.ciudadDestino}</td>
                                <td>${tour.precio}</td>
                                <td>{tour.fechaInicio} - {tour.fechaFin}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(tour.idTour)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No hay datos disponibles.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default TourTable;