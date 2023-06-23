const express = require("express");
const routes = express.Router();
const { body, validationResult } = require('express-validator');
const User = require("../models/User");

routes.post("/createuser", [
  body('email').isEmail().withMessage('Invalid email format'),
  body("name").isLength({ min: 5 }).withMessage('Name must be at least 5 characters long'),
  body("password").isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    const { name, email, password, location } = req.body;
    const user = await User.create({ name, email, password, location });
    console.log("User created successfully");
    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to create user' });
  }
});

module.exports = routes;








// const express = require("express");
// const routes = express.Router();
// const User = require("../models/User");
// const { body, validationResult } = require('express-validator');

// routes.post("/createuser", [
//   body('email').isEmail(),
//   body("name").isLength({ min: 5 }),
//   body("password", "invalid Password").isLength({ min: 5 })
// ], async (req, res) => {


//   const error = validationResult(req);
//   if (!error.isEmpty()) {
//     return res.status(400).json({ errors: error.array() });
//   }

//   try {
//     await User.create({
//       // name: "vinay jain",
//       // email: "vinay123@gmail.com",
//       // password: "12345",
//       // location: "Jaipur"

//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       location: req.body.location
//     });
//     console.log("User created successfully");
//     res.json({ success: true });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false });
//   }
// });

// module.exports = routes;






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