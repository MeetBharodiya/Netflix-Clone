var jwt = require('jsonwebtoken');
const dotenv =require('dotenv');
dotenv.config();

const verify =async (req,res,next)=>{
 //get user from the jwt token  and  add id to req object
const authHeader=req.header('auth-token');
if(!authHeader){
        res.status(401).send({error:"please authenticate vadild token"});
}

try {
        const data=jwt.verify(authHeader,process.env.JWT_SECRET);
        // console.log(data);
        req.user=data.user1;
         next();     
} 
catch (error) {
        res.status(401).send({error:"please authenticate vadild token"});

}

}

module.exports= verify