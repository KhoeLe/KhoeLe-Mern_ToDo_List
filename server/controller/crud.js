
const CrudSchema = require('../model/crud')


//GET ALL DATA

const getAllData = async (req, res) => {
    try {

        const crud = await CrudSchema.find({})

        return res.status(200).json({ crud })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}


// Create a new CRUD

const createData = async (req, res) => {
    const {name} =  req.params
    try {
        (name !== null || name === undefined ? name : res.json({message:"Pls help input Task Name"}))
        const crud = await new CrudSchema(req.body).save()

        return res.status(201).json({ crud })
    } catch (error) {
        res.status(403).send('Name: Must be at least than 50 characters')
    }
}



// get one items

const getOneItems = async (req, res) => {

    try {

        const {itemID: crudID}  =req.params;

        const crud = await CrudSchema.findOne({_id:crudID});

        if(!crud){
            return res.status(404).json({ message:"Items does not exist"});
        }

        return res.status(200).json({crud})

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// POST UPDATE


const updateData = async (req, res) => {
    try {
        const {itemID: crudID}  =req.params

        const crud =  await CrudSchema.findByIdAndUpdate({_id:crudID}, req.body, {new: true , runValidation: true})

        if(!crud){
            return res.status(404).json({ message:"No itemID with that ID"});
        }

        return  res.status(200).json({crud})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const deleteData = async (req, res) => {
    try {
        const {itemID: crudID}  =req.params

        const crud =  await CrudSchema.findByIdAndDelete({_id:crudID})

        if(!crud){
            return res.status(404).json({ message:"No itemID with that ID"});
        }

        return  res.status(200).json({message:"Delete Success"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




module.exports = { getAllData, createData,getOneItems,updateData,deleteData }
