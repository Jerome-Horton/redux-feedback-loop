import React from 'react';
import axios from 'axios';
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

//         useEffect (() => {
//             console.log("in useEffect")
//             fetchFeedback();
//         }, []);

//   const fetchFeedback = () => {
//     console.log('in fetchFeedback', fetchFeedback)
//     axios({
//         method: "GET",
//         url: "/api/survey"
//     })
//       .then((response) => {
//           // console.log("In GET response:", response.data);
//       })
//       .catch((error) => {
//           console.log("/api/survey GET error:", error);
//       });
//   }

// Create onClick function to go to next section of Survey
    const startButton = (event) => {
        event.preventDefault()
        

// Implement dispatch when Reducers are set up
        dispatch({
            type: 'START_FEEDBACK'
            // payload: home
    })
// Also Implement useHistory
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