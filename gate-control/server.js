const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

// Проверка сервера
app.get("/", (req, res) => {
    res.send("GateControl Server OK");
});

// Проверка API
app.get("/api/ping", (req, res) => {
    res.json({
        ok: true,
        project: "GateControl",
        version: "1.0",
        time: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
