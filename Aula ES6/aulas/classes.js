class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.usuario = "Marcus Vinicius";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var minhaLista = new TodoList();

document.getElementById("novotodo").onclick = function() {
  minhaLista.add("novo todo");
};

minhaLista.mostraUsuario();
