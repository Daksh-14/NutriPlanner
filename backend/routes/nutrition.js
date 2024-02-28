import express  from 'express';

const router=express.Router();

router
    .route('/')
    .post(async(req,res)=>{
        try{
        const details=[];
        const {age,height,weight,gender,no_days,no_meals,weightLoss}=req.body;
        details.push(age);
        details.push(height);
        details.push(weight);
        details.push(gender);
        details.push(no_days);
        details.push(no_meals);
        details.push(weightLoss);
        console.log(details);
        const Plan= await axios.post('',{details});
        res.status(200).send({Plan});
        }catch(error){
            console.log(error);
        }
    })

    export default router;