function tratarAnomalia() {
  const numCamara = document.getElementById("num-camara").value;
  let tipoAnomalia;
  const opciones = document.getElementsByName("tipoAnomalia");
  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      tipoAnomalia = opciones[i].value;
      break;
    }
  }
  const now = new Date();
  const timestamp = now.toLocaleString();

  // Crear nueva entrada de log
  const entradaLog = document.createElement("div");
  entradaLog.textContent =
    "Cámara: " +
    numCamara +
    ", Situación: " +
    tipoAnomalia +
    ", Detectado el: " +
    timestamp;

  // Añadir entrada log al contenedor izqda. dentro de zona-secciones
  const logContenedor = document.getElementById("contenedor-log");
  logContenedor.appendChild(entradaLog);

  // Asegurarnos de que el contenedor de logs hace scroll hasta abajo
  logContenedor.scrollTop = logContenedor.scrollHeight;

  // Muestra texto de "Alarma" en contenedor central al detectarse una alarma
  const contenedorCentral = document.getElementById("contenedor-central");
  if (tipoAnomalia === "alarm") {
    contenedorCentral.textContent = "Cámara: " + numCamara + " - Alarma";
    contenedorCentral.classList.add("alarma-activa");
    contenedorCentral.classList.remove("normal");
  } else {
    contenedorCentral.textContent = ""; // Borrar texto si no se da "alarma"
    contenedorCentral.classList.remove("alarma-activa");
    contenedorCentral.classList.add("normal");
  }
}
