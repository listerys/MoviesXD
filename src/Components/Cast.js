import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Cast({Cast_id, original_name, profile_path}) {
    return (
        <div className="movieCast">
            
            <img src={IMG_API + profile_path} alt={original_name}/>
            <div className="movie-info-Cast">
                <h3>
                    {original_name}
                </h3>
            </div>
        </div>
    )
}

export default Cast
