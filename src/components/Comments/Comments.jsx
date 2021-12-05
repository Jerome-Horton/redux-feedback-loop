import React from "react";
import {useState} from 'react';


function Comments (){
    console.log('in Comments');

// Set State for event
    const [comments, setComments] = useState('');
// create handle Button function for next navigation
    // const nextButton (){        
// }


    return (

        <>
        <div className='App-header'>
        <h1>Additional Feedback</h1>
        </div>

        <div className = "pageCount">
            <h5>4 of 4 pages</h5>
        </div>


        <div>
        <h3>Do you have any additional comments or suggestions?</h3>
        <input className='App-input'
            type="text"
            value={comments}
            placeholder="comments"
            onChange={(event) => setComments(event.target.value)}>
        </input>
        <button>Next Page ⇨</button>

    </div>
        </>

    )
}




export default Comments;