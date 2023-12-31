// import React from 'react'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark  bg-success">
//         {/* <div className='container-fuild'> */}
//           <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item active">
//                 <Link className="nav-Link" to="/">Home </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-Link" to="/login">Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-Link" to="/signup">Sign Up</Link>
//               </li>

//             </ul>
//           </div>
//         {/* </div> */}
//       </nav>
//     </div>
//   )
// }

// export default Navbar






import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        {/* <div className='container-fluid'> */}
        <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item active">
              <Link className="nav-link active fs-5" to="/">Home</Link>
            </li>
           
          </ul>
          <div>
         
            <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
           
            <Link className="btn bg-white text-success mx-1 " to="/signup">Sign Up</Link>
            
          </div>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
