import React from "react";
import {useState} from 'react';


function Understanding (){
    console.log('in Understanding');

// Set State for event
    const [understanding, setUnderstanding] = useState(0);
// create handle Button function for next navigation
    // const nextButton (){        
// Create conditional statements for input field
    // if ( understanding = '' )
    // alert ( Error! Please Select a rating Value )
    //}
    // 
// }


    return (

        <>
        <div className='App-header'>
        <h1>Let's Do a Knowledge Check</h1>
        </div>

        <div className = "pageCount">
            <h5>2 of 4 pages</h5>
        </div>


        <div>
        <h1>How well are you understanding the material?</h1>
        <h4> Please select from 0 to 5 </h4>
        <p>Zero (0) = "A Cry For Help!"</p>
        <p>One (1) = "It is not clicking at all"</p>
        <p>Two (2) = "With help I can do it"</p>
        <p>Three (3) = "So So, needs more practice"</p>
        <p>Four (4) = "Solid, I can explain it"</p>
        <p>Five (5) = "I can teach it to a friend"</p>
        <input className='input'
            type="number"
            min={0}
            max={5}
            placeholder='Select 0 to 5'
            value={understanding}
            onChange={(event) => setUnderstanding(event.target.value)}>
        </input>
        <button>Next Page ⇨</button>

    </div>
        </>

    )
}




export default Understanding;