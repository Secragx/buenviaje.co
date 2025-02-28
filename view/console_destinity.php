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
    <?php
    $destinationData = isset($destinationData) ? $destinationData : null;
    ?>

    <h1>Administración de Destinos</h1>

    <table width="100%">
        <tr>
            <!-- Columna izquierda -->
            <h2>Agregar y Modificar Destinos</h2>
            <td width="50%" valign="top">
                <form action="index.php?action=updateDestination" method="POST">
                    <!-- Campo para ID Destino -->
                    <label for="idDestino">ID Destino:</label><br>
                    <input type="text" name="idDestino" id="idDestino"
                        value="<?php echo $destinationData ? htmlspecialchars($destinationData['idDestino']) : ''; ?>"
                        <?php echo $destinationData ? 'readonly' : ''; ?>>
                    <input type="submit" name="consultar" value="Consultar">
                    <br><br>

                    <!-- Lista de países -->
                    <label for="id_pais">Seleccione el País:</label><br>
                    <select name="id_pais" id="id_pais" required>
                        <?php
                        require_once './controller/countryController.php';
                        $countryController = new countryController();
                        $countries = $countryController->listCountry();

                        $selectedCountry = $destinationData ? $destinationData['id_pais'] : '';

                        foreach ($countries as $country) {
                            $selected = ($country['idPais'] == $selectedCountry) ? 'selected' : '';
                            echo "<option value='{$country['idPais']}' $selected>{$country['nombrePais']}</option>";
                        }
                        ?>
                    </select>
                    <br><br>

                    <!-- Campo de descripción -->
                    <label for="ciudadDestino">Ciudad Destino:</label><br>
                    <textarea name="ciudadDestino" id="ciudadDestino" rows="4" cols="50"><?php echo $destinationData ? htmlspecialchars($destinationData['ciudadDestino']) : ''; ?></textarea>
                    <br>

                    <!-- Botón de guardar -->
                    <input type="submit" name="guardar" value="Guardar">
                </form>
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
                        require_once './model/destinityModel.php';

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