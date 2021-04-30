import './GalleryItem.css'

function GalleryItem({picture}) {
    return(
        <>
            <img src={picture.path}/>
            <p>LIkes: {picture.likes}</p>
            <button>+1</button>
        </>
    )
}

export default GalleryItem;