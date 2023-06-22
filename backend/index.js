const express = require('express')
const app = express()
const port = 5000
const mongodb = require('./db')
mongodb()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())

app.use("/api" ,require("./Routes/CreateUser"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// const express = require('express');
// const app = express();
// const port = 5000;
// const mongodb = require('./db');

// mongodb().then(() => {
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
//   });
// }).catch((error) => {
//   console.error('Error connecting to the database:', error);
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.use(express.json());

// app.use('/api', require('./Routes/CreateUser'));




// import express from "express";
// import cors from "cors";
// import connection from "./db/index.js";
// import AdminRouter from './routes/admin.js'
// import UserRouter from './routes/user.js'

// import mongoose from "mongoose"

// const connection = mongoose.connect(`mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/?retryWrites=true&w=majority`, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
// })

// const app = express();

// //ALLOW INCOMING REQUESTS FROM THIS ORIGIN AS WELL
// app.use(cors({ origin: "http://localhost:5174" }));
// app.use(express.urlencoded())
// app.use(express.json());

// //SSR: Server Side Rendered with Pug
// app.set("view engine", "pug");


// app.use("/admin", AdminRouter)
// app.use("/user", UserRouter)



// const port = process.env.PORT || 8001;

// connection
//   .then(() =>
//     app.listen(port, () => {
//       console.log(`Server listening on port ${port}`);
//     })
//   )
//   .catch((err) => {
//     console.log("Error connecting to MongoDB Atlas", err);
//   });