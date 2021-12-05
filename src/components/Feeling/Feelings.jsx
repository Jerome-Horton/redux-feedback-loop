import React from "react";
import {useState} from 'react';
import {useDispatch} from 'react';


function Feelings (){
    console.log('in Feelings');

    const dispatch = useDispatch;
// Set State for event
    const [feelings, setFeelings] = useState(0);
// create handle Button function for next navigation
    const nextButton = () => {        
// Create conditional statements for input field
    if ( feelings === 0 ) {
        alert('Please SELECT a number between 1-5 to continue')
    } 
    else if (feelings > 5){
        alert('Please choose a number from 1-5 to continue')
    dispatch ({
        type: 'ADD_FEELINGS',
        payload: feelings
    }) }
        else {
        alert ( 'Error! Please Select a rating between 1 & 5' );
    } 
    console.log('SUCCESS!! nextButton works 🕺');
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
        <input className='input'
            type="number"
            min={0}
            max={5}
            placeholder='Select 0 to 5'
            value={feelings}
            onChange={(event) => setFeelings(event.target.value)}>
        </input>
        <button onClick={nextButton}>Next Page ⇨</button>

    </div>
        </>

    )
}




export default Feelings;