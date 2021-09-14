const mongoose = require('mongoose')
require('dotenv').config();

const MONGO_CONNECT = 'mongodb+srv://admin:abcd1234@cluster0.m80un.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGO_CONNECT,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });
