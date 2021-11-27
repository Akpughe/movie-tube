import { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import SideNav from './components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSearch } from 'react-icons/ai';

function Test() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourite, setFavourite] = useState([]);
  const [search, setSearch] = useState('');
  const [active, setActive] = useState('');

  const handleActive = (str) => {
    setActive(str);
  };

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  useEffect(() => {
    const addedToFavourite = JSON.parse(localStorage.getItem('movie-tube-123'));

    setFavourite(addedToFavourite);
    console.log(favourite);
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
    // do not add a movie to favourite if it is already added
    // if (favourite.find((item) => item.id === movie.id)) {
    //   toast.error('Movie already added to favourite');
    //   return;
    // }
    const newFav = [...favourite, movie]
    setFavourite(newFav);
    console.log(favourite)
    saveToLocalStorage(newFav);
  };

  const removeFavorite = (movie) => {
    setFavourite(favourite.filter((fav) => fav.id !== movie.id));
    saveToLocalStorage(favourite.filter((fav) => fav.id !== movie.id));
  };

  return (
    <div className="flex">
      <div className="">
        <input
          type="text"
          placeholder="Type to search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
          <div>
            <h2>Search for a movie</h2>
          </div>
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <img
                  width="300px"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="movie cover"
                />
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
        {favourite && favourite.map((movie) => (
        <>
          <div key={movie.id}>
            <img width="300px" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie cover" />
            <h3>{movie.original_title}</h3>
            <p>{movie.overview ? movie.overview : 'no description'}</p>
          </div>
          <button onClick={() => removeFavorite(movie)}>
            Remove from Favourite
          </button>
        </>
      ))}
      </div>
    </div>
    // </div>
  );
}

export default Test;
