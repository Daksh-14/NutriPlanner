import express  from 'express';
import axios from 'axios';
const router=express.Router();

router
    .route('/')
    .post(async(req,res)=>{
        try{
            const reqBody=req.body.chat;
            const resBody=await axios.post('',{reqBody});
            if(!resBody){
                res.status(404).send("Error 404 not found")
            }
            res.status(200).send({resBody});
        }
        catch(error){
            console.log(error);
        }
    })