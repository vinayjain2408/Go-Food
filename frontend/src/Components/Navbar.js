import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-success">
        {/* <div className='container-fuild'> */}
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-Link" to="/">Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to="/login">Login</Link>
              </li>

            </ul>
          </div>
        {/* </div> */}
      </nav>
    </div>
  )
}

export default Navbar