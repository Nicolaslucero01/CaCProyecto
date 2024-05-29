document.getElementById("myForm").addEventListener("submit", function (event) {
  let isValid = true;

  const nombre = document.getElementById("nombre").value;
  if (!nombre) {
    isValid = false;
    document.getElementById("error-nombre").textContent =
      "El nombre es requerido";
  } else if (nombre.length < 2) {
    isValid = false;
    document.getElementById("error-nombre").textContent =
      "El nombre debe tener al menos 2 caracteres";
  } else {
    document.getElementById("error-nombre").textContent = "";
  }

  const apellido = document.getElementById("apellido").value;
  if (!apellido) {
    isValid = false;
    document.getElementById("error-apellido").textContent =
      "El apellido es requerido";
  } else if (apellido.length < 2) {
    isValid = false;
    document.getElementById("error-apellido").textContent =
      "El apellido debe tener al menos 2 caracteres";
  } else {
    document.getElementById("error-apellido").textContent = "";
  }

  const tel = document.getElementById("tel").value;
  if (!tel) {
    isValid = false;
    document.getElementById("error-tel").textContent =
      "El teléfono es requerido";
  } else if (!/^\d+$/.test(tel)) {
    isValid = false;
    document.getElementById("error-tel").textContent =
      "El teléfono debe ser numérico";
  } else {
    document.getElementById("error-tel").textContent = "";
  }

  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    isValid = false;
    document.getElementById("error-email").textContent =
      "El email es requerido";
  } else if (!emailPattern.test(email)) {
    isValid = false;
    document.getElementById("error-email").textContent =
      "Debe ser un email válido";
  } else {
    document.getElementById("error-email").textContent = "";
  }

  const fechaViaje = document.getElementById("Fecha_viaje").value;
  if (!fechaViaje) {
    isValid = false;
    document.getElementById("error-fecha_viaje").textContent =
      "La fecha de viaje es requerida";
  } else {
    document.getElementById("error-fecha_viaje").textContent = "";
  }

  const imagen = document.getElementById("Imagen_form").value;
  if (!imagen) {
    isValid = false;
    document.getElementById("error-imagen_form").textContent =
      "Debe subir una imagen";
  } else {
    document.getElementById("error-imagen_form").textContent = "";
  }

  const checkboxes = document.querySelectorAll(
    'input[name="tipo_informacion"]:checked'
  );
  if (checkboxes.length === 0) {
    isValid = false;
    document.getElementById("error-tipo_informacion").textContent =
      "Debe seleccionar al menos una opción";
  } else {
    document.getElementById("error-tipo_informacion").textContent = "";
  }

  const comentarios = document.getElementById("Comentarios").value;
  if (comentarios.length > 0 && comentarios.length < 10) {
    isValid = false;
    document.getElementById("error-comentarios").textContent =
      "Los comentarios deben tener al menos 10 caracteres";
  } else {
    document.getElementById("error-comentarios").textContent = "";
  }

  if (isValid) {
    alert("Su mensaje fue enviado correctamente");
  } else {
    event.preventDefault();
  }
});
