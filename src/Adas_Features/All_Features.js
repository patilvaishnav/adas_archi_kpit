import React from "react";
import "../App.css"
import "./All_Features.css"
import AES from "../Use_Case_Digrams/AES_Usecase";
import System_Boundary from "../System_Boundry_Diagram/AES_SystemBoundary";

const All_Features = () =>{
    return(
        <div class="container-fluid justify-content-center" id="body" >
        <h1>All_Adas_Features</h1>
        <AES/>
        <System_Boundary/>
        </div>
    );
};

export default All_Features;