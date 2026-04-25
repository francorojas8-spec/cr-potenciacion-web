document.getElementById("turnoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const datos = {
    nombre: document.getElementById("nombre").value || "-",
    telefono: document.getElementById("telefono").value || "-",
    vehiculo: document.getElementById("vehiculo").value || "-",
    servicio: document.getElementById("servicio").value || "-",
    fecha: document.getElementById("fecha").value || "-",
    horario: document.getElementById("horario").value || "-",
    comentario: document.getElementById("comentario").value || "-"
  };

  const mensaje =
`Hola CR Potenciación, quiero solicitar un turno.

Nombre: ${datos.nombre}
Teléfono: ${datos.telefono}
Vehículo: ${datos.vehiculo}
Servicio: ${datos.servicio}
Fecha: ${datos.fecha}
Horario: ${datos.horario}
Comentario: ${datos.comentario}`;

  const url = "https://wa.me/5492954602193?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
});