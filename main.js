alert ('Cześć :) ja tu programuje, a co u Ciebie?');

const div = document.querySelectorAll(`div`);

console.log(div);

const footer = document.querySelector(`.footer`);

console.log(footer);

const header = document.querySelector(`.article__header`)

console.log(header);
    
const paragraphs = document.querySelectorAll(`p`);

console.log(paragraphs);

const heading = document.querySelector('.article__heading');

console.log(heading.innerHTML);

heading.innerHTML = 'Moja strona domowa';

const x = document.querySelector('.article__object');

console.log(x.innerHTML);

x.innerHTML = 'Nowy obiekt dodany'

console.log('Hello');
const name = 'Natalia';
const age = '31';

console.log('Nazywam się ${name} i mam ${age} lat, a Ty?');