const express = require('express');
const { getAllData, createData, getOneItems,updateData, deleteData } = require('../controller/crud');

const router = express.Router();

router.get('/list', getAllData)
router.get('/:itemID', getOneItems)

router.post('/createCrud', createData)
router.post('/:itemID', updateData)

router.delete('/:itemID', deleteData)



module.exports = router;
