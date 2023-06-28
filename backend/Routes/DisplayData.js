// const express = require("express");
// const router = express.Router();

// router.post("/foodData" , (req,res)=>{
//     try {
//         console.log(global.food_item)
//         console.log(global.foodCategory)
//         res.send([global.food_item ])
//         res.send([ global.foodCategory ])
//     } catch (error) {
//         console.error(error.message);
//         res.send("Server Error")
//     }
// })  




const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    console.log(global.food_item);
    console.log(global.foodCategory);
    res.send([global.food_item, global.foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;



module.exports = router;