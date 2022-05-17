function connectDB(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/ToDos');
    mongoose.connection.once('connected', () => console.log('Connected To DB'))
}

module.exports={connectDB} 