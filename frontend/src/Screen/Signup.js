import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [credentials , setCredential] = useState({name:"",email:"",password:"",geolocation:""})

    const handlesubmit = async(e)=>{
        e.preventDefault();
        const response = fetch("https://localhost:5000/api/createuser" ,{
            method:"POST",
            header:{
                "content=type":"application/json"
            },
            body:JSON.stringify({
                name:credentials.name,
                email:credentials.email,
                password:credentials.password,
                location:credentials.geolocation
            })
        })
    }


    const onchange = (e)=>{
        setCredential({...credentials , [e.target.name]:e.target.value})
    }
  return (
    <>
    <div className='container'>

  
    <form onSubmit={handlesubmit}>
    <div className="mb-3">
    <label for="User Name">User Name</label>
    <input type="text" className="form-control" placeholder="Enter Name" name="name" value={credentials.name} onChange={onchange}/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name="email" value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" name="password" value={credentials.password} id="exampleInputPassword1"  placeholder="Password" />
  </div>
  <div className="mb-3">
    <label for="Address">Address</label>
    <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} placeholder="Enter Address" />
    
  </div>
  {/* <div className="mb-3">
    <label for="location">Location</label>
    <input type="text" className="form-control" name="name" value={credentials.name} placeholder="Enter Name" />
    
  </div> */}
  
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
</form>

</div>
    </>

  )
}

export default Signup