import React from "react";
import {useState} from 'react';


function Support (){
    console.log('in Support');

// Set State for event
    const [support, setSupport] = useState(0);
// create handle Button function for next navigation
    // const nextButton (){        
// Create conditional statements for input field
    // if ( support = '' )
    // alert ( Error! Please Select a rating Value )
    //}
    // 
// }


    return (

        <>
        <div className='App-header'>
        <h1>Let's Do a Support Check</h1>
        </div>

        <div className = "pageCount">
            <h5>3 of 4 pages</h5>
        </div>


        <div>
        <h1>How well are you being Supported?</h1>
        <h4> Please select from 0 to 5 </h4>
        <p>Zero (0) = "I am not!"</p>
        <p>One (1) = "Barely"</p>
        <p>Two (2) = "To an extent"</p>
        <p>Three (3) = "Somewhat Supported"</p>
        <p>Four (4) = "I feel supported"</p>
        <p>Five (5) = "Extremely Supported"</p>
        <input className='input'
            type="number"
            min={0}
            max={5}
            placeholder='Select 0 to 5'
            value={support}
            onChange={(event) => setSupport(event.target.value)}>
        </input>
        <button>Next Page ⇨</button>

    </div>
        </>

    )
}




export default Support;