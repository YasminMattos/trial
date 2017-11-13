/*
// Obtenemos un referencia al elemento
var usercard = document.getElementById("card");

// En la propiedad dataset del elemento estarán todos los atributos data-*
var username = usercard.dataset.user;
var cardType = usercard.dataset.cardType;
var avatarSize = usercard.dataset.showAvatarSize;

function begin() {
    var counter = 0;

    setInterval(contar, 3000);

    function contar() {
        console.log(++counter);
    }
}

window.onload = begin;
*/
//Tipos de Selecciones en el DOM

//var uls =  document.getElementsByTagName('ul')[0];
//var uls =  document.querySelector('ul');
//var uls =  document.getElementById('ul-id');
//var uls =  document.querySelector('#ul-id');
//var uls =  document.getElementsByName('ul-name')[0];
//var uls =  document.getElementsByClassName('ul-class')[0];
//var uls =  document.querySelectorAll('.ul-class')[0];
//var uls =  document.querySelector('.ul-class');
/*
var children = uls.children;
var temp = children.length

for (var i = 0; i < temp; i++)
console.log(children[i].textContent);

var father = children[0].parentElement;

var son = document.createElement('li');

var brother = father.firstElementChild;

son.textContent = 'new son';
father.insertBefore(son, brother);

*/

var dad = document.getElementById('ul-id');

var newSon = document.createElement('li');
newSon.textContent = 'another text';

var brother = dad.firstElementChild.nextElementSibling.nextElementSibling; // o .children[2];

dad.insertBefore(newSon, brother);


// tagname class y getelement by name regresan arreglos.... los que nos son querySelector y getElement By Id
