import React from "react";
import {useState} from 'react';

// import useHistory & Dispatch
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


function Comments (){
    console.log('in Comments');


    const dispatch = useDispatch();
    let saveHistory = useHistory();

// Set State for event
    const [comments, setComments] = useState('');
// create handle Button function for next navigation
    const nextButton = (event) => {  
        event.preventDefault()
        if(comments === ''){
            alert('Are you sure?')
        } else {
            // We need to dispatch from the comments component to index file.
    // useHistory to navigate to the next dispatch
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })
        saveHistory.push('/Review')
    }
    console.log('SUCCESS!! Comments nextButton works 🕺');
}

        function previousPage () {
            saveHistory.push('/Support')
}


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

        <form onSubmit={nextButton}>
{/* previous page button works smoothly */}
        <button onClick={previousPage}>Previous Page</button>
        <input className='App-input'
            type="text"
            value={comments}
            placeholder="comments"
            onChange={(event) => setComments(event.target.value)}>
        </input>
        <button onClick={nextButton}>Next Page ⇨</button>
        </form>

    </div>
        </>

    )
}




export default Comments;