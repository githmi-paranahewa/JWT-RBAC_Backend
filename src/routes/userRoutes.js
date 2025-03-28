const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();
const authorizedRoles = require("../middlewares/roleMiddleware")
//Only admin
router.get("/admin",verifyToken,authorizedRoles("admin"), (req,res)=>{
    res.json({messege:'Welcome Admin'})
})

// admin and manger
router.get("/manager",verifyToken,authorizedRoles("admin", "manager"),(req,res)=>{
    res.json({messege:'Welcome Manager'})
})

//all users
router.get("/user",verifyToken,authorizedRoles("admin", "manager", "user"),(req,res)=>{
    res.json({messege:'Welcome User'})
})


module.exports=router;