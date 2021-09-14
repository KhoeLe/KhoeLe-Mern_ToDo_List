const express  = require('express');
//Require dotenv
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
require('./db/connect');
const bodyParser = require('body-parser');
const router = require('./routes/crud');
const { readdirSync } = require("fs");
// const path = require('path')



const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());

//using middleware
app.use(bodyParser.json({limit: '2mb'}));
app.use(morgan('dev'))

//Middleware
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*')

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }

    next();
})





// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// })
// app.use('/api/' , router)
// app.use('/' , (req, res) => {
//     res.send("Welcome to API Server V1......")
// })

// routes middleware
readdirSync("./routes").map((r) => app.use("/api/v1/crud", require("./routes/" + r)));






app.listen(PORT, () =>{
    console.log(`Server started running ${PORT}`)
})
