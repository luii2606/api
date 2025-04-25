let win = window;
let dom = document;

let header = document.querySelectorAll('header');
let p = document.querySelector('main p'); //selectores
let container = document.querySelector('.container'); //clases
let api = document.querySelector('#api') // id

// let formularios = dom.forms; //formulario
// let img = document.images//imagenes
// let stilos = document.styles//hojas de style
// let etiquetas = document//etiquetas script

//modificar nodo de texto
// api.textContent = "Holaaaaaa";

let lista = document.querySelector('ul'); //listar ul

let list = document.querySelectorAll('ul.list > li.item');
let card = document.querySelectorAll('div.cards > div.card');
let cards = document.querySelector('div.cards');


// console.log(cards);
console.log(cards.children);
console.log("padre",cards.parentElement); //padre
console.log("Hermano", cards.previousElementSibling); //hermano

let elementos = document.querySelector('#elementos');
elementos.textContent = "nuevo texto";
elementos.innerHTML = `<p> textos </p> <p> textos </p>`;
console.log(elementos);

let body = document.querySelector('body');

console.log(body.classList);

setTimeout(() => {
  body.classList.add('bg-red');
}, 600);




