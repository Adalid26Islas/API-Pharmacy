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

export const UpdateOne = async (req, res) =>{
    await medicinesDAO.UpdateOne(req.params.barcode, req.body)
    .then((medicine) =>{
        if(medicine != null)
            res.json({message:"Medicine updated"});
        else
            res.json({message:"Medicine not found"});
    })
    .catch(err =>{
        res.json({message:err});
    })
}