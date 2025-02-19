<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consola Administración Destinos</title>
    <style>
        .container {
            display: flex;
            gap: 20px;
            margin: 20px;
        }

        .left-block,
        .right-block {
            flex: 1;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }

        select,
        textarea {
            width: 100%;
            margin-bottom: 15px;
            padding: 8px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
        }
    </style>
</head>

<body>
    <h1>Administración de Destinos</h1>

    <table width="100%">
        <tr>
            <!-- Columna izquierda -->
            <td width="50%" valign="top">
                <h2>Agregar Destino</h2>
                <h2>Modificar Destino</h2>
                <form action="index.php?action=updateDescription" method="POST">
                    <label for="id_pais">Seleccione el País:</label><br>
                    <select name="id_pais" required>
                        <?php
                        // Obtener los países desde el controlador
                        require_once './controller/countryController.php';
                        $countryController = new countryController();
                        $countries = $countryController->listCountry();

                        // Generar las opciones del select (lista de países)
                        if (!empty($countries) && is_array($countries)) {
                            foreach ($countries as $country) {
                                echo "<option value='{$country['idPais']}'>{$country['nombrePais']}</option>";
                            }
                        } else {
                            echo "<option value=''>No hay países disponibles</option>";
                        }
                        ?>
                    </select>
                    <br><br>

                    <label for="descripcion">Nueva Descripción:</label><br>
                    <textarea name="descripcion" rows="4" cols="50" required></textarea><br><br>

                    <input type="submit" value="Guardar">
                </form>


                <!-- Botón para volver al Dashboard -->
                <div style="margin-top: 20px;">
                    <form action="index.php" method="GET">
                        <button type="submit">
                            Volver al Dashboard
                        </button>
                    </form>
                </div>
            </td>

            <!-- Columna derecha -->
            <td width="50%" valign="top">
                <h2>TABLA DE DESTINOS</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id Destino</th>
                            <th>Ciudad Destino</th>
                            <th>Pais</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        require_once './controller/destinityController.php';

                        $destinityController = new destinityController();
                        $destinities = $destinityController->listDestinity();
                        ?>

                        <?php if (!empty($destinities) && is_array($destinities)): ?>
                            <?php foreach ($destinities as $destinity): ?>
                                <tr>
                                    <td><?= $destinity['idDestino']; ?></td>
                                    <td><?= $destinity['ciudadDestino']; ?></td>
                                    <td><?= $destinity['nombrePais']; ?></td>
                                </tr>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <tr>
                                <td colspan="3">No hay datos disponibles.</td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>