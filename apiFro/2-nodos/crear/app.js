let padre = document.querySelector('.container');


let node = document.createElement('h2');
node.textContent = "Titulo de segundo nivel"

let texto = document.createTextNode("Palabra para el nodo de texto");
padre.appendChild(node);
padre.appendChild(texto);
console.log(node);
//-------------------------------------------
let list = document.querySelector('#list')

let html = document.createElement('li');
html.textContent = "HTML";
html.classList.add('item');

let css = document.createElement('li');
css.textContent = "CSS";
css.classList.add('item');


let js = document.createElement('li');
js.textContent = "JS";
js.classList.add('item');


list.append(html, css, js); //agregar de una vez los tres elementos

console.log(list);
//----------------------------------------------
let card = document.querySelector('div.card');
let lista_card = card.querySelector('#list');
let titulo = document.createElement('h2');
titulo.textContent = "Titulo de la card";

console.log(card);
console.log(lista_card);
// card.append(titulo);
// card.insertBefore(titulo);
card.insertBefore(titulo, lista_card);

//Agregar nodos adyacentes
let beforebegin = document.createElement('li');
beforebegin.classList.add('item', 'before');
beforebegin.textContent = "1";

let afterbegin = document.createElement('li');
afterbegin.classList.add('item');
afterbegin.textContent = "2";

let beforeend = document.createElement('li');
beforeend.classList.add('item', 'before');
beforeend.textContent = "3";

let afterend = document.createElement('li');
afterend.classList.add('item');
afterend.textContent = "4";

lista_card.insertAdjacentElement('beforebegin', beforebegin); //1
lista_card.insertAdjacentElement('beforeend', beforeend); 
lista_card.insertAdjacentElement('afterbegin',afterbegin);
lista_card.insertAdjacentElement('afterend', afterend);

//Los días de la semana son:

let card_dias = document.querySelector('#dias');

const dias = [
  {
    id: 1,
    nombre: "Lunes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, labore!."
  },
    {
    id: 2,
    nombre: "Martes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, labore!."
  },
    {
    id: 3,
    nombre: "Miercoles",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, labore!."
  },
    {
    id: 4,
    nombre: "Jueves",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, labore!."
  },
    {
    id: 5,
    nombre: "Viernes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, labore!."
  },
    {
    id: 6,
    nombre: "Sabado",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, labore!."
  },
    {
    id: 7,
    nombre: "Domingo",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, labore!."
  }
];

dias.map(({nombre,img, parrafo}) => {

  //Crear Elementos
  let card = document.createElement('div');
  let card_header = document.createElement('div');
  let card_titulo = document.createElement('h2');
  let card_body = document.createElement('div');
  let imagen = document.createElement('img');
  let p = document.createElement('p');

  //Agregar los estilos
  card.classList.add('card');
  card_header.classList.add('card__header')
  card_titulo.classList.add('card__title');
  card_body.classList.add('card__body');
  imagen.classList.add('card__img');
  p.classList.add('card__paragraph');

  //Administrar los atributos
  imagen.setAttribute('src', img);
  imagen.setAttribute('alt', nombre);

  //Unir los elementos
  card_titulo.textContent = nombre;
  p.textContent = parrafo;
  card_body.append(imagen, p);
  card_header.append(card_titulo);
  card.append(card_header);
  card.append(card_body);
  card.dias.append(card);
})


