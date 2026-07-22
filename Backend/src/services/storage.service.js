const {ImageKit}  = require('@imagekit/nodejs');

require('dotenv').config();

const imagekit = new ImageKit({

    privateKey: process.env.PRIVATE_KEY,

    publicKey : process.env.PUBLIC_KEY,

    urlEndpoint:process.env.ENDPOINT

})

const uploadFile = async (buffer, filename = "image.jpg") =>{
    
    try{
        if(!Buffer.isBuffer(buffer)){

            console.log("enter a valid image file")

    }
    const result = await imagekit.files.upload({

                file: buffer.toString('base64'),

                fileName: filename,

                useUniqueFileName: true
    })

 return result.url

}catch(e){

    console.log("ERROR" , e);

}

}

module.exports = uploadFile
        
    
