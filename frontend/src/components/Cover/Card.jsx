import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaDollarSign } from "react-icons/fa";
import '../../styles/cover/cardStyle.css'
import reactLogo from '../../assets/react.svg'


export default function Card(props) {
  return (
    <div className="card shadow-lg m-0 p-0 border-0 " style={{ width: "25rem"}}>
      <img src={props.image} className="card-img-top" alt="Excursión" style={{ objectFit: "cover", height: "250px" }} />

      {/* Contenido de la tarjeta */}
      <div className="card-body">
        <h4 className="fw-normal" style={{ color: "#21377f" }}>
            <img src={reactLogo} className="logo-brand" alt="React logo" />
            &nbsp;
            {props.name}
        </h4>
        {/* Próxima Fecha */}
        <p className="badge custom-badge fw-normal d-flex align-items-center gap-2 ">
          <FaCalendarAlt /> <strong>Próx. fecha: 21 de febrero</strong>
        </p>

        {/* Destino */}
        <p className="text-start mb-0 fw-normal" style={{ color: "#21377f", opacity: 0.8  }}>
          <FaMapMarkerAlt/> <strong>Destinos:</strong> Caldas, Manizales
        </p>

        {/* Duración */}
        <p className="text-start mb-0 fw-normal" style={{ color: "#21377f", opacity: 0.8  }}>
          <FaClock /> <strong>Duración:</strong> 2 Días
        </p>

        {/* Precio */}
        <p className="text-start fw-normal" style={{ color: "#21377f", opacity: 0.8 }}>
          <FaDollarSign /> <strong>Precio Desde:</strong> $1.040.000
        </p>

        {/* Descripción */}
        <p className="text-secondary text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti sit et eum hic voluptas voluptatem harum voluptate vitae sapiente quod reiciendis omnis quas, animi iure, pariatur nisi quia tempore!
        </p>
        {/* Botón Ver más */}
        <div className="d-flex">
        <a href="#" id='see-more' className="ms-auto">
            Ver más
        </a>
        </div>
      </div>
    </div>
  );
}