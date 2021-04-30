import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({pictureArray}) {
    return(
        <>
            {pictureArray.map(picture => (
                <GalleryItem key={picture.id} picture={picture}/>
            ))}
        </>
    )
}

export default GalleryList;