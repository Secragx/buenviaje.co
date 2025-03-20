<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertar Tour</title>
</head>
<body>

   <h1>INSERTAR TOUR</h1>
   
   <form action="index.php?action=insertTour" method="POST">
        <label for="">Nombre Del Tour</label>
        <input type="text" name="nombreTour" id=""><br>

        <label for="">Destino</label>
        <input type="number" name="idDestino" id=""><br>

        <label for="">Precio</label>
        <input type="number" name="precio" id=""><br>

        <label for="">Descripcion</label>
        <input type="text" name="descripcion" id=""><br>

        <label for="">Fecha Inicio</label>
        <input type="date" name="fechaInicio" id=""><br>

        <label for="">Fecha Fin</label>
        <input type="date" name="fechaFin" id=""><br>

        <label for="">Imagen</label>
        <input type="file" name="image" id=""><br>

        <input type="submit" value="Guardar">
    
    </form>

    <form action="index.php?action=dashboard"  method="POST">
    <button type="submit" name="action" value="dashboard">Dashboard</button>
    </form>

</body>
</html>