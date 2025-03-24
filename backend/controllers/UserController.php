<?php
include_once '../models/User.php';
include_once '../config/database.php';

class  UserController{
    private $db;
    private $user;

    public function __construct(){
        $database = new Database();
        $this->db = $database->getConnection();
        $this->user = new User($this->db);
    }

// List all users
    public function listUsers(){
        return $this->user->getUser();
    }

// Create new user
public function createUser($data)
{
    if (
        !isset($data['nombre'], $data['apellido'], $data['email'], 
                $data['passwordHash'], $data['telefono'], $data['fechaRegistro'], 
                $data['idRol'], $data['idTipoDocumento'], $data['numeroIdentificacion'])
    ) {
        return ['status' => 'error', 'message' => 'Todos los campos son obligatorios'];
    }

    $result = $this->user->createUser(
        $data['nombre'],
        $data['apellido'],
        $data['email'],
        $data['passwordHash'],
        $data['telefono'],
        $data['fechaRegistro'],
        $data['idRol'],
        $data['idTipoDocumento'],
        $data['numeroIdentificacion']
    );

    return $result
        ? ['status' => 'success', 'message' => 'Usuario creado correctamente']
        : ['status' => 'error', 'message' => 'Error al crear el usuario'];
}

    // Actualizar un tour existente
    public function updateUser($idUsuario, $data){
        if (empty($data)) {
            return ['status' => 'error', 'message' => 'No hay datos para actualizar'];
        }
        $result = $this->user->updateUser($idUsuario, $data);
        return $result
            ? ['status' => 'success', 'message' => 'Usuario actualizado correctamente']
            : ['status' => 'error', 'message' => 'Error al actualizar el usuario'];
    }

    // Delete user
    public function deleteUser($idUsuario){
        $result = $this->user->deleteUser($idUsuario);

        return $result
            ? ['status' => 'success', 'message' => 'Usuario eliminado correctamente']
            : ['status' => 'error', 'message' => 'Error al eliminar el usuario'];
    }

    // Login user
// Login user
public function loginUser($email, $password)
{
    $user = $this->user->getUserByEmail($email);

    if (!$user) {
        return ["success" => false, "message" => "Usuario no encontrado"];
    }

    if (!password_verify($password, $user['passwordHash'])) {
        return ["success" => false, "message" => "Credenciales incorrectas"];
    }

    $token = bin2hex(random_bytes(32));

    return [
        "success" => true,
        "message" => "Inicio de sesión exitoso",
        "token" => $token,
        "user" => [
            "idUsuario" => $user['idUsuario'],
            "nombre" => $user['nombre'],
            "apellido" => $user['apellido'],
            "email" => $user['email'],
            "idRol" => $user['idRol']
        ]
    ];
}

    
}
?>