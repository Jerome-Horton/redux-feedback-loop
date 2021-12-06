import react from 'react';
import {useHistory} from 'react-router-dom';

function ThankYou() {


    const saveHistory = useHistory();

    const nextButton = () => {
        saveHistory.push('/');
    }



    return (
        <>
            <div className='App-header'>
                <h1>The End</h1>
            </div>

            <div>
                
                <h1>Thank you!</h1>
                <h5>We appreciate your feedback.</h5>
                <br></br>
                <form>
                <button onClick={nextButton}>Leave New Feedback</button>
                </form>
            </div>
        </>
    )
}

export default ThankYou;
