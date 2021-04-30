import './GalleryItem.css'

function GalleryItem({picture}) {
    return(
        <>
            <img src={picture.path}/>
        </>
    )
}

export default GalleryItem;