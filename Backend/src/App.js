const express = require('express');

const multer = require('multer');

const cors = require('cors')

const postmodel = require('./models/post.model');

const uploadFile = require('./services/storage.service');

const app = express();

app.use(cors())

const upload = multer({storage : multer.memoryStorage()})

app.use(express.json())

app.post('/create-post' , upload.single('image') ,async(req, res) =>{

    try{

        if(!req.file || !req.file.buffer){

        res.status(400).json({message : "please upload a valid image file "})

        }

        const imgUrl = await uploadFile(req.file.buffer , req.file.originalname || "img.jpg")

        const post = await postmodel.create({

            image : imgUrl,

            caption : req.body.caption

        })

        res.status(201).json({message : "post uploaded successfully"})

    }catch(e){

        console.log("ERROR " , e)

    }

app.get('/posts' , async(req , res) =>{

    try{

         const allpost = await postmodel.find()

         res.status(200).json(allpost)

    }catch(e){

        res.send(400).json({"ERROR" : e})
    }

})
    
})

module.exports = app