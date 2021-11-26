// IMPORT REACT / APP STYLES
import React from 'react';
import './App.css';

// IMPORT COMPONENTS
import '../GalleryList/GalleryList.jsx';
import '../GalleryItem/GalleryItem.jsx';

// APP MODULE
function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

// EXPORT APP
export default App;