import React from "react";
import {Link} from "react-router-dom";
import "./landing.css"



export default function LandingPage(){
    return (
    <body className="body">
       
        <div className='landing1'>
            <h1 className='bienvenidos'> </h1>
            <Link to="/home"> 
            <div id="testbutton">

                <button className='botonHome'>HOME</button>
            </div>
            
            </Link>
</div>


      
    </body>
    )
}

//es un link, que cuando haces click te lleva a la otra pagina