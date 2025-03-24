import { useState, useEffect } from "react";
import { createUser, listRoles, listDocTypes} from "../../api/api";

const UserForm = ({ onUpdate }) => {
    const [newUser, setNewUser] = useState({
        nombre: "",
        apellido: "",
        email: "", 
        telefono: "",
        passwordHash: "", 
        numeroIdentificacion: "", 
        idTipoDocumento: "", 
        fechaRegistro: "",
        idRol: "" 
    });
    const [roles, setRoles] = useState([]);
    const [docTypes, setDocTypes] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const rolesData = await listRoles();
                setRoles(rolesData);
            } catch (error) {
                console.error("Error al obtener roles:", error);
            }
        };

        const fetchDocTypes = async () => {
            try {
                const docTypesData = await listDocTypes();
                setDocTypes(docTypesData);
            } catch (error) {
                console.error("Error al obtener tipos de documento:", error);
            }
        };
        fetchRoles();
        fetchDocTypes();
    }, []);

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(newUser);
            setNewUser({ nombre: "", apellido: "", correo: "", telefono: "", password: "", identificacion: "", rol: "" });
            onUpdate();
        } catch (error) {
            console.error("Error al agregar usuario:", error);
        }
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="text-center text-primary">Agregar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input type="text" className="form-control" name="nombre" value={newUser.nombre} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido:</label>
                    <input type="text" className="form-control" name="apellido" value={newUser.apellido} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo:</label>
                    <input type="email" className="form-control" name="email" value={newUser.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono:</label>
                    <input type="tel" className="form-control" name="telefono" value={newUser.telefono} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" name="passwordHash" value={newUser.passwordHash} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo de Documento:</label>
                    <select className="form-control" name="idTipoDocumento" value={newUser.idTipoDocumento} onChange={handleChange} required>
                        <option value="">Selecciona un tipo de documento</option>
                        {docTypes.map((doc) => (
                            <option key={doc.idTipoDocumento} value={doc.idTipoDocumento}>{doc.nombreTipo}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Número de Identificación:</label>
                    <input type="text" className="form-control" name="numeroIdentificacion" value={newUser.numeroIdentificacion} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de Registro:</label>
                    <input type="date" className="form-control" name="fechaRegistro" value={newUser.fechaRegistro} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rol:</label>
                    <select className="form-control" name="idRol" value={newUser.idRol} onChange={handleChange} required>
                        <option value="">Selecciona un rol</option>
                        {roles.map((role) => (
                            <option key={role.idRol} value={role.idRol}>{role.nombreRol}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">Guardar</button>
            </form>
        </div>
    );
};

export default UserForm;
