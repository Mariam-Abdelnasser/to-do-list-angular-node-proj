const router = require('express').Router();
const {ToDos} = require('../models/todo.model');
const {todoDto} = require('../dto/todo.dto');
const { put } = require('./authentication.routes');

//get item

router.get('/getTodo', async (req,res) => {
    const item  = await ToDos.find({'createdBy.id':req.user.id});
    res.status(200).json({item});
})

//create item
router.post('/createTodo', async (req,res) => {
    const {title,completed}=req.body;

    const item = new ToDos({
        title,
        completed,
        createdBy:{
            id:req.user.id,
            name:req.user.name
        }
    })

    await item.save();
    res.status(200).json({item:todoDto(item)});
})

//update item
router.put('/updateTodo/:id', async (req,res) => {
    const {title,completed} = req.body;
    const item = await ToDos.findOneAndUpdate({'createdBy.id':req.user.id,_id:req.params.id},{title,completed});

    res.status(200).json({item:todoDto(item)});
})

//delete item
router.delete('/deleteTodo/:id', async (req,res) =>{

    const item = await ToDos.findOneAndDelete({'createdBy.id':req.user.id,_id:req.params.id});
    res.status(200).json({msg:'item is deleted'});
})

module.exports = router;