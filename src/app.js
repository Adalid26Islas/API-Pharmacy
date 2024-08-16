import express from 'express';
import routerMedicines from './routes/medicines.routes.js';
const app = express();
//settings
app.set("port", 3000 || process.env.PORT);
//Middlewares
app.use(express.json());
app.use("/api/pharmacy", routerMedicines)
export default app;
