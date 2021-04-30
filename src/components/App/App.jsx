import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import './App.css';


function App() {

  //initialize our state storage variable
  let [pictureArray, setPictureArray] = useState([]);

  // Do this on page load
  useEffect(() => {
    console.log('in useEffect')
    getPictures();
  }, []);

  // GET
  const getPictures = () => {
    axios.get('/gallery').then((response) => {
      console.log('this is the response from getPictures', response.data);

      // take the data from the response and assign it to the famousPeopleArray
      setPictureArray(response.data);
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList pictureArray={pictureArray}/>
        <img src="images/goat_small.jpg"/>
        <img id="cleo" src="images/cleo.jpg"/>
      </div>
    );
}

export default App;
