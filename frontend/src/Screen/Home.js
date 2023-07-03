import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import '../Home.css';
import axios from 'axios';

function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [Search, setSearch] = useState('');

  useEffect(async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/foodData',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const responseData = response.data;
      setFoodCat(responseData[1]);
      setFoodItem(responseData[0]);

      // console.log(responseData[0], responseData[1]);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: 'contain !important' }}
        >
          {/* Rest of the carousel code */}
        </div>
      </div>

      <div className="container m-3">
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div className="row mb-3" key={data._id}>
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {foodItem.length > 0 ? (
                foodItem
                  .filter(
                    (item) =>
                      item.CategoryName === data.CategoryName &&
                      item.name.toLowerCase().includes(Search.toLowerCase())
                  )
                  .map((filterItem) => (
                    <div
                      className="col-12 col-md-6 col-lg-3 m-3"
                      key={filterItem._id}
                    >
                      <Card
                        foodName={filterItem.name}
                        option={filterItem.options[0]}
                        imgSrc={filterItem.img}
                      />
                    </div>
                  ))
              ) : (
                <div>NO such Data Found</div>
              )}
            </div>
          ))
        ) : (
          ''
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;














// import React, { useEffect, useState } from 'react'
// import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'
// import Card from '../Components/Card'
// import "../Home.css"
// import axios from "axios"
// // import Caraousal from '../Components/Caraousal'

// function Home() {

//     const [foodCat, setFoodCat] = useState([])
//     const [foodItem, setFoodItem] = useState([])
//     const [Search , setSearch] = useState('')

//     // const loadData = async () => {
//     //     let response = await fetch("http://localhost:5000/api/foodData", {
//     //         method: "POST",
//     //         Headers: {
//     //             "Content-Type": "application/json"
//     //         }
//     //     })
//     //     response = await response.json();

//     //     setFoodCat(response[1])
//     //     setFoodItem(response[0])

//     //     // console.log(response[0], response[1])

//     // }

//     try {
//         const response = await axios.post("http://localhost:5000/api/foodData", {}, {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         });
    
//         const responseData = response.data;
//         setFoodCat(responseData[1]);
//         setFoodItem(responseData[0]);
    
//         // console.log(responseData[0], responseData[1]);
//       } catch (error) {
//         // Handle error
//         console.error(error);
//       }


//     useEffect(() => {
//         loadData()
//     }, [])

//     return (
//         <div>
//             <Navbar />
//            <div>
//            {/* <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit : "contain !important"}}>
//                 <div className="carousel-inner" id='carousal'>
//                     <div className='carousel-caption' style={{zIndex:"10"}}>
//                         <div class="d-flex justify-content-center">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={Search} onChange={(e)=>{setSearch(e.target.value)}}/>

//                         </div>
//                     </div>
//                     <div className="carousel-item active">
//                         <img src="https://assets.epicurious.com/photos/55f72d733c346243461d496e/1:1/w_2560%2Cc_limit/09112015_15minute_pastasauce_tomato.jpg" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://recipes.timesofindia.com/thumb/84784534.cms?width=1000&height=700" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div> */}



// <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
//   <div className="carousel-inner" id="carousal">
//     <div className="carousel-caption" style={{ zIndex: "10" }}>
//       <div className="d-flex justify-content-center">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={Search} onChange={(e) => { setSearch(e.target.value) }} />
//       </div>
//     </div>
//     <div className="carousel-item active">
//       <img src="https://assets.epicurious.com/photos/55f72d733c346243461d496e/1:1/w_2560%2Cc_limit/09112015_15minute_pastasauce_tomato.jpg" className="d-block w-100 h-80 carousel-image" style={{ filter: "brightness(30%)" }} alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" className="d-block w-100 h-80 carousel-image" style={{ filter: "brightness(30%)" }} alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="https://recipes.timesofindia.com/thumb/84784534.cms?width=1000&height=700" className="d-block w-100 h-80 carousel-image" style={{ filter: "brightness(30%)" }} alt="..." />
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>

//            </div>





//             <div className='container m-3'>
//                 {
//                     foodCat !== []
//                         ? foodCat.map((data) => {
//                             return (
//                                 <div className='row mb-3'>
//                                     <div key={data._id} className='fs-3 m-3'>
//                                         {data.CategoryName}
//                                     </div>
//                                     <hr />
//                                     {
//                                         foodItem !== []
//                                             ?
//                                             foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(Search.toLocaleLowerCase())))
//                                                 .map(filterItem => {
//                                                     return (
//                                                         <div className='col-12 col-md-6 col-lg-3 m-3' key={filterItem._id}>
//                                                             <Card 
//                                                             foodName = {filterItem.name}
//                                                             option = {filterItem.options[0]}
//                                                             imgSrc = {filterItem.img}
//                                                             />
//                                                         </div>
//                                                     )
//                                                 })
//                                             : <div>NO such Data Found</div>
//                                     }
//                                 </div>
//                             )
//                         }) : ""

//                 }


//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default Home
