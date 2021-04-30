import './GalleryItem.css'

import {useState} from 'react';

function GalleryItem({ picture }) {

    const [state, setState] = useState(true);

    function toggleState() {
        if (state) {
            setState(false);
        } else {
            setState(true);
        }
    }



    return (
        <>
            <div className="this" >
                {state ? (
                    <img onClick={toggleState} src={picture.path} />

                ) : (
                    <p onClick={toggleState}>{picture.description}</p>
                )}

                <p>Likes: {picture.likes}</p>
                <button>+1</button>
            </div>

        </>
    )
}

export default GalleryItem;