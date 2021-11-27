import { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import SideNav from './components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSearch, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {MdOutlineWatchLater, MdDelete} from 'react-icons/md'

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [watchlater, setWatchlater] = useState([]);
  const [search, setSearch] = useState('');
  const [active, setActive] = useState('');

  const handleActive = (str) => {
    setActive(str);
  };

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('movie-tube-123'));

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
    setWatchlater(movieFavourites)
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
// if (favourites.find((item) => item.id === movie.id)) {
//       toast.error('Movie already added to favourite');
//       return;
//     }

    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    toast.success('Added to Favourites');
    saveToLocalStorage(newFavouriteList);
  };
  const addToWatchlater = (movie) => {
    const newLaterList = [...watchlater, movie];
    setWatchlater(newLaterList);
    saveToLocalStorage(newLaterList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  const removeLaterMovie = (movie) => {
    const newLaterList = watchlater.filter(
      (later) => later.id !== movie.id
    );

    setWatchlater(newLaterList);
    saveToLocalStorage(newLaterList);
  };

  return (
    <div className="flex">
      <SideNav
        openHome={() => handleActive('')}
        openFav={() => handleActive('favourite')}
        openWatchLater={() => handleActive('watchlater')}
      />
      <div className="w-full py-6 px-10 bg-gray-100 h-full ml-52">
        {/* 
      {loading ? (
        <div>
          <h2>Search for a movie</h2>
        </div>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img width="300px" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie cover" />
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
      )} */}
        {active === '' ? (
          <>
            <div>
              {/* <input
                type="text"
                placeholder="Type to search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              /> */}
              <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div class="md:flex">
                  <div class="w-full p-3">
                    <div class="relative">
                      {' '}
                      <i class="absolute fa fa-search text-gray-400 top-5 left-4">
                        <AiOutlineSearch />
                      </i>{' '}
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                        name=""
                        placeholder="Search for a movie"
                      />{' '}
                      <span class="absolute top-4 right-5 border-l pl-4">
                        <i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
                      </span>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MovieCard
              movies={movies}
              selectFavourite={addToFavourite}
              selectWatch={addToWatchlater}
              addIcon={
                <AiOutlineHeart className="fav" size={20} color="black" />
              }
              laterIcon={<MdOutlineWatchLater className="later" size={20} />}
            />
          </>
        ) : active === 'favourite' ? (
          <>
            <h1 className="text-xl font-semibold">
              Favourite{favourites && favourites.length > 1 ? 's' : ''}
            </h1>
            {favourites.length == 0 ? (
              <h2>You have no favourite</h2>
            ) : (
              <MovieCard
                movies={favourites}
                selectFavourite={removeFavouriteMovie}
                addIcon={
                  <AiFillHeart className="fav" size={20} color="red" />
                }
                laterIcon={<MdOutlineWatchLater className="later" size={20} />}
                favComp={''}
              />
            )}
          </>
        ) : active === 'watchlater' ? (
          <>
          <h1 className="text-xl font-semibold">
              Watch later movies
            </h1>
          <MovieCard
                movies={watchlater}
                // selectFavourite={removeFavouriteMovie}
                removeLater={removeLaterMovie}
                removeIcon={
                 <MdDelete size={20}/>
                }
                favComp={''}
              />
              </>
        ): ''}

        {/* 
      <h2>Favourite</h2>
      {favourite.map((movie) => (
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
      ))} */}
      </div>
    </div>
    // </div>
  );
}

export default App;
