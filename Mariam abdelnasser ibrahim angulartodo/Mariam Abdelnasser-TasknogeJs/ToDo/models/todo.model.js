const mongoose=require('mongoose');

const todoschema=mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default:false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required:true 
        }
    }
})

const ToDos= mongoose.model('todos',todoschema);
module.exports={ToDos}