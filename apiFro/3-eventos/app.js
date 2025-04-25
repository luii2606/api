//variables
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name="nombre"]')
const apellido = document.querySelector('[name="apellido"]')
const telefono = document.querySelector('[name="telefono"]')
const documento = document.querySelector('[name="documento"]')
const usuario = document.querySelector('[name="usuario"]')
const contrasena = document.querySelector('[name="contrasena"]')


//funciones
const validar = (event) => {
  
  if (nombre.value == "") {
    alert("Por favor ingrese su nombre");
    nombre.focus();
    event.preventDefault();
  }
  if (apellido.value == "") {
    alert("Por favor ingrese su apellido");
    apellido.focus();
     event.preventDefault();
  }
    if (telefono.value == "") {
    alert("Por favor ingrese su telefono");
      telefono.focus();
      event.preventDefault();
  }
    if (documento.value == "") {
    alert("Por favor ingrese su documento");
      documento.focus();
      event.preventDefault();
  }
    if (usuario.value == "") {
    alert("Por favor ingrese su usuario");
      usuario.focus();
      event.preventDefault();
  }
    if (contrasena.value == "") {
    alert("Por favor ingrese su contrasena");
      contrasena.focus();
      event.preventDefault();
  }


}
//Solo permite letras y espacios, Si presionamos un número u otro símbolo, bloquea la tecla.
const validar_Cletras = (event) => {
  let tecla = event.key;
  const letras = /[a-zñáéíóú\s]/i;
  if (!letras.test(tecla)) {
    // alert("Solo se permiten letras y espacios.");
    event.preventDefault();
  }
};


//Solo permite números y la tecla Backspace para borrar.Si escribimos una letra, la bloquea.

const validar_Cnumericos = (event) => {
  let tecla = event.key;
  const numeros = /[0-9]/;
  if (!numeros.test(tecla) && tecla !== "Backspace") {
    // alert("Solo se permiten números.");
    event.preventDefault();
  }
};


//Eventos
formulario.addEventListener('submit', validar);
nombre.addEventListener('keydown',validar_Cletras);
apellido.addEventListener('keydown',validar_Cletras);
telefono.addEventListener('keydown',validar_Cnumericos);
documento.addEventListener('keydown',validar_Cnumericos);