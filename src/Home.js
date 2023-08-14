import React from 'react';
import {Link} from 'react-router-dom';


function Home(){

    console.log("hiii1 gd")
    return (

     
        <div>
             <div className = 'head'>
        <div id = 'WebName'>
        <h1 id = 'logo'> Mr.Shishir Jaipuria </h1>  
        </div> <div id = 'list'>
        <nav>
        <ul>
        <li><Link to="/singh"> Industrialist </Link></li>
        <li><Link to="/vaishali"> Educationist</Link></li>
         <li><Link to="/noida">Position Held </Link></li> 
         <li><Link to ="/ratna">Awards </Link></li>
          <li> Family Tree </li> 
          <li> Some Speeches </li>
           <li> Articles </li>
            <li><Link to="/vaibhav">Social Work</Link> </li> 
         </ul>  
         </nav> 
              </div> 
               </div>
    <div className = 'middle'>
        <div>
        <img src = { require("./image/Shishir-Jaipuria.jpg") }
        alt = "Mr. Shishir Jaipuria"
        height = { 250 }
        width = { 350 }
        />

        </div>  
        
        <div>
        <h1 id='info'> About us </h1> 
        <div id='Content-Border'>
        <p id='des'>Mr.Shishir Jaipuria is the scion of famous Jaipuria family from Kanpur known
        for their contribution towards Education, Media, Textile and Sugar industries.Jaipuria Family’ s interest in education dates back to the Pre Independence Era when Seth Anandram Jaipuria College was set up(1945) in Kolkata.Mr Shishir Jaipuria is carrying forward the legacy of his family and is currently serving as CMD at Ginni Filaments Ltd, an integrated traditional textile company which holds a large share of the technical textile market.
        Currently, Mr.Jaipuria is the Co - chair at FICCI Arise.In the past, he has served as the Managing Director of The Pioneer Limited, a leading Newspaper in Uttar Pradesh.He has been on the Board of National Skill Development Corporation(NSDC), Chairman of Confederation of Indian Textile Industry(CITI), and Northern India Textile Research Association(NITRA), Northern India Textile Mills Association(NITMA), and PHD Chamber of Commerce & Industry(PHDCCI) among others.</p>  
       </div>
        </div> 
        </div> 
              <div className='college'>
                
              </div>
        </div>

        
    );

   
}
export default Home;