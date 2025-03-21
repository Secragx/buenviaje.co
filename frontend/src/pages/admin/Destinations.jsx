import { useState, useEffect } from "react";
import { listDestinations } from "../../api/api"; // Usamos la API centralizada
import DestinationForm from "../../components/Destination/DestinationForm";
import DestinationTable from "../../components/Destination/DestinationTable";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  // Obtener destinos desde la API
  const fetchDestinations = async () => {
    try {
      const data = await listDestinations();
      setDestinations(data);
    } catch (error) {
      console.error("Error al obtener destinos:", error);
    }
  };

  useEffect(() => {
    fetchDestinations(); // Cargar destinos al montar el componente
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-4">Administración de Destinos</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <DestinationForm onAdd={fetchDestinations} /> {/* Llamamos a fetchDestinations para actualizar la tabla */}
        </div>
        <div className="col-md-6">
          <DestinationTable destinations={destinations} onUpdate={fetchDestinations} /> {/* Actualizamos la lista de destinos después de agregar o eliminar */}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
