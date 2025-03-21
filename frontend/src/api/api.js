import axios from "axios";

const API_URL = "http://localhost/proyecto/backend/routes/api.php";

/** 
 * Obtener la lista de países 
 */
export const listCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}?entity=paises`);
    //console.log("Países obtenidos:", response.data); // ✅ Verifica en la consola
    return response.data;
  } catch (error) {
    console.error("Error al obtener países:", error);
    throw error;
  }
};

/** 
 * Obtener la lista de destinos 
 */
export const listDestinations = async () => {
  try {
    const response = await axios.get(`${API_URL}?entity=destinos`);
    //console.log("Destinos obtenidos:", response.data); // ✅ Verifica en la consola
    return response.data;
  } catch (error) {
    console.error("Error al obtener destinos:", error);
    throw error;
  }
};

/** 
 * Actualizar la descripción de un país 
 * @param {number} idPais - ID del país
 * @param {string} descripcion - Nueva descripción
 */
export const updateCountryDescription = async (idPais, descripcion) => {
  try {
    const response = await axios.post(
      `${API_URL}?entity=paises`,
      { id_pais: idPais, descripcion },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la descripción del país:", error);
    throw error;
  }
};

/** 
 * Agregar un destino 
 * @param {string} ciudadDestino - Nombre de la ciudad
 * @param {number} idPais - ID del país al que pertenece el destino
 */
export const createDestination = async (ciudadDestino, idPais) => {
  try {
    //console.log("Datos enviados a la API:", { ciudadDestino, id_pais: idPais }); // ✅ Verifica los datos antes de la petición
    const response = await axios.post(
      `${API_URL}?entity=destinos`,
      { ciudadDestino, idPais }, 
      { headers: { "Content-Type": "application/json" } }
    );
    //console.log("Respuesta de la API:", response.data); // ✅ Verifica la respuesta de la API
    return response.data;
  } catch (error) {
    console.error("Error al agregar destino:", error);
    throw error;
  }
};

/** 
 * Eliminar un destino 
 * @param {number} idDestino - ID del destino a eliminar
 */
export const deleteDestination = async (idDestino) => {
  try {
    console.log("Eliminando destino con ID:", idDestino);  // ✅ Verificación antes de la petición
    const response = await axios.delete(`${API_URL}?entity=destinos`, {
      headers: { "Content-Type": "application/json" },
      data: { idDestino },
    });
    console.log("Respuesta de la eliminación:", response.data);  // ✅ Verificación después de la petición
    return response.data;
  } catch (error) {
    console.error("Error al eliminar destino:", error);
    throw error;
  }
};


/** 
 * Obtener la lista de tours 
 */
export const listTours = async () => {
  try {
    const response = await axios.get(`${API_URL}?entity=tours`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tours:", error);
    throw error;
  }
};

/** 
 * Crear un nuevo tour 
 * @param {string} nombreTour - Nombre del tour
 * @param {number} idDestino - ID del destino asociado
 * @param {number} precio - Precio del tour
 * @param {string} descripcion - Descripción del tour
 * @param {string} fechaInicio - Fecha de inicio del tour (YYYY-MM-DD)
 * @param {string} fechaFin - Fecha de finalización del tour (YYYY-MM-DD)
 */
export const createTour = async (nombreTour, idDestino, precio, descripcion, fechaInicio, fechaFin) => {
  try {
    const response = await axios.post(
      `${API_URL}?entity=tours`,
      { nombreTour, idDestino, precio, descripcion, fechaInicio, fechaFin },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear el tour:", error);
    throw error;
  }
};

/** 
 * Actualizar un tour 
 * @param {number} idTour - ID del tour a actualizar
 * @param {Object} data - Objeto con los campos a actualizar
 */
export const updateTour = async (idTour, data) => {
  try {
    const response = await axios.put(
      `${API_URL}?entity=tours&idTour=${idTour}`,
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el tour:", error);
    throw error;
  }
};

/** 
 * Eliminar un tour 
 * @param {number} idTour - ID del tour a eliminar
 */
export const deleteTour = async (idTour) => {
  try {
    const response = await axios.delete(`${API_URL}?entity=tours`, {
      headers: { "Content-Type": "application/json" },
      data: { idTour },
    });
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el tour:", error);
    throw error;
  }
};
