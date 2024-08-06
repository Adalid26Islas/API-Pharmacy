import app from "./app.js";
app.get("/getAll", (req, res) => {
    res.json({message: "Hola desde la maquina de Adalid"})
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
