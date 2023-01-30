import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + "/scr"));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
