import React from "react";
import { deleteDestination } from "../../api/api"; // Importamos la función para eliminar destino

const DestinationTable = ({ destinations, onUpdate }) => {
    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este destino?")) {
            try {
                await deleteDestination(id); // Llamamos a la API para eliminar el destino
                onUpdate(); // Actualiza la lista después de eliminar
            } catch (error) {
                console.error("Error al eliminar destino:", error);
            }
        }
    };

    return (
        <>
            <h2>Lista de Destinos</h2>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ciudad</th>
                        <th>País</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {destinations.length > 0 ? (
                        destinations.map((dest) => (
                            <tr key={dest.idDestino}>
                                <td>{dest.idDestino}</td>
                                <td>{dest.ciudadDestino}</td>
                                <td>{dest.nombrePais}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(dest.idDestino)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">No hay datos disponibles.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default DestinationTable;
