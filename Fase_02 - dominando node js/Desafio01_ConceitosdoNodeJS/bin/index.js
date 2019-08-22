const app = require("../app");

app.get("/", (req, res) => {
  res.json({ servidor: "online" });
});

app.listen(3000);
