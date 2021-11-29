// IMPORT REACT / APP STYLES
import React from 'react';
import './App.css';
import axios from 'axios';

import {useState, useEffect} from 'react';

// IMPORT COMPONENTS
import GalleryList from '../GalleryList/GalleryList.jsx';

// APP MODULE
function App() {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    loadGalleryItems();
  },[]);

  function loadGalleryItems() {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('GET request from server:', response.data);
      setGallery(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <GalleryList gallery={gallery}/>
  )
}

// EXPORT APP
export default App;