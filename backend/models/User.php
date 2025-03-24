<?php
class User
{
    private $conn;
    private $table = "usuarios";

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getUser(){
        $query = "SELECT u.idUsuario, u.nombre, u.apellido, u.email, u.passwordHash, u.telefono, u.fechaRegistro, u.idRol, r.nombreRol, u.idTipoDocumento, t.nombreTipo, u.numeroIdentificacion 
        FROM usuarios u
        JOIN tiposDocumento t ON u.idTipoDocumento = t.idTipoDocumento
        JOIN roles r ON u.idRol = r.idRol";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function createUser(
        $nombre,
        $apellido,
        $email,
        $password,
        $telefono,
        $fechaRegistro,
        $idRol,
        $idTipoDocumento,
        $numeroIdentificacion
    ) {
        $passwordHash = password_hash($password, PASSWORD_BCRYPT);
        $query = "INSERT INTO " . $this->table . "(nombre, apellido, email, passwordHash, telefono, fechaRegistro, idRol, idTipoDocumento, numeroIdentificacion) VALUES (:nombre, :apellido, :email, :passwordHash, :telefono, :fechaRegistro, :idRol, :idTipoDocumento, :numeroIdentificacion)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':apellido', $apellido);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':passwordHash', $passwordHash);
        $stmt->bindParam(':telefono', $telefono);
        $stmt->bindParam(':fechaRegistro', $fechaRegistro);
        $stmt->bindParam(':idRol', $idRol);
        $stmt->bindParam(':idTipoDocumento', $idTipoDocumento);
        $stmt->bindParam(':numeroIdentificacion', $numeroIdentificacion);
        return $stmt->execute();
    }

    // Delete User
    public function deleteUser($idUsuario){
        $query = "DELETE FROM " . $this->table . " WHERE idUsuario = :idUsuario";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':idUsuario', $idUsuario);
        return $stmt->execute();
    }

    // Update User Flexible
    public function updateUser($idUsuario, $datos){
        if (empty($datos)) {
            return false; 
        }

        $query = "UPDATE " . $this->table . " SET ";
        $values = [];
        foreach ($datos as $campo => $valor) {
            $query .= "$campo = :$campo, ";
            $values[":$campo"] = $valor;
        }

        $query = rtrim($query, ", ") . " WHERE idUsuario = :idUsuario";
        $values[":idUsuario"] = $idUsuario;
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($values);
    }
    
    // Login
    public function loginUser($email, $password) {
        $query = "SELECT * FROM " . $this->table . " WHERE email = :email";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':email', $email); 
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
        if (!$user) {
            return false;
        }
    
        if (password_verify($password, $user['passwordHash'])) {
            return $user; 
        }
        return false; 
    }

    // Get user by email
    public function getUserByEmail($email)
    {
        $query = "SELECT * FROM " . $this->table . " WHERE email = :email LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
        
    
}
?>