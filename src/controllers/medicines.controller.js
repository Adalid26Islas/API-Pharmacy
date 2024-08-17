import medicinesDAO from "../daos/medicines.dao.js";
export const getAll = async (req, res) =>{
    await medicinesDAO.getAll()
    .then((medicines) => {
        res.json(medicines);
    })
    .catch((err) => {
        res.json({message:err})
    })
};

export const insertMedicine = async (req, res) => {
    await medicinesDAO.insertMedicine(req.body)
    .then((medicine) =>{
        res.json(medicine)
    })
    .catch((err)=> {
        res.json({message:err});
    });
}

export const getOne = async (req, res) =>{
    await medicinesDAO.getOne(req.params.barcode)
    .then((medicine) => {
        if(medicine !=null)
            res.json(medicine)
        else
        res.json({message:"Medicine not found"});
    })
    .catch(err =>{
        res.json({message:err});
    })
}

export const DeleteOne = async (req, res) =>{
    await medicinesDAO.DeleteOne(req.params.barcode)
    .then((medicine) => {
        if(medicine !=null)
            res.json(medicine)
        else
        res.json({message:"Medicine not found"});
    })
    .catch(err =>{
        res.json({message:err});
    })
}

export const updateOne = async (req, res) => {
    try {
        const updatedMedicine = await medicinesDAO.updateOne(req.params.barcode, req.body);
        if (!updatedMedicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }
        res.json(updatedMedicine);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};