import './GalleryItem.css';
import axios from 'axios';
import { useState } from 'react';

function GalleryItem({ picture, getPictures }) {

    const [state, setState] = useState(true);

    function toggleState() {
        if (state) {
            setState(false);
        } else {
            setState(true);
        }
    }

    function addLike (event) {
        console.log('ID IS', event.currentTarget.dataset.id);
        let id = event.currentTarget.dataset.id;

        axios ({
            method: 'PUT',
            url: `/gallery/like/${id}`,
        })
        .then( response => {
            console.log('PUT response from server:', response);
            getPictures();
        })
        .catch( error => {
            console.log('error on put request:', error);
        })
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
                <button data-id={picture.id} onClick={addLike}>+1</button>
            </div>

        </>
    )
}

export default GalleryItem;