import React from "react";
import "../App.css"
import "./All_Features.css"

const All_Features = () => {
    return (  
        <div class="container-fluid" id="bodyf" >
        <div id="title"><p class="text-start text-white"><h2>All Features</h2></p></div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-start">Highway Driving Assist</h5>
                    <p class="card-text text-start">Highway Driving Assist is a Level 2 advanced driving assistance system (ADAS) designed for limited-access highways.</p>
                    <a href="#" class="btn btn-primary">more..</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-start">Automotive Emergency Steer</h5>
                    <p class="card-text text-start">Automatic emergency steering uses sensors to detect potential collisions with a vehicle ahead and automatically steers the vehicle to avoid a collision or make it less severe.</p>
                    <a href="/automatic_emergency_steering" class="btn btn-primary">more..</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-start">Lane Centering Assist</h5>
                    <p class="card-text text-start">Lane Centering Assist keeps the vehicle centered within the lane it is traveling and gives warning when vehicle drift out of lane.</p>
                    <a href="#" class="btn btn-primary">more..</a>
                </div>
            </div>
            <div class="card"id="">
                <div class="card-body">
                    <h5 class="card-title text-start">Urban Chauffeur</h5>
                    <p class="card-text text-start">Urban chauffeur is level 3 ADAS feature which takes lateral and longitudinal control of ego-vehicle in Urban roads.</p>
                    <a href="/Uraban_chauffer" class="btn btn-primary">more..</a>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
       
        
    );
};

export default All_Features;