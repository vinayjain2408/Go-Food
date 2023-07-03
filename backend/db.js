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





// const express = require('express');
// const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/gofoodmern?retryWrites=true&w=majority";


// const mongodb = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log("Connected to the database");

//     const fetch_data = await mongoose.connection.db.collection("food_item");
//    fetch_data.find({}).toArray( function(err ,data){
//       if(err) console.log(err)
//       else{
//         global.food_item = data;
//         // console.log(global.food_item)
//       }
//     });

   
//     // console.log(global.food_item)


//     // console.log(data);

//   } catch (err) {
//     console.error("Error connecting to the database:", err);
//   }
// };

// module.exports = mongodb;



// const express = require('express');
// const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongodb = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the database");

//     const fetch_data = mongoose.connection.collection("food_item");
//     fetch_data.find({}).toArray((err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         global.food_item = data;
//         console.log(global.food_item);
//       }
//     });
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
    global.food_item = data;
    // console.log("Food items:", global.food_item);

    const foodCategory = mongoose.connection.db.collection("food_category");
    const catData = await foodCategory.find({}).toArray();
    global.foodCategory = catData;
    // console.log("Food categories:", global.foodCategory);

  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

module.exports = mongodb;







// sir ka code hai yhe

// const express = require('express');
// const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongodb = async () => {
//   await mongoose.connect(mongoURI, { useNewUrlParser: true });
// };

// module.exports = mongodb;









// correct code hai
// const express = require('express');
// const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/gofoodmern?retryWrites=true&w=majority";


// const mongodb = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log("Connected to the database");

//     const fetch_data = mongoose.connection.db.collection("food_item");
//     const data = await fetch_data.find({}).toArray();

//     global.food_item = data
//     // console.log(global.food_item)

//     // console.log("vinay jain");
//     // console.log(data);

//   } catch (err) {
//     console.error("Error connecting to the database:", err);
//   }
// };

// module.exports = mongodb;

















