import React, { useEffect, useState } from 'react';
import './MoviePage.css';
import Button from 'react-bootstrap/Button';
import Movie from './Movie';
const APIKEY = "?api_key=2fd99db9a55f38b3057e417bf6d2113a";
const API = "https://api.themoviedb.org/3/movie/";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SIMILAR= "/similar";

const MoviePage = (props) => {
    const [movies, setMovies] = useState('');
    const [similarmovies, setSimilarMovies] = useState([]);
    useEffect (() => { 
        fetch(API+props.match.params.id+SIMILAR+APIKEY)
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          console.log(data.results);
          setSimilarMovies(data.results);
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
            <div class="row">
  <div class="col-4">
  <br/>
  <img src= {IMG_API + movies.poster_path} alt={movies.title}/>
  </div>
  <div class="col-8">
  <h1>{movies.title}</h1>
  Year Released: {movies.release_date}
      <h2>
      <br/>
          Overview
          <br/>
          <br/>
          {movies.overview}
      </h2>
          <br/>
          <br/>
          Total Movie Budget: {movies.budget}
          <br/>
          <br/>
          <div className="ratingButton">
              Total Vote Average
              <br/>
          <button type="button" class="btn btn-primary white">{movies.vote_average}/10 </button> &nbsp;<img class="staricon" src="https://www.flaticon.com/svg/static/icons/svg/929/929424.svg" alt="star"/>
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
