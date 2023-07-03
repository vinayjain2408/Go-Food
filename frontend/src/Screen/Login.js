// import React, { useState } from 'react';
// import { Link ,useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//   const navigate = useNavigate()

//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
  
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/loginuser", credentials);
//       console.log(response.data);

//       if (!response.data.success) {
//         alert("Enter Valid Data");
//       }
//       if (response.data.success) {
//         navigate("/")
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };
//   return (
//     <div>
//       <div className='container'>
//       <form onSubmit={handleSubmit}>
       
//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input type="email" className="form-control" name="email" value={credentials.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
//           {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" className="form-control" name="password" value={credentials.password} id="password" placeholder="Password" onChange={onChange} />
//         </div>

//         <button type="submit" className="btn btn-success">Submit</button>
//         <Link to="/login" className='m-3 btn btn-danger'>I'm a new User</Link>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default Login





// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//   const navigate = useNavigate();

//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: ""
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/loginuser", credentials);
//       console.log(response.data);

//       if (response.data.success) {

//         localStorage.setItem("token",response.token)
//        console.log( localStorage.setItem("token"))
//         navigate("/");
//       } else {
//         alert("Enter Valid Data");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input type="email" className="form-control" name="email" value={credentials.email} id="email" placeholder="Enter email" onChange={onChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" className="form-control" name="password" value={credentials.password} id="password" placeholder="Password" onChange={onChange} />
//         </div>
//         <button type="submit" className="btn btn-success">Submit</button>
//         <Link to="/signup" className='m-3 btn btn-danger'>I'm a new User</Link>
//       </form>
//     </div>
//   );
// }

// export default Login;






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/loginuser', credentials);
      console.log(response.data);

      if (response.data.success) {
        // localStorage.setItem('token', response.data.token); // Store the token in localStorage
        // console.log(localStorage.setItem('token')); // Store the token in localStorage
        
        navigate('/');
      } else {
        alert('Enter Valid Data');
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
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={credentials.email}
            id='email'
            placeholder='Enter email'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            value={credentials.password}
            id='password'
            placeholder='Password'
            onChange={onChange}
          />
        </div>
        <button type='submit' className='btn btn-success'>
          Submit
        </button>
        <Link to='/signup' className='m-3 btn btn-danger'>
          I'm a new User
        </Link>
      </form>
    </div>
  );
}

export default Login;
