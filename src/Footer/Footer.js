import React from "react";
import "../App.css"
import "./Footer.css"

const Footer = () =>{
  return(
    <div>
        <section id="footerup" class="d-flex justify-content-center justify-content-lg-between ">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
    <ul class="navb col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted " href="https://www.facebook.com/KPITTechnologies/"><img class="bi" width="30" height="30" src="./img/fb_logo.png"></img></a></li>
            <li class="ms-3"><a class="text-muted " href="https://www.instagram.com/kpittechnologies/"><img class="bi" width="30" height="30" src="./img/insta-logo.png"></img></a></li>
            <li class="ms-3"><a class="text-muted " href="https://twitter.com/kpit?lang=en"><img class="bi" width="30" height="30" src="./img/twitter-logo.png"></img></a></li>
          </ul>
    </div>
  </section>
    <div class="container-fluid" id="footer">
  <footer id="footerdown" class="row text-start">
    <div class="col-5">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
      <img src="./img/logo1.png" alt="Bootstrap" width="120" height="40"></img>
      </a>
      <p className="text-light fs-6">KPIT Technologies is a global partner to the automotive and mobility ecosystem for making software-defined vehicles a reality. It is a leading independent software development and integration partner helping mobility leapfrog towards a clean, smart, and safe future. With 9000+ automobelievers across the globe specializing in embedded software, AI, and digital solutions, KPIT accelerates its clients’ implementation of next-generation technologies for the future mobility roadmap. With engineering centers in Europe, the USA, Japan, China, Thailand, and India, KPIT works with leaders in automotive and mobility and is present where the ecosystem is transforming.</p>
    </div>

    <div class="col">

    </div>

    <div class="col">
      <h5 id="footerheading">Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div class="col">
      <h5 id="footerheading">Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div class="col">
      <h5 id="footerheading" >Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>
  </footer>
   
  </div>
  </div>
  );
}


export default Footer;