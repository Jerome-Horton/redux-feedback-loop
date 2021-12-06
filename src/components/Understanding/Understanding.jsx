import React from "react";
import {useState} from 'react';

// import useHistory & Dispatch
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


function Understanding () {
    console.log('in Understanding');

    // Set State for event
    const [understanding, setUnderstanding] = useState(0);

    const dispatch = useDispatch();
    let saveHistory = useHistory();


// create handle Button function for next navigation
    const nextButton = (event) => { 
        event.preventDefault()       
        if ( understanding === 0 ) {
            alert('Please SELECT a number between 1-5 to continue')
        }        
        dispatch ({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
    // We need to dispatch from the understanding component to Wireframe 3 (Support)
    // useHistory to navigate to the next dispatch

        }) 
        saveHistory.push('/Support')  
  
        //     else {
        //     alert ( 'Error! Please Select a rating between 1 & 5' );
        // } 
    console.log('SUCCESS!! Understanding nextButton works 🕺');

}
        function previousPage () {
            saveHistory.push('/')
    } 

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
        <h4> Please select from 1 to 5 </h4>
        <p>One (1) = "A Cry For Help!"</p>
        <p>Two (2) = "I don't get it"</p>
        <p>Three (3) = "So So, needs more practice"</p>
        <p>Four (4) = "Solid, I can explain it"</p>
        <p>Five (5) = "I can teach it to a friend"</p>
        <form onSubmit={nextButton}>
        <button onClick={previousPage}>Previous Page</button>
        <input className='App-input'
            type="number"
            min={1}
            max={5}
            placeholder='Select 1 to 5'
            value={understanding}
            onChange={(event) => setUnderstanding(event.target.value)}/>
        <button>Next Page ⇨</button>
        </form>

    </div>
        </>

    )
}




export default Understanding;