document.getElementById("boton").addEventListener("click", function () {
  alert("¡Tu solicitud fue ingresa con exito.");
});
document.getElementById("miFormu").addEventListener("submit", function (event) {
  event.preventDefault(); // Esto evita que se recargue la página al enviar el formulario
  // Aquí puedo agregar el código para enviar el formulario, como una llamada a un servidor
  this.reset(); // Resetea el formulario después de enviarlo
});
