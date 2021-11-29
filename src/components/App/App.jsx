// IMPORT REACT / APP STYLES
import React from 'react';
import './App.css';
import axios from 'axios';

import {useState, useEffect} from 'react';

// IMPORT COMPONENTS
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

// APP MODULE
function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    loadGalleryItems();
  },[]);

  function loadGalleryItems() {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('Gallery List:', galleryList);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };



  return (

      <GalleryItem />



  )
}

// EXPORT APP
export default App;