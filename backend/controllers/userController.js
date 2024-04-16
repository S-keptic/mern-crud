const User = require('../models/userModel.js')

const createUsers = async (req,res)=>{
    try{
        const {name,email,age} = req.body;
        const newUser = await User.create({
            name:name,
            email:email,
            age:age
        })

        res.send(newUser)
    }catch(err){
        console.log(err)
    }
}

const getUsers = async (req,res)=>{
    try{
        const allUsers = await User.find()
        res.send(allUsers) 
    }catch(err){
        console.log(err)
    }
}

const getUserById = async (req,res)=>{
    const {id} = req.params
    try{
        const user = await User.findById(id)
        res.send(user) 
    }catch(err){
        console.log(err)
    }
}

const deleteUserById = async (req,res)=>{
    const {id} = req.params
    try{
        const user = await User.findByIdAndDelete(id)
        res.send(user) 
    }catch(err){
        console.log(err)
    }
}

const updateUser = async (req,res)=>{
    const {id} = req.params
    const {name,email,age}= req.body
    try{
        const updatedUser = await User.findByIdAndUpdate(id,req.body,{new:true})
        res.send(updatedUser)
    }catch(err){
        console.log(err)
    }
    
}


module.exports = {createUsers,getUsers,getUserById,deleteUserById,updateUser}