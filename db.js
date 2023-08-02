
const express = require("express");

const mongoose = require('mongoose');



const URI = "mongodb+srv://amanzhx1234:election123@cluster0.bjbll35.mongodb.net/data" 

const connector = async () => {


  try {

   const connection = await mongoose.connect(URI, { useNewUrlParser: true });

  //  console.log(connection)

    console.log("Mongo Db Connected Successfully")
   global.poolingData=mongoose.connection

  //  try{
    
  //   const fetched= await (await mongoose.connection.db.collection('pooling_data').find({}).toArray())
  //   global.poolingData=fetched
  //   // console.log(global.poolingData)
    
  
  // }catch(error){
  //    console.log(error)
  // }


  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connector();


