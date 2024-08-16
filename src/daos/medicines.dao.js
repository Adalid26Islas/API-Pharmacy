import Medicine from "../models/Medicine.js";

const medicinesDAO ={};
medicinesDAO.getAll =async () => {
    return await Medicine.find();
}
medicinesDAO.insertMedicine = async (medicine) => {
    return await Medicine.create(medicine)
}

export default medicinesDAO;