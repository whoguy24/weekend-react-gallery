import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList ({gallery}) {
    return (
        <ul>
            {gallery.map(galleryItem => (
                <li key={galleryItem.id}>
                    <GalleryItem galleryItem={galleryItem} />
                </li>
            ))}
        </ul>
    )
}

export default GalleryList;