const {User} = require('../models/user.model');
const {UserDto} = require('../dto/user.dto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const router = require('express').Router();

//signup
router.post('/signup', async (req,res) => {
    const{email,password,name} = req.body;

    const user = new User({
        name,
        email,
        role:'publisher'
    })

    const hashpassword = bcrypt.hashSync(password,10);
    user.password = hashpassword;

    await user.save();

    res.status(201).json({user:UserDto(user)});
})


//signin
router.post('/signin', async (req,res) => {
    const{email,password} = req.body;
    const user= await User.findOne({email});
    if (!user) return res.status(400).json({msg:'incorrect credentials'})
    const validPassword = await bcrypt.compareSync(password,user.password);
    if (!validPassword) return res.status(400).json({msg:'incorrect credentials'});
    const userData = UserDto(user);
    const token =  jwt.sign(userData,'mariamnasser1111');
    res.status(201).json({user:UserDto(user),token})
})

module.exports=router;