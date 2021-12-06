import React from 'react';
import { useState } from 'react';

// import dispatch
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function HomePage (){

// Establish dispatch
    const dispatch = useDispatch();
// Establish useHistory
    let saveHistory = useHistory();
// Establish useState
        const  [feedback, setFeedback] = useState('');

// Create onClick function to go to next section of Survey
    const startButton = (event) => {
        event.preventDefault()
        

// Implement dispatch when Reducers are set up
        dispatch({
            type: 'START_FEEDBACK'
            // payload: home
    })
//  Also Implement useHistory
    saveHistory.push('/feelings')  
}

    return(
// build a wire frame  with Title and statement
        <div>
            <h2>Click the Button to begin.</h2>
{/* // Button needs onClick functionality */}
            <form>
             <button 
                value={feedback}
                onClick={startButton}
                onChange={(event) => setFeedback(event.target.value)}>Start Feedback ⇨</button>
            </form>
        </div>

    )
}




export default HomePage;