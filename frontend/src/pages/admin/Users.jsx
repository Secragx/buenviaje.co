import UserTable from "../../components/User/UserTable";

const Users = () => {
    return (
        <div className="container mt-4">
            <div className="card shadow-sm p-4">
                <h1 className="text-center mb-4">Gestión de Usuarios</h1>
                <UserTable />
            </div>
        </div>
    );
};

export default Users;
