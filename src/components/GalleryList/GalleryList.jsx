import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

function GalleryList({pictureArray, getPictures}) {
    return(
        <>
        <div className='parentCard'>

            {pictureArray.map(picture => (
                <GalleryItem key={picture.id} picture={picture} getPictures={getPictures}/>
            ))}
        </div>
        </>
    )
}

export default GalleryList;