import {useState} from 'react';

function GalleryItem () {

    const [likes, setLikeCount] = useState(0);
    // const [displayDescription, toggleDescription] = useState(false);

    return (
        <div className="gallery-item">
            <img src="images/goat_small.jpg"/>
            <button className ="button-like">Click me</button>
            <p>{likes} People love this!</p>
        </div>
    )
}

export default GalleryItem;