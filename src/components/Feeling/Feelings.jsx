import React from "react";
import {useState} from 'react';
// import useHistory & Dispatch
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


function Feelings (){


    const dispatch = useDispatch();
    let saveHistory = useHistory();
// Set State for event
    const [feelings, setFeelings] = useState(0);


// create handle Button function for next navigation
    const nextButton = (event) => {   
        event.preventDefault()
// Create conditional statements for input field
    // if ( feelings === 0 ) {
    //     alert('Please SELECT a number between 1-5 to continue')
    // } 
    // else
    dispatch ({
        type: 'ADD_FEELINGS',
        payload: feelings
// We need to dispatch from the feelings component to Wireframe 2 (understanding)
// useHistory to navigate to the next dispatch
        })
        saveHistory.push('/Understanding')   
    // }
    //     else {
    //     alert ( 'Error! Please Select a rating between 1 & 5' );
    // } 
    console.log('SUCCESS!! Feelings nextButton works 🕺');

}

    function previousPage () {
        saveHistory.push('/')
    }   



    return (

        <>
        <div className='App-header'>
        <h1>A Quick Check In</h1>
        </div>

        <div className = "pageCount">
            <h5>1 of 4 pages</h5>
        </div>


        <div>

        <h1>How are you feeling today?</h1>
        <h4> Please select from 1 to 5 </h4>
        <p>One (1) = The Worst</p>
        <p>Two (2) = Bad</p>
        <p>Three (3) = Okay</p>
        <p>Four (4) = Good</p>
        <p>Five (5) = Excellent</p>
        
        <form onSubmit={nextButton}>
        <button onClick={previousPage}>Previous Page</button>
        <input className='App-input'
            type="number"
            min={1}
            max={5}
            placeholder='Select 1 to 5'
            value={feelings}
            onChange={(event) => {setFeelings(event.target.value)}}/>
        
        <button>
            Next Page ⇨</button>
        </form>

        </div>
        </>

    )
}




export default Feelings;