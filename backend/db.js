// const express = require('express')
// const mongoose = require("mongoose");
// const server = express()


// const mongoURI = "mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongodb = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     {
//       console.log("Connected to the database");
//       const fetch_data = await mongoose.connection.db.collection("food_item");
//       // console.log(fetch_data)
//       fetch_data.find({}).toArray(function(err, data) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("vinay jain");
//           server.listen(4000 ,()=>{
//             console.log("connection")
//           })
//         }
//       });
//     }
   
//   } catch (err) {
//     console.error("Error connecting to the database:", err);
//   }
// };

// module.exports = mongodb;





const express = require('express');
const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/gofoodmern?retryWrites=true&w=majority";


const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to the database");

    const fetch_data = mongoose.connection.db.collection("food_item");
    const data = await fetch_data.find({}).toArray();

    console.log("vinay jain");
    console.log(data);

  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

module.exports = mongodb;
