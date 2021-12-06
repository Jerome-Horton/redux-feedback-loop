import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import axios from 'axios';



function Review() {

    const comments = useSelector((store) => store.commentsReducer); // selects from store state
    const feeling = useSelector((store) => store.feelingsReducer); // selects from store state
    const support = useSelector((store) => store.supportReducer); // selects from store state
    const understanding = useSelector((store) => store.understandingReducer); // selects from store state


    let saveHistory = useHistory();

    function onSubmitButton(event) {
        event.preventDefault();
        //here the data is being sent to the DB through axios
        axios({
            method: "POST",
            url: '/survey',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments:comments
            },
        }).then((response) => {
            console.log('in POST /route', response);
        }).catch((error) => {
            console.log("error from the POST /survey", error);
        })
        //make sure history went to the next page 
        saveHistory.push('/ThankYou')
    }

    function previousPage () {
        saveHistory.push('/Comments')
}


    return (
        <div>
            <h1>Review</h1>
            <form onSubmit={onSubmitButton}>
                <p>Feeling: {feeling}</p>
                <p>Understanding:{understanding}</p>
                <p>Support: {support}</p>
                <p>Comments: {comments}</p>
            <button>Submit</button>
            <button onClick={previousPage}>Previous Page</button>
            </form>
        </div>


    )

}

export default Review;