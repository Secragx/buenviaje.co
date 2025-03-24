import { useState, useEffect } from "react";
import { listUsers, deleteUser } from "../../api/api";
import UserForm from "./UserForm";

const UserTable = () => {
    const [users, setUsers] = useState([]);

    // Cargar lista de usuarios
    const fetchUsers = async () => {
        try {
            const data = await listUsers();
            setUsers(data);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
            try {
                await deleteUser(id);
                fetchUsers(); // ✅ Recargar la lista después de eliminar
            } catch (error) {
                console.error("Error al eliminar usuario:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <UserForm onUpdate={fetchUsers} /> {/* ✅ Formulario para agregar usuarios */}

            <div className="card shadow-sm p-4 mt-4">
                <h2 className="text-center text-primary">Lista de Usuarios</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map(user => (
                                    <tr key={user.idUsuario}>
                                        <td>{user.idUsuario}</td>
                                        <td>{user.nombre}</td>
                                        <td>{user.apellido}</td>
                                        <td>{user.email}</td>
                                        <td>{user.telefono}</td>
                                        <td>{user.nombreRol}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDelete(user.idUsuario)}>Eliminar</button>
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
                </div>
            </div>
        </div>
    );
};

export default UserTable;
