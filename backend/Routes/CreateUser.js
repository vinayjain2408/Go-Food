const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

// MongoDB Atlas connection setup
mongoose
  .connect("mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/gofoodmern?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB Atlas:", error);
  });

// Define the user schema and model using Mongoose
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

// Middleware to parse JSON data
app.use(express.json());

// Route to create a new user
app.post(
  "/createuser",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("name")
      .isLength({ min: 5 })
      .withMessage("Name must be at least 5 characters long"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password } = req.body;

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      console.log("User created successfully");
      res.json({ success: true, user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Failed to create user" });
    }
  }
);

// Route to log in a user
app.post(
  "/loginuser",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: "Invalid email" });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ errors: "Invalid password" });
      }

      const token = jwt.sign({ userId: user._id }, "your-secret-key", {
        expiresIn: "1h",
      });

      return res.json({ success: true, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Failed to log in" });
    }
  }
);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});






// const express = require("express");
// const routes = express.Router();
// const { body, validationResult } = require('express-validator');
// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const jwtSecret = "MYnameisVinayJainIlearningmernstackdeveloper";

// // Route to create a new user
// routes.post(
//   "/createuser",
//   [
//     body('email').isEmail().withMessage('Invalid email format'),
//     body("name").isLength({ min: 5 }).withMessage('Name must be at least 5 characters long'),
//     body("password").isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const salt = await bcrypt.genSalt(10);
//       const securePassword = await bcrypt.hash(req.body.password, salt);

//       const user = await User.create({
//         name: req.body.name,
//         password: securePassword,
//         email: req.body.email,
//         location: req.body.location
//       });

//       console.log("User created successfully");
//       res.json({ success: true, user });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, error: 'Failed to create user' });
//     }
//   }
// );

// // Route to log in a user
// routes.post(
//   "/loginuser",
//   [
//     body('email').isEmail().withMessage('Invalid email format'),
//     body("password").isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       const userData = await User.findOne({ email });
//       if (!userData) {
//         return res.status(400).json({ errors: "Invalid email" });
//       }

//       const pwdCompare = await bcrypt.compare(password, userData.password);
//       if (!pwdCompare) {
//         return res.status(400).json({ errors: "Invalid password" });
//       }

//       const token = jwt.sign({ userId: userData.id }, jwtSecret, { expiresIn: '1h' });
//       return res.json({ success: true, token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, error: 'Failed to log in' });
//     }
//   }
// );

// module.exports = routes;





// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();

// // MongoDB configuration and connection setup

// // Register a new user
// app.post('/createuser', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save the user to the database (MongoDB)
//     // Your code for saving the user goes here

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to register user' });
//   }
// });

// // User login and JWT generation
// app.post('/loginuser', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Retrieve the user from the database (MongoDB)
//     // Your code for retrieving the user goes here

//     // Compare the password hash
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (passwordMatch) {
//       // Generate a JWT token
//       const token = jwt.sign({ userId: user._id }, 'your-secret-key');

//       res.status(200).json({ token });
//     } else {
//       res.status(401).json({ error: 'Invalid username or password' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to login' });
//   }
// });

// // Protected route example
// app.get('/loginuser', verifyToken, (req, res) => {
//   // Authorization middleware - verify the JWT token
//   jwt.verify(req.token, 'your-secret-key', (err, authData) => {
//     if (err) {
//       res.status(403).json({ error: 'Invalid token' });
//     } else {
//       // Access granted - perform the protected operation
//       res.status(200).json({ message: 'Protected route accessed successfully', authData });
//     }
//   });
// });

// // Verify JWT token - Middleware function
// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers.authorization;

//   if (typeof bearerHeader !== 'undefined') {
//     const bearerToken = bearerHeader.split(' ')[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     res.status(403).json({ error: 'Unauthorized' });
//   }
// }

// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });










// Install required packages: express, bcrypt, jsonwebtoken, mongoose

// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');

// const app = express();

// // MongoDB Atlas connection setup
// mongoose.connect("mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/gofoodmern?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB Atlas:', error);
//   });

// // Define the user schema and model using Mongoose
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String
// });

// const User = mongoose.model('User', userSchema);

// // Register a new user
// app.post('/createuser', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user instance
//     const newUser = new User({
//       username,
//       password: hashedPassword
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to register user' });
//   }
// });

// // User login and JWT generation
// app.post('/loginuser', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find the user from the database based on the username
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(401).json({ error: 'Invalid username or password' });
//     }

//     // Compare the password hash
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (passwordMatch) {
//       // Generate a JWT token
//       const token = jwt.sign({ userId: user._id }, 'your-secret-key');

//       res.status(200).json({ token });
//     } else {
//       res.status(401).json({ error: 'Invalid username or password' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to login' });
//   }
// });

// // Protected route example
// app.get('/protected', verifyToken, (req, res) => {
//   // Authorization middleware - verify the JWT token
//   jwt.verify(req.token, 'your-secret-key', (err, authData) => {
//     if (err) {
//       res.status(403).json({ error: 'Invalid token' });
//     } else {
//       // Access granted - perform the protected operation
//       res.status(200).json({ message: 'Protected route accessed successfully', authData });
//     }
//   });
// });

// // Verify JWT token - Middleware function
// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers.authorization;

//   if (typeof bearerHeader !== 'undefined') {
//     const bearerToken = bearerHeader.split(' ')[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     res.status(403).json({ error: 'Unauthorized' });
//   }
// }

// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });











// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');

// const app = express();
// app.use(express.json()); // Middleware to parse JSON request bodies

// // MongoDB Atlas connection setup
// mongoose.connect("mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/gofoodmern?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB Atlas:', error);
//   });

// // Define the user schema and model using Mongoose
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String
// });

// const User = mongoose.model('User', userSchema);

// // Register a new user
// app.post('/createuser', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user instance
//     const newUser = new User({
//       username,
//       password: hashedPassword
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to register user' });
//   }
// });

// // User login and JWT generation
// app.post('/loginuser', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find the user from the database based on the username
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(401).json({ error: 'Invalid username or password' });
//     }

//     // Compare the password hash
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (passwordMatch) {
//       // Generate a JWT token
//       const token = jwt.sign({ userId: user._id }, 'your-secret-key');

//       res.status(200).json({ token });
//     } else {
//       res.status(401).json({ error: 'Invalid username or password' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to login' });
//   }
// });

// // Protected route example
// app.get('/protected', verifyToken, (req, res) => {
//   // Authorization middleware - verify the JWT token
//   jwt.verify(req.token, 'your-secret-key', (err, authData) => {
//     if (err) {
//       res.status(403).json({ error: 'Invalid token' });
//     } else {
//       // Access granted - perform the protected operation
//       res.status(200).json({ message: 'Protected route accessed successfully', authData });
//     }
//   });
// });

// // Verify JWT token - Middleware function
// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers.authorization;

//   if (typeof bearerHeader !== 'undefined') {
//     const bearerToken = bearerHeader.split(' ')[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     res.status(403).json({ error: 'Unauthorized' });
//   }
// }

// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });
