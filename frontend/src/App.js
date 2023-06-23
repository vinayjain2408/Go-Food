import React from 'react'
import Home from './Screen/Home'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Login from './Screen/Login';
// import "../node_modules/bootstrap-dark-5/dist/css/bootstrap"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Signup from './Screen/Signup';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Home />} ></Route>
          
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
        </Routes>
      </BrowserRouter>

    </>

  );
};

export default App