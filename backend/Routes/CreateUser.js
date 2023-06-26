const express = require("express");
const routes = express.Router();
const { body, validationResult } = require('express-validator');
const User = require("../models/User");

const bcrypt = require("bcrypt")

routes.post("/createuser", [
  body('email').isEmail().withMessage('Invalid email format'),
  body("name").isLength({ min: 5 }).withMessage('Name must be at least 5 characters long'),
  body("password").isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  
  // try {
  //   const { name, email, password, location } = req.body;
  //   const user = await User.create({ name, email, password, location });
  //   console.log("User created successfully");
  //   res.json({ success: true, user });
  // } 


  const salt = await bcrypt.genSalt(10);
  let securePassword = await bcrypt.hash(req.body.password , salt)
  try{
    await User.create({
      name :req.body.name,
      password:securePassword,
      email:req.body.email,
      location:req.body.location
    }).then(res.json({success:true}))
  }
  
  catch (error) {
    console.error(error);
    res.status(600).json({ success: false, error: 'Failed to create user' });
  }
});
 


routes.post("/loginuser",
[
  body('email').isEmail().withMessage('Invalid email format'),
  body("password").isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
] ,async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email;
  let password = req.body.password;
  try {
    
    let userData = await User.findOne({email ,password});

    if(!userData){
      return res.status(400).json({errors:"try logging with correct credentials"})
    }

    if(req.body.password !== userData.password){
      return res.status(600).json({errors:"try logging with correct credentials"})
    }

    return res.json({success:true})

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to create user' });
  }
});


module.exports = routes;




// const express = require("express");
// const routes = express.Router();
// const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcrypt');
// const User = require("../models/User");

// routes.post("/createuser", [
//   body('email').isEmail().withMessage('Invalid email format'),
//   body("name").isLength({ min: 5 }).withMessage('Name must be at least 5 characters long'),
//   body("password").isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
// ], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
  
//   try {
//     const { name, email, password, location } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
//     const user = await User.create({ name, email, password: hashedPassword, location });
//     console.log("User created successfully");
//     res.json({ success: true, user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Failed to create user' });
//   }
// });

// routes.post("/loginuser", [
//   body('email').isEmail().withMessage('Invalid email format'),
//   body("password").isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
// ], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ errors: "Invalid credentials" });
//     }

//     const isPasswordMatch = await bcrypt.compare(password, user.password);

//     if (!isPasswordMatch) {
//       return res.status(401).json({ errors: "Invalid credentials" });
//     }

//     return res.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Failed to log in' });
//   }
// });

// module.exports = routes;

