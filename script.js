document.getElementById("turnoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value || "-";
  const telefono = document.getElementById("telefono").value || "-";
  const vehiculo = document.getElementById("vehiculo").value || "-";
  const servicio = document.getElementById("servicio").value || "-";
  const fecha = document.getElementById("fecha").value || "-";
  const horario = document.getElementById("horario").value || "-";
  const comentario = document.getElementById("comentario").value || "-";

  const mensaje = `Hola CR Potenciación, quiero solicitar un turno.

Nombre: ${nombre}
Teléfono: ${telefono}
Vehículo: ${vehiculo}
Servicio: ${servicio}
Fecha: ${fecha}
Horario: ${horario}
Comentario: ${comentario}`;

  const url = "https://wa.me/5492954602193?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
});
