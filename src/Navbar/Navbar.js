import React from "react";
import "../App.css"
import "./Navbar.css"

const Navbar = () =>{
  return(
<nav id="nav" class="navbar navbar-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="./img/logo1.png" alt="Bootstrap" width="120" height="40"></img>
    </a>
    <ul class="nav justify-content-end">
    <li class="nav-item">
    <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active text-light" aria-current="page" href="#">Adas Architecture</a>
  </li>
  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" data-toggle="dropdown" onClick="dropdown" role="button">
            ADAS Features
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Highway Driving Assist</a></li>
            <li><a class="dropdown-item" href="#">Automotive Emergency Steer</a></li>
            <li><a class="dropdown-item" href="#">Lane Centering Assist</a></li>
            <li><a class="dropdown-item" href="#">Urban Chauffeur</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">More..</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light"  data-toggle="dropdown" onClick="dropdown" role="button">
            ADAS ELements
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">HMI</a></li>
            <li><a class="dropdown-item" href="#">Enviromental Data</a></li>
            <li><a class="dropdown-item" href="#">Vehicle System</a></li>
            <li><a class="dropdown-item" href="#">In-Vehicle Sensors</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">More...</a></li>
          </ul>
        </li>
        
  <li class="nav-item">
    <a class="nav-link text-light">About Us</a>
  </li>
</ul>
  </div>
</nav>

  );
}


export default Navbar;