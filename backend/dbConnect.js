const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const User = require('./models/userModel.js')
const dbConnect = async ()=>{
    const DB_OPTIONS = {
        dbName: "merndb"
    }
    try{
        await mongoose.connect(process.env.DB_URL,DB_OPTIONS)
        console.log("db connected successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports = dbConnect