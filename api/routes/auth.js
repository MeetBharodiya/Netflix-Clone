const router = require('express').Router();
const User =require("../models/User");
const bcrypt=require('bcrypt');
const {body,validationResult}=require('express-validator');
const dotenv =require('dotenv');
dotenv.config();
const jwt =require('jsonwebtoken')

//REGSITER
router.post('/register',
       [
        body('email','please enter valid email').isEmail(),
        body('username','please enter valid username').isLength({min:3}), 
        body('password','please enter valid password').isLength({min:6}) , 
       ],

       async (req,res)=>{
                   const errors = validationResult(req);
                   if (!errors.isEmpty()) {
                     return res.status(400).json({errors: errors.array() });
                   }
 try 
 {

   let user1 =  await User.findOne({email : req.body.email})

   if(user1)
   {
           return res.json({error:'soory user exist'})
   }

   const salt= await bcrypt.genSalt(10);
   const secPass= await bcrypt.hash(req.body.password,salt);


        const newUser = new User(
                {
                        username:req.body.username,
                        email:req.body.email,
                        password:secPass
                }
        );
        
                user1= await newUser.save();
                const data={
                        user1:{
                                id:user1._id,
                                isAdmin:user1.isAdmin
                             }
                       }
                       
                     const accessToken=jwt.sign(data,process.env.JWT_SECRET,{expiresIn:"5d"});
                //      const {password1,...info}=user1._doc;
                 res.json({user1,accessToken});
                
        } 
        catch (error) {
                res.status(201).json(error.message);
        }

     
       
})


//LOGIN

router.post(
        "/login",
        [
          body("email", "Enter a valid email").isEmail(),
          body("password", "Password can't be blank").exists(),
        ],
        async (req, res) => {
          const errors = validationResult(req);

          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }

          

          try {
              const user1=await User.findOne({email:req.body.email});
              if(!user1)
              {
                
                  return res.status(400).json({error: "Enter the correct credentials"});
              }
              const passwordComapre=await bcrypt.compare(req.body.password,user1.password);
              if(!passwordComapre)
              {
                  return res.status(400).json({error: "Enter the correct credentials"});
              }
             
              const data={
                user1:{
                        id:user1._id,
                        isAdmin:user1.isAdmin
                     }
               }
               
             const accessToken=jwt.sign(data,process.env.JWT_SECRET,{expiresIn:"5d"});
             const {password,...info}=user1._doc;
             res.json({...info,accessToken});
        
      
          } 
          catch (err) {
              console.error(err.message);
              res.status(500).send("Internal server error occured");
          }
        }

      );

module.exports =router;
