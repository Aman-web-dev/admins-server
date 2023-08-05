
const express = require("express");

const mongoose = require('mongoose');

require('dotenv').config();



const URI = process.env.MONGO_URI


const connector = async () => {


  try {

   const connection = await mongoose.connect(URI, { useNewUrlParser: true });

  global.poolingData=mongoose.connection



  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connector();


