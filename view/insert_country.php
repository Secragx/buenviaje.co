<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertar paises</title>
</head>
<body>
    <h1>AGREGAR PAIS</h1>
    
    <form action="index.php?action=insertCountry" method="POST">
        <label for="">Nombre del Pais</label>
        <input type="text" name="nombrePais" required><br>

        <input type="submit" value="Guardar">

    </form>

    <form action="index.php?action=dashboard"  method="POST">
    <button type="submit">Dashboard</button>
    </form>
</body>
</html>