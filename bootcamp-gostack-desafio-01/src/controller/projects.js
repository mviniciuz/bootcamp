const express = require("express");

const router = express.Router();

const projects = [{ id: "1", title: "Novo Projeto", tasks: ["nova tarefa"] }];

router.use((req, res, next) => {
  console.log(`Quantidade de requisições: ${req.method.count}`);
  next();
});

router.post("/", (req, res) => {
  projects.push(req.body);
  return res.json({ sucesso: "projeto incuido com sucesso!" });
});

router.get("/", (req, res) => {
  return res.json(projects);
});

router.put("/:index", (req, res) => {
  const { index } = req.params.index;
  const { title } = req.body;

  projects[index] = title;
  return res.json({ projects });
});

router.delete("/:index", (req, res) => {
  const { index } = req.body;

  projects.splice(index, 1);

  return res.json({ Sucesso: "registro excluido com sucesso" });
});

module.exports = app => app.use("/projects", router);
