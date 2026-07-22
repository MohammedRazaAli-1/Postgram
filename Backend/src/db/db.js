const mongoose = require('mongoose');

require('dotenv').config()

const conncectDB = async () =>{

  try{ 

    await mongoose.connect(process.env.MONGODB_URI)

    console.log("DB connected successfully")

  }
  
  catch(e){

    console.log("ERROR : ", e)

  }

}

module.exports = conncectDB;





