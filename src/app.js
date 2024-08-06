//Creación del servidor
import express from 'express';
const app = express();
//Configuraciones
app.set("port", 3000 || process.env.PORT);
//Middleware
export default app;