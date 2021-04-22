import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Movie({id, title, poster_path}) {
    return (
        <div className="movie">
            <a href={`/movie/${id}`}><img src={IMG_API + poster_path} alt={title}/></a>
            <div className="movie-info">
                <h3>
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default Movie
