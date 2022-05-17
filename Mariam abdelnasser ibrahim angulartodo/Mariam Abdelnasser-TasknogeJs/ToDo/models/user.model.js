const mongoose=require('mongoose');

const userschema=mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'publisher'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const User= mongoose.model('users',userschema);
module.exports={User}