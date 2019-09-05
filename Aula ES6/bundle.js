"use strict";

var usuarios = {
  nome: "Marcus"
};
usuarios.nome = "sergio";
console.log(usuarios.nome);

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

y = 1;
console.log(teste(10));
