import React, { useEffect, useState } from 'react';
import './MoviePage.css';
import Movie from './Movie';
import Cast from './Cast';

const APIKEY = "?api_key=2fd99db9a55f38b3057e417bf6d2113a";
const API = "https://api.themoviedb.org/3/movie/";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SIMILAR= "/similar";
const CREDITS= "/credits";

const MoviePage = (props) => {
    const [movies, setMovies] = useState('');
    const [similarmovies, setSimilarMovies] = useState([]);
    useEffect (() => { 
        fetch(API+props.match.params.id+SIMILAR+APIKEY)
        .then(res => res.json())
        .then(data =>{
          setSimilarMovies(data.results);
        }); 

    }, []);



    const [credits, setCredits] = useState([]);
    useEffect (() => { 
      fetch(API+props.match.params.id+CREDITS+APIKEY)
      .then(res => res.json())
      .then(data =>{
        setCredits(data.cast);
      }); 

  }, []);

    useEffect (() => { 
        fetch(API+props.match.params.id+APIKEY)
        .then(res => res.json())
        .then(data =>{
          
          console.log(data);
          setMovies(data);
        }); 
        
      }, []);
      

    return (
        <div className = "posterContainer">
          <div class="backdropContainer">
          <img className="backdropImg" src={IMG_API + movies.backdrop_path} alt={movies.title}/>
          </div>
            <div class="row">
  <div class="col-4">
  <br/>
  <img src= {IMG_API + movies.poster_path} alt={movies.title}/>
  </div>
  <div class="col-8">
    <br/>
  <h1>{movies.title}</h1>
  Year Released: {movies.release_date}

      <br/>
      <h2>Overview      </h2>
          <div className="Overview">{movies.overview}</div>

          <br/>
          Total Movie Budget: USD {movies.budget}
          <br/>
          <div className="ratingButton">
              Total Vote Average
              <br/>
        <br/>
          <button type="button" class="btn btn-primary white">{movies.vote_average}/10 </button> &nbsp;<img class="staricon" src="https://www.flaticon.com/svg/static/icons/svg/929/929424.svg" alt="star"/>
          <br/>
            </div>

  </div>       
  <div class="cast-container">
   <h1 className="CastName"> <br/>Cast</h1> 
          <div className="movie-container">
          {credits.length > 0 && credits.map((movie) => <Cast key={movie.cast_id} {...movie} />   )}
          </div>
          </div>
</div>
<h1>Similar Movies</h1>
<div className="movie-container">
{similarmovies.length > 0 && similarmovies.map((movie) => <Movie key={movie.id} {...movie} />   )}
</div>
</div>

    )
}

export default MoviePage;
