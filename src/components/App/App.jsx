import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Import Components
import HomePage from '../HomePage/HomePage'
import Feelings from '../Feeling/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Review from '../Review/Review';

// Import Router, route
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Import dispatch
// import {useDispatch} from 'react-redux';


function App() {

  // const dispatch = useDispatch;
  // //The 
  //   useEffect (() => {
  //     console.log("in useEffect")
  //     fetchFeedback();
  // }, []);

  // const fetchFeedback = () => {
  //   console.log('in fetchFeedback', fetchFeedback)

  //   axios({
  //       method: "GET",
  //       url: "/api/survey"
  //   })
  //     .then((response) => {
  //         // console.log("In GET response:", response.data);
  //         dispatch({
  //           type: 'SET_SURVEY',
  //           payload: feedback
  //         })
  //     })
  //     .catch((error) => {
  //         console.log("/api/survey GET error:", error);
  //     });

  // }


  return (
    <div className='App'>
        <header className='App-header'>
            <h1 className='App-title'>Welcome</h1>
            <h3>Submit Your Feedback</h3>
          {/* <h4>Don't forget it!</h4> */}
        </header>
{/* import components in order */}
      <Router>
        <Route exact path="/">
              <HomePage />
        </Route>

        <Route exact path="/Feelings">
              <Feelings />
        </Route>

        <Route exact path="/Understanding">
              <Understanding />
        </Route>

          <Route exact path="/Support">
              <Support />
          </Route>
                    
          <Route exact path="/Comments">
              <Comments />
          </Route>

          <Route exact path="/Review">
            <Review/>
          </Route>

          <Route exact path="/ThankYou">
              <ThankYou />
          </Route>
      </Router>
    </div>
  );
}

export default App;
