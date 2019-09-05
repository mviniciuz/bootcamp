const express = require("express");

const server = express();

server.use(express.json());

const users = ["marcus teste", "Patricia", "Enzo"];

server.use((req, res, next) => {
  console.time("request");
  console.log(`metodo: ${req.method} url: ${req.url}`);
  next();
  console.timeEnd("request");
});

function checkUserExists(req, res, next) {
  if (!req.body.nome) {
    return res.status(400).json({ error: "Nome deve ser preenchido" });
  }
  return next();
}

function checkuserinarray(req, res, next) {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "User does not exist" });
  }
  req.user = user;

  return next();
}

server.get("/users", async (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkuserinarray, async (req, res) => {
  const { index } = req.params;
  // res.json(users[index]);
  res.json(req.user);
});

server.post("/users", checkUserExists, (req, res) => {
  const { nome } = req.body;

  users.push(nome);

  return res.json(users);
});

server.put("/users/:index", checkuserinarray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { nome } = req.body;

  users[index] = nome;

  return res.json(users);
});

server.delete("/users/:index", checkuserinarray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
});

server.listen(3000);
