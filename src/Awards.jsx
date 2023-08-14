import React from 'react'
 

import './image/Award.JPG';


const Awards = () => {
  // console.log("hhhhhhhh")  
    return ( 
        <div>
        <h1 className='AwardList'> Awards</h1>
         <div className='flex-container1'>
                 <div>
                     <img src={ require("./image/Award.JPG") } alt="AwardPhoto1" height={600} width={600} />   
                     <p className='NameOfAchievements'> Lifetime Achievement Award at Education World School Ranking Awards, 2022</p>
                 </div>
                 
                 
         </div>

       
         </div>
    )
}

export default Awards;