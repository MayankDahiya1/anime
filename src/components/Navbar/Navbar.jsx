import React,{useState} from 'react'
import { images } from '../../constants';
import {Link} from "react-router-dom";

import './Navbar.scss';


const Navbar = () => {
 
  return (
    <>
  
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark" style={{backgroundColor:"RGB(21, 34, 50,0.05)"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={images.logo} className="img-fluid app__nav-logo" alt="logo"/></Link>
    <button className="navbar-toggler app_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" aria-current="page" to="/">Anime</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " activeClassName="active" to="/manga">Manga</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" activeClassName="active" to='/about'>About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar;