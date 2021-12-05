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

// Import Router, route
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Import dispatch
import {useDispatch} from 'react-redux';


function App() {

  const dispatch = useDispatch;
  //The 
    useEffect (() => {
      console.log("in useEffect")
      fetchFeedback();
  }, []);

  function fetchFeedback () {
    console.log('in fetchFeedback', fetchFeedback)

    axios({
        method: "GET",
        url: "/api/survey"
    })
      .then((response) => {
          // console.log("In GET response:", response.data);
          dispatch({
            type: 'SET_SURVEY',
            payload: response.data
          })
      })
      .catch((error) => {
          console.log("/api/survey GET error:", error);
      });

  }


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

        <Route exact path="/feelings">
              <Feelings />
        </Route>

        <Route exact path="/feelings">
              <Understanding />
        </Route>

          <Route exact path="/support">
              <Support />
          </Route>
          
          <Route exact path="/comments">
              <Comments />
          </Route>

          <Route exact path="/">
              <ThankYou />
          </Route>
      </Router>
    </div>
  );
}

export default App;
