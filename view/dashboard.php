<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>

<body>
    <!-- BOTON CONSOLA TOURS -->
    <div style="border: 2px solid black; padding: 10px; width: 200px;">
        <form action="index.php?action=console_tour">
            <button type="submit" name="action" value="consolaTour">Consola Admin TOur</button>
        </form>
    </div>
    <br>
    <br>
    <!-- BOTON CONSOLA PAISES -->
    <div style="border: 2px solid black; padding: 10px; width: 200px;">
        <form action="index.php?action=console_country">
            <button type="submit" name="action" value="consolaPaises">Consola Paises</button>
        </form>
    </div>
</body>

</html>