import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

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
          console.log("In GET response:", response.data);
      })
      .catch((error) => {
          console.log("/api/survey GET error:", error);
      });

  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
