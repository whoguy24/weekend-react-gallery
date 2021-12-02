import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList ({gallery, handleLikeClick}) {
    return (
        <ul>
            {gallery.map(galleryItem => (
                <li key={galleryItem.id}>
                    <GalleryItem galleryItem={galleryItem} handleLikeClick={handleLikeClick} />
                </li>
            ))}
        </ul>
    )
}

export default GalleryList;