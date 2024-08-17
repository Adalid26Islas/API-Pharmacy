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
medicinesDAO.DeleteOne = async(barcode) =>{
    return await Medicine.findOneAndDelete({barcode:barcode})
}

medicinesDAO.updateOne = async (barcode, updateData) => {
    return await Medicine.findOneAndUpdate(
        { barcode: barcode },  // Filtro para encontrar el registro por barcode
        { $set: updateData },  // Actualiza solo los campos proporcionados en updateData
        { new: true, runValidators: true }  // Devuelve el documento actualizado y aplica validadores
    );
};
export default medicinesDAO;