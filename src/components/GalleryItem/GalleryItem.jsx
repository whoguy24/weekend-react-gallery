function GalleryItem ({galleryItem, handleLikeClick}) {

    return (
        <div className="gallery-item">
            <img src={galleryItem.filepath}/>
            <button className ="button-like" onClick={handleLikeClick}>Click me</button>
            <p>{galleryItem.likes} like this.</p>
        </div>
    )
}

export default GalleryItem;