import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Horror({title, poster_path}) {
    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title}/>
            <div className="movie-info">
                <h3>
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default Horror
