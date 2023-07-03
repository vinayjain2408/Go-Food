// const express = require('express')
// const app = express()
// const port = 5000
// const mongodb = require('./db')
// mongodb()



// app.use((req,res,next)=>{
//   res.setHeader("Access-control-Allow-Origin" , "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With , Centent-Type ,Accept"
//   );
//   next()
// }
// )


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.use(express.json())

// app.use("/api" ,require("./Routes/CreateUser"))

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




// // const express = require('express');
// // const app = express();
// // const port = 5000;
// // const mongodb = require('./db');

// // mongodb().then(() => {
// //   app.listen(port, () => {
// //     console.log(`Example app listening on port ${port}`);
// //   });
// // }).catch((error) => {
// //   console.error('Error connecting to the database:', error);
// // });

// // app.get('/', (req, res) => {
// //   res.send('Hello World!');
// // });

// // app.use(express.json());

// // app.use('/api', require('./Routes/CreateUser'));




// // import express from "express";
// // import cors from "cors";
// // import connection from "./db/index.js";
// // import AdminRouter from './routes/admin.js'
// // import UserRouter from './routes/user.js'

// // import mongoose from "mongoose"

// // const connection = mongoose.connect(`mongodb+srv://vinayjain:vinay1234@cluster0.yev5lmn.mongodb.net/?retryWrites=true&w=majority`, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
// // })

// // const app = express();

// // //ALLOW INCOMING REQUESTS FROM THIS ORIGIN AS WELL
// // app.use(cors({ origin: "http://localhost:5174" }));
// // app.use(express.urlencoded())
// // app.use(express.json());

// // //SSR: Server Side Rendered with Pug
// // app.set("view engine", "pug");


// // app.use("/admin", AdminRouter)
// // app.use("/user", UserRouter)



// // const port = process.env.PORT || 8001;

// // connection
// //   .then(() =>
// //     app.listen(port, () => {
// //       console.log(`Server listening on port ${port}`);
// //     })
// //   )
// //   .catch((err) => {
// //     console.log("Error connecting to MongoDB Atlas", err);
// //   });






// const express = require('express');
// const app = express();
// const cors = require("cors")
// const port = 5000;
// const mongodb = require('./db');

// mongodb();
// app.use(cors({origin:"http://localhost:3000"}))

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

// app.use(express.json());

// app.use('/api', require('./Routes/CreateUser'));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });





  // sir ne kuch edit kra h es code me
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const port = 5000;
// const mongodb = require('./db.js');

// mongodb();

// app.use(cors({ origin: 'http://localhost:3000' }));

// app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

// app.use('/api', require('./Routes/CreateUser'));
// app.use('/api', require('./Routes/DisplayData'));

// app.get('/', async (req, res) => {
//   const fetch_data = await mongoose.connection.db.collection("food_item");
//   fetch_data.find({}).toArray(function (err, data) {
//     if (err) {
//       console.log(err);
//     } else {
//       global.food_item = data;
//       console.log(global.food_item);
//     }
//   });
//   // res.send('Hello World!');
// });

// mongodb()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   })
//   .catch((err) => { console.log(err) })




// db file ka code hai 
// async (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Connected");
//     const fetch_data = await mongoose.connection.db.collection("food_item");
//     fetch_data.find({}).toArray(function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         global.food_item = data;
//         console.log(global.food_item);
//       }
//     });
//   }
// }









const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
// const mongodb = require('./db.js');

// mongodb();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));

app.get('/', async (req, res) => {
  const fetch_data = await mongoose.connection.db.collection("food_item");
  fetch_data.find({}).toArray(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      global.food_item = data;
      console.log(global.food_item);
    }
  });
  // res.send('Hello World!');
});

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

