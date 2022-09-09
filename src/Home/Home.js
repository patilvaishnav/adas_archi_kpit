import React from "react";
import "../App.css"
import "./Home.css"

const Home = () =>{
  return(
    <div class="container-fluid" id="homec">

    <h2 class="lead text-left">What Is ADAS?</h2>
            <p class="lead text-left">Advanced driver-assistance systems (ADAS) are electronic systems in a vehicle that use advanced technologies to assist the driver. They can include many active safety features, and often the terms “ADAS” and “active safety” are used interchangeably.

ADAS uses sensors in the vehicle such as radar and cameras to perceive the world around it, and then either provides information to the driver or takes automatic action based on what it perceives.

ADAS features that provide information will most commonly include “warning” in the name. For example, if the vehicle detects an object such as another vehicle or a cyclist in a location where the driver may not be able to see them, features such as blind spot warning or rear backup warning will alert the driver. Likewise, if the system determines that the vehicle is drifting out of its lane, it could activate lane departure warning to alert the driver.

When these detections are coupled with a technology that takes action beyond a simple warning, ADAS becomes an active safety system – meaning the vehicle will “actively” control braking or steering. These features most commonly include “assistance” in the name.

These features can dramatically increase the effectiveness of ADAS to save lives. For example, the Insurance Institute for Highway Safety found that forward collision warning systems lower front-to-rear crashes by 27%; when the system also includes the ability to automatically brake, that number nearly doubles. Similarly, rearview cameras reduce backing crashes by 17%, but rear automatic braking lowers them by a massive 78%.

ADAS also includes propulsion functions such as adaptive cruise control, which varies speed to ensure that a vehicle maintains a safe distance from the vehicle in front of it. More sophisticated ADAS features can even manage steering and propulsion without the need for hands-on control from the driver under certain conditions, such as highway driving or stop-and-go traffic. These are typically referred to as Level 2+ active safety systems, and represent some of the most advanced functionality currently available on the market.</p>
         
          
  </div>

  );
}


export default Home;