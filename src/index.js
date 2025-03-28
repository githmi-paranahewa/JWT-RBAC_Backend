const express = require('express')
const dotenv =require("dotenv").config();
const dbConnect =require("../src/config/dbConnect")
const authRoutes = require('./routes/authRotes')
const userRoutes = require('./routes/userRoutes')
dbConnect();

const app=express();

//middelware
app.use(express.json());

//routes
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)


const PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`)
})