
const Db = process.env.ATLAS_URI;
const mongoose = require('mongoose');


const connectDB = async () => {
    try{

        mongoose.connect(Db, {
        useNewUrlParser: true});
        console.log("Connected to MongoDB");

    }catch(err){
        console.log("Could not connect");
    }
    




}


module.exports = connectDB;
   
