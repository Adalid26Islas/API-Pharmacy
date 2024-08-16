import { resolveObjMapThunk } from "graphql";
import Medicine from "../models/Medicine.js";

const medicinesDAO ={};
medicinesDAO.getAll =async () => {
    return await Medicine.find();
}
medicinesDAO.insertMedicine = async (medicine) => {
    return await Medicine.create(medicine)
}

//Recibe como parametro el barcode y con el findOne muestra el elemento que exista en la coleccion, si no existe devolvera null
medicinesDAO.getOne = async(barcode) =>{
    return await Medicine.findOne({barcode:barcode})
}
export default medicinesDAO;