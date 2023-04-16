const router = require('express').Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');
const  verify  = require('../verifyToken');


//UPDATE
router.put("/:id",verify, async (req,res)=>
{

        if(req.user.id === req.params.id || req.user.isAdmin)
        {

                if(req.body.password)
                {
                        const salt= await bcrypt.genSalt(10);
                        const secPass= await bcrypt.hash(req.body.password,salt);
                        req.body.password=secPass;
                }

                        try 
                        {
                               const updateUser= await User.findByIdAndUpdate(req.params.id,{
                                $set:req.body
                               },{new:true}) 
                               res.status(200).json(updateUser);
                        } 
                        catch (error) 
                        {
                                res.status(500).json(error);
                        }
        }
                
                else
                {
                        res.status(403).json('You Can Upadte Only Your Account!!')
                }
}

)




//DELETE

router.delete("/:id",verify, async (req,res)=>
{
        if(req.user.id === req.params.id || req.user.isAdmin)
        {
                        try 
                        {
                               const deleteUser= await User.findByIdAndDelete(req.params.id) 
                               res.status(200).json("User Has Been Deleted...");
                        } 
                        catch (error) 
                        {
                                res.status(500).json(error);
                        }
        }
                
                else
                {
                        res.status(403).json('You Can Delete Only Your Account!!')
                }
}

)



//GET
router.get("/find/:id", async (req,res)=>
{
        
                        try 
                        {
                               const getUser= await User.findById(req.params.id) 
                        //        const {password,...info}=user2._doc;
                               res.status(200).json(getUser);
                        } 
                        catch (error) 
                        {
                                res.status(500).json(error);
                        }
        }



)


//GET ALL

router.get("/",verify, async (req,res)=>
{
        const query=req.query.new;
        console.log(req.user.isAdmin);
        if(req.user.isAdmin)
        {
                        try 
                        {
                               const getAllUser= query ? await User.find().sort({_id:-1}).limit(5) : User.find();
                               res.status(200).json(getAllUser);
                        } 
                        catch (error) 
                        {
                                res.status(500).json(error);
                        }
        }
                
                else
                {
                        res.status(403).json('You Are Not Allowed See All Users!!')
                }
}

)



//GET USER STATE

router.get("/stats",async (req,res)=>{
        const today= new Date();
        const lastYear=today.setFullYear(today.setFullYear()-1);
        

        try 
        {
                const data =await User.aggregate([
                        {
                                $project:
                                {
                                        month:{$month:"$createdAt"},
                                },
                        },

                        {
                                $group:
                                {
                                        _id:"$month",
                                        total:{$sum:1}
                                },
                        },
                ]);
                res.status(200).json(data);
        }

        catch (error) 
        {
              res.status(200).json(error)  
        }
})


module.exports=router;