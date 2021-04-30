import './GalleryItem.css'

import { useState } from 'react';

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
            <div className="card" >
                <div className="imageBox">

                    {state ? (
                        <img onClick={toggleState} src={picture.path} />

                    ) : (
                        <p onClick={toggleState}>{picture.description}</p>
                    )}
                </div>

                <h5>Likes: {picture.likes}</h5>
                <button>+1</button>
            </div>

        </>
    )
}

export default GalleryItem;