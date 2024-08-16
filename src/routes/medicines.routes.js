import { Router } from "express";
import { DeleteOne, getAll, getOne, insertMedicine, UpdateOne } from "../controllers/medicines.controller.js";

const routerMedicines = Router();
routerMedicines.get("/getAll", getAll);
routerMedicines.post("/insertMedicine", insertMedicine)
routerMedicines.get("/getOne/:barcode", getOne)
routerMedicines.get("/deleteOne/:barcode", DeleteOne)
routerMedicines.put("/updateOne/:barcode", UpdateOne)
export default routerMedicines;