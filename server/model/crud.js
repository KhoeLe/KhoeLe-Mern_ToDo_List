const mongoose = require('mongoose')


const CrudSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Provide a name'],
        trim: true,
        maxlength: [50, 'Must be at least than 50 characters']
    },
    comment:String,

    completed:{
        type: Boolean,
        default: false,
    }

},
{ timestamps: true },)


module.exports = mongoose.model('Crud',CrudSchema )
