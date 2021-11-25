import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourite, setFavourite] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  useEffect(() => {
    const addedToFavourite = JSON.parse(localStorage.getItem('movie-tube-123'));

    setFavourite(addedToFavourite);
  }, []);

  const saveToLocalStorage = (value) => {
    localStorage.setItem('movie-tube-123', JSON.stringify(value));
  };

  const fetchMovies = async (search) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=be1f3160ea03d8268e923dbbe14e42f6&language=en-US&query=${search}&page=1&include_adult=false`
    );
    setMovies(res.data.results);
    console.log(res.data.results);
    setLoading(false);
  };

  const addToFavourite = (movie) => {
    setFavourite([...favourite, movie]);
    saveToLocalStorage([...favourite, movie]);
  };

  const removeFavorite = (movie) => {
    setFavourite(favourite.filter((fav) => fav.id !== movie.id));
    saveToLocalStorage(favourite.filter((fav) => fav.id !== movie.id));
  };

  return (
    <>
      <h2>Movie List</h2>
      <div>
        <input
          type="text"
          placeholder="Type to search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div>
          <h2>Search for a movie</h2>
        </div>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img width="300px" src="./noimageplaceholder.webp" alt="movie cover" />
              <div>
                <h3>{movie.original_title}</h3>
                <p>{movie.overview ? movie.overview : 'no description'}</p>
              </div>
              <button onClick={() => addToFavourite(movie)}>
                Add to Favourite
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2>Favourite</h2>
      {favourite.map((movie) => (
        <>
          <div key={movie.id}>
            <img width="300px" src="./noimageplaceholder.webp" alt="movie cover" />
            <h3>{movie.original_title}</h3>
            <p>{movie.overview ? movie.overview : 'no description'}</p>
          </div>
          <button onClick={() => removeFavorite(movie)}>
            Remove from Favourite
          </button>
        </>
      ))}
    </>
  );
}

export default App;
