// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios"

// function Signup() {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     geolocation: ""
//   });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await axios("https://localhost:5000/api/createuser", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json" // Corrected header key
  //     },
  //     body: JSON.stringify({
  //       name: credentials.name,
  //       email: credentials.email,
  //       password: credentials.password,
  //       geolocation: credentials.geolocation // Corrected property name
  //     })
  //   });
  //   const json = await response.json();
  //   console.log(json);

  //   if (!json.success) {
  //     alert("Enter Valid Data");
  //   }
  // };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name">User Name</label>
//           <input type="text" className="form-control" placeholder="Enter Name" name="name" value={credentials.name} onChange={onChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input type="email" className="form-control" name="email" value={credentials.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
//           <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" className="form-control" name="password" value={credentials.password} id="password" placeholder="Password" onChange={onChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="geolocation">Address</label>
//           <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} placeholder="Enter Address" onChange={onChange} />
//         </div>
//         <button type="submit" className="btn btn-success">Submit</button>
//         <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
//       </form>
//     </div>
//   );
// }

// export default Signup;





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import axios from "axios";

// function Signup() {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     geolocation: ""
//   });

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post("http://localhost:5000/api/createuser", {
//   //       name: credentials.name,
//   //       email: credentials.email,
//   //       password: credentials.password,
//   //       geolocation: credentials.geolocation
//   //     });
//   //     console.log(response.data);

//   //     if (!response.data.success) {
//   //       alert("Enter Valid Data");
//   //     }
//   //   }
//   //    catch (error) {
//   //     console.log(error);
//   //   }
//   // };


//   const handleSubmit = async event=>{
//     event.preventDefault();
//     // AuthContext.login();
//     const data = new FormData(event.target);
//     // console.log(data.get('email'));
//     // console.log(data.get('name'));
//     // console.log(data.get('password'));
//     // if(this.state.isLogin){}
//     // else{
//     try{
//        const response = await fetch('http://localhost:5000/api/createuser',
//         {
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(credentials)
//         });
//             const responseData = await response.json();
//             console.log(responseData);
//     }
//     catch(err){
//         console.log(err);
    
// }
// }





//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name">User Name</label>
//           <input type="text" className="form-control" placeholder="Enter Name" name="name" value={credentials.name} onChange={onChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input type="email" className="form-control" name="email" value={credentials.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
//           <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" className="form-control" name="password" value={credentials.password} id="password" placeholder="Password" onChange={onChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="geolocation">Address</label>
//           <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} placeholder="Enter Address" onChange={onChange} />
//         </div>
//         <button type="submit" className="btn btn-success">Submit</button>
//         <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
//       </form>
//     </div>
//   );
// }

// export default Signup;






// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Signup() {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     geolocation: ""
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/createuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData);
//       } else {
//         console.log('Request failed with status:', response.status);
//       }
//     } catch (err) {
//       console.log('Error:', err);
//     }
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name">User Name</label>
//           <input type="text" className="form-control" placeholder="Enter Name" name="name" value={credentials.name} onChange={onChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input type="email" className="form-control" name="email" value={credentials.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
//           <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" className="form-control" name="password" value={credentials.password} id="password" placeholder="Password" onChange={onChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="geolocation">Address</label>
//           <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} placeholder="Enter Address" onChange={onChange} />
//         </div>
//         <button type="submit" className="btn btn-success">Submit</button>
//         <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
//       </form>
//     </div>
//   );
// }

// export default Signup;





// 1 more code 




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/createuser", credentials);
      console.log(response.data);

      if (!response.data.success) {
        alert("Enter Valid Data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">User Name</label>
          <input type="text" className="form-control" placeholder="Enter Name" name="name" value={credentials.name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" name="email" value={credentials.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" value={credentials.password} id="password" placeholder="Password" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="geolocation">Address</label>
          <input type="text" className="form-control" name="location" value={credentials.location} placeholder="Enter Address" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
        <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
      </form>
    </div>
  );
}

export default Signup;




