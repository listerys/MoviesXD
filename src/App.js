import React, {useState, useEffect} from 'react'
import './App.css';
import Movie from './Components/Movie';
import Horror from './Components/Horror';

const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=2fd99db9a55f38b3057e417bf6d2113a&language=en-US&page=2"
const HORROR = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=27"
const ACTION = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=28"
const ADVENTURE = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=12"
const ANIMATION = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=16"
const COMEDY = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=35"
const CRIME = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=80"
const DOCUMENTARY = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=99"
const DRAMA = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=18"
const MYSTERY = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=9648"
const ROMANCE = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=10749"
const THRILLER = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=53"
const SCIENCEFICTION = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=878"
const WAR = "https://api.themoviedb.org/3/discover/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&with_genres=10752"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=2fd99db9a55f38b3057e417bf6d2113a&language=en-US&query="



function App() {


  const [searchmovies, setSearchMovies] = useState([]);
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
useEffect (() => { 
  fetch(TOP_RATED)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    console.log(data.results);
    setMovies(data.results);
  }); 
  
}, []);



const [horror, setHorrorMovies] = useState([]);
useEffect (() => { 
fetch(HORROR)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setHorrorMovies(data.results);
}); 

}, []);



const [action, setActionMovies] = useState([]);
useEffect (() => { 
fetch(ACTION)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setActionMovies(data.results);
}); 

}, []);

const [adventure, setAdventureMovies] = useState([]);
useEffect (() => { 
fetch(ADVENTURE)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setAdventureMovies(data.results);
}); 

}, []);

const [Animation, setAnimationMovies] = useState([]);
useEffect (() => { 
fetch(ANIMATION)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setAnimationMovies(data.results);
}); 

}, []);

const [Comedy, setComedyMovies] = useState([]);
useEffect (() => { 
fetch(COMEDY)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setComedyMovies(data.results);
}); 

}, []);

const [Crime, setCrimeMovies] = useState([]);
useEffect (() => { 
fetch(CRIME)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setCrimeMovies(data.results);
}); 

}, []);

const [Documentary, setDocumentaryMovies] = useState([]);
useEffect (() => { 
fetch(DOCUMENTARY)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setDocumentaryMovies(data.results);
}); 

}, []);

const [Drama, setDramaMovies] = useState([]);
useEffect (() => { 
fetch(DRAMA)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setDramaMovies(data.results);
}); 

}, []);

const [Mystery, setMysteryMovies] = useState([]);
useEffect (() => { 
fetch(MYSTERY)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setMysteryMovies(data.results);
}); 

}, []);

const [Romance, setRomanceMovies] = useState([]);
useEffect (() => { 
fetch(ROMANCE)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setRomanceMovies(data.results);
}); 

}, []);

const [Thriller, setThrillerMovies] = useState([]);
useEffect (() => { 
fetch(THRILLER)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setThrillerMovies(data.results);
}); 

}, []);

const [Sciencefiction, setSciencefictionMovies] = useState([]);
useEffect (() => { 
fetch(SCIENCEFICTION)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setSciencefictionMovies(data.results);
}); 

}, []);

const [War, setWarMovies] = useState([]);
useEffect (() => { 
fetch(WAR)
.then(res => res.json())
.then(data =>{
  console.log(data);
  setWarMovies(data.results);
}); 

}, []);




const handleOnSubmit = (e) => {
  e.preventDefault();
  fetch(SEARCH_API+searchTerm)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    setSearchMovies(data.results);
  }); 
};

const handleOnChange = (e) => {
  setSearchTerm(e.target.value);
};
  return (
    <>

    <p class="search__title">
      MoviesXd
    </p>  

<div class="searchBody">

  <form class="search__container" onSubmit={handleOnSubmit}>
    <input class="search__input" type="text" placeholder="Search" onChange={handleOnChange}/>

    </form>


</div>
<div className="searchmovie-container">
<span class="ref"></span>
{searchmovies.length > 0 && searchmovies.map((movie) => <Movie key={movie.id} {...movie} />   )}
</div>
      <h1>Top Movies</h1>
    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>
    <h1>Horror</h1>
    <div className="movie-container">
      {horror.length > 0 && horror.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>Action</h1>
    <div className="movie-container">
      {action.length > 0 && action.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>Adventure</h1>
    <div className="movie-container">
      {adventure.length > 0 && adventure.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>Animated</h1>
    <div className="movie-container">
      {Animation.length > 0 && Animation.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>Comedy</h1>
    <div className="movie-container">
      {Comedy.length > 0 && Comedy.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>Crime</h1>
    <div className="movie-container">
      {Crime.length > 0 && Crime.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>Documentary</h1>
    <div className="movie-container">
      {Documentary.length > 0 && Documentary.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>Drama</h1>
    <div className="movie-container">
      {Drama.length > 0 && Drama.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>Mystery</h1>
    <div className="movie-container">
      {Mystery.length > 0 && Mystery.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>
    <h1>Romance</h1>
    <div className="movie-container">
      {Romance.length > 0 && Romance.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>Thriller</h1>
    <div className="movie-container">
      {Thriller.length > 0 && Thriller.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>Science Fiction</h1>
    <div className="movie-container">
      {Sciencefiction.length > 0 && Sciencefiction.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>

    <h1>War</h1>
    <div className="movie-container">
      {War.length > 0 && War.map((movie) => <Movie key={movie.id} {...movie} />   )}
    </div>






    </>
  );
}

export default App;
