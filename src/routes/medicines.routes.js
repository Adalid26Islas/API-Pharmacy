import { Router } from "express";
import { DeleteOne, getAll, getOne, insertMedicine, updateOne } from "../controllers/medicines.controller.js";

const routerMedicines = Router();
routerMedicines.get("/getAll", getAll);
routerMedicines.post("/insertMedicine", insertMedicine)
routerMedicines.get("/getOne/:barcode", getOne)
routerMedicines.get("/deleteOne/:barcode", DeleteOne)
routerMedicines.put("/updateOne/:barcode", updateOne)
export default routerMedicines;