import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.use((req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
