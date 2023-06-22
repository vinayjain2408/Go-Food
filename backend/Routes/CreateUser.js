// const express =  require("express")
// const routes = express.Router()
// const User = require("../models/User")

// routes.post("/creatuser" , async(req,res)=>{
//     try {
//         await User.create({
//             name:"vinay jain",
//             email:"vinay123@gmail.com",
//             password:"12345",
//             location:"Jaipur"
//         })
//         console.log("fsl")
//         res.json({success:true})
//     } catch (error) {
//             console.log(error)
//             res.json({success:false})
//     }
// })

// module.exports = routes


const express = require("express");
const routes = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

routes.post("/createuser", async (req, res) => {
  try {
    await User.create({
      // name: "vinay jain",
      // email: "vinay123@gmail.com",
      // password: "12345",
      // location: "Jaipur"

      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location
    });
    console.log("User created successfully");
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = routes;
