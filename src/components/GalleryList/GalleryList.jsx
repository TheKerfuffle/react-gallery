import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

function GalleryList({pictureArray}) {
    return(
        <>
        <div className='parentCard'>

            {pictureArray.map(picture => (
                <GalleryItem key={picture.id} picture={picture}/>
            ))}
        </div>
        </>
    )
}

export default GalleryList;