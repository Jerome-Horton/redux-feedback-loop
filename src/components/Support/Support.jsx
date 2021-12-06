import React from "react";
import {useState} from 'react';

// import useHistory & Dispatch
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


function Support (){
    console.log('in Support');

    const dispatch = useDispatch();
    const saveHistory = useHistory();

// Set State for event
    const [support, setSupport] = useState(0);
// create handle Button function for next navigation
    const nextButton = (event) => {   
        event.preventDefault()     
        // if ( support === 0 ) {
        //     alert('Please SELECT a number between 1-5 to continue')
        // } 
        dispatch ({
            type: 'ADD_SUPPORT',
            payload: support
    // We need to dispatch from the support component to Wireframe 4 (Comments)
    // useHistory to navigate to the next dispatch
            
        }) 
        saveHistory.push('/Comments')

    console.log('SUCCESS!! Support nextButton works 🕺');

}
        function previousPage () {
            saveHistory.push('/Understanding')
} 

    return (

        <>
        <div className='App-header'>
        <h1>Let's Do a Support Check</h1>
        </div>

        <div className = "pageCount">
            <h5>3 of 4 pages</h5>
        </div>


        <div>
        <h1>Do you feel Supported?</h1>
        <h4> Please select from 1 to 5 </h4>
        <p>Zero (1) = "Strongly Disagree!"</p>
        <p>One (2) = "Disagree"</p>
        <p>Two (3) = "Neutral"</p>
        <p>Three (4) = "Agree"</p>
        <p>Four (5) = "Strongly Agree"</p>

        <form onSubmit={nextButton}>
        <button onClick={previousPage}>Previous Page</button>
        <input className='App-input'
            type="number"
            min={0}
            max={5}
            placeholder='Select 1 to 5'
            value={support}
            onChange={(event) => setSupport(event.target.value)}>
        </input>
        <button>Next Page ⇨</button>
        </form>

    </div>
        </>

    )
}




export default Support;