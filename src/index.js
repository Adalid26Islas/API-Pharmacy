import app from "./app.js";
app.get("/getAll", (req, res) => {
    res.json({message: "Hola desde la maquina de Adalid"});
})
app.listen(app.get("port"), () => {
    console.log("Server is running on port", app.get("port"));
})
