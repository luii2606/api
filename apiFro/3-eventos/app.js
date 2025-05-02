import { validaciones, limitar,outFocus} from "./modulos.js";
//variables
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name="nombre"]')
const apellido = document.querySelector('[name="apellido"]')
const telefono = document.querySelector('[name="telefono"]')
const documento = document.querySelector('[name="documento"]')
const usuario = document.querySelector('[name="usuario"]')
const contrasena = document.querySelector('[name="contrasena"]')
const politicas = document.querySelector('#politicas');
const btn = document.querySelector('#btn_validar');


//funciones
const validar = (event) => {
  event.preventDefault();
  if (nombre.value == "") {

    if (nombre.nextElementSibling) {
      nombre.nextElementSibling.remove();
    }

    nombre.classList.add('borde_rojo');
    const span = document.createElement('span');
    span.textContent = "El campo es obligatorio";
    nombre.insertAdjacentElement('afterend', span);
    nombre.focus();
  }
  if (apellido.value == "") {
    
    if (apellido.nextElementSibling) {
      apellido.nextElementSibling.remove();
    }

    apellido.classList.add('borde_rojo');
    const span = document.createElement('span');
    span.textContent = "El campo es obligatorio";
    apellido.insertAdjacentElement('afterend', span);
    apellido.focus();
  }
  if (telefono.value == "") {
    
    if (telefono.nextElementSibling) {
      telefono.nextElementSibling.remove();
    }

    telefono.classList.add('borde_rojo');
    const span = document.createElement('span');
    span.textContent = "El campo es obligatorio";
    telefono.insertAdjacentElement('afterend', span);
    telefono.focus();
  }
  if (documento.value == "") {
    
    if (documento.nextElementSibling) {
      documento.nextElementSibling.remove();
    }

    documento.classList.add('borde_rojo');
    const span = document.createElement('span');
    span.textContent = "El campo es obligatorio";
    documento.insertAdjacentElement('afterend', span);
    documento.focus();  
  }
  if (usuario.value == "") {
    
    if (usuario.nextElementSibling) {
      usuario.nextElementSibling.remove();
    }

    usuario.classList.add('borde_rojo');
    const span = document.createElement('span');
    span.textContent = "El campo es obligatorio";
    usuario.insertAdjacentElement('afterend', span);
    usuario.focus();
  }
  if (contrasena.value == "") {
   
    if (contrasena.nextElementSibling) {
      contrasena.nextElementSibling.remove();
    }

    contrasena.classList.add('borde_rojo');
    const span = document.createElement('span');
    span.textContent = "El campo es obligatorio";
    contrasena.insertAdjacentElement('afterend', span);
    contrasena.focus();
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

const Limpiar = (event) => {
  if (event.target.value !== "") {
    event.target.classList.remove('borde_rojo');
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    }
  }
}


const deshabilitarbtn = () => {
  if (!politicas.checked) {
    btn.setAttribute('disabled', '');
  } else {
    btn.removeAttribute('disabled');
  }
}
const invali = () => {
  let data = validar(e);
  console.log(data);
}


//Eventos

nombre.addEventListener("keypress",limitar)
formulario.addEventListener('submit', validaciones);

// nombre.addEventListener('keydown',validar_Cletras);
// apellido.addEventListener('keydown',validar_Cletras);
// telefono.addEventListener('keydown',validar_Cnumericos);
// documento.addEventListener('keydown', validar_Cnumericos);
// usuario.addEventListener('keydown', validar_Cletras);
// contrasena.addEventListener('keydown', validar_Cletras);

// nombre.addEventListener('blur',outFocus);
// apellido.addEventListener('blur',outFocus);
// telefono.addEventListener('blur',outFocus);
// documento.addEventListener('blur', outFocus);
// usuario.addEventListener('blur', outFocus);
// contrasena.addEventListener('blur', outFocus);

addEventListener('DOMContentLoaded', deshabilitarbtn);
politicas.addEventListener('change', deshabilitarbtn);