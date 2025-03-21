// Tours.jsx
import { useState, useEffect } from "react";
import { listTours } from "../../api/api";
import TourForm from "../../components/Tour/TourForm";
import TourTable from "../../components/Tour/TourTable";

const Tours = () => {
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        try {
            const data = await listTours();
            setTours(data);
        } catch (error) {
            console.error("Error al obtener tours:", error);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center mt-4">Administración de Tours</h1>
            <div className="row mt-4">
                <div className="col-md-6">
                    <TourForm onAdd={fetchTours} />
                </div>
                <div className="col-md-6">
                    <TourTable tours={tours} onUpdate={fetchTours} />
                </div>
            </div>
        </div>
    );
};

export default Tours;