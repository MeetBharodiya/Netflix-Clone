const express =require("express");
const app=express();

const mongoose = require('mongoose');
const authroute =require('./routes/auth')
const userroute =require('./routes/users')
const movieroute =require('./routes/movies')
const Listroute =require('./routes/lists')

//.ENV FILE
const dotenv =require('dotenv');
dotenv.config();

// DATABASE
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Running......")})
.catch((err)=>{console.log(err)});

app.use(express.json());

app.use("/api/auth",authroute);
app.use("/api/user",userroute);
app.use("/api/movie",movieroute);
app.use("/api/list",Listroute);

// BACKEND
app.listen(8800,()=>{
        console.log("backend server is running...");
})



