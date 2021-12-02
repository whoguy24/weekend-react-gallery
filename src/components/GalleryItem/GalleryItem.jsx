import { useState } from 'react';

function GalleryItem ({galleryItem, handleLikeClick}) {

    const [descriptionActive, setDescriptionActive] = useState(true);

    const handleImageClick = () => {
        setDescriptionActive(!descriptionActive)
        console.log(descriptionActive);






      }

    return (
        <div className="gallery-item">
            { descriptionActive === true &&
                <img src={galleryItem.filepath} onClick={handleImageClick}/>
            }
            { descriptionActive === false &&
                <p onClick={handleImageClick}>{galleryItem.description}</p>
            }
            <button className ="button-like" onClick = { () => {handleLikeClick(galleryItem)}}>Click me</button>
            <p>{galleryItem.likes} like this.</p>
        </div>
    )

}

export default GalleryItem;