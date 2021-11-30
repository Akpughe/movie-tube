import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const MovieCard = ({ movies, selectFavourite, removeLater, selectWatch, removeIcon, addIcon, laterIcon, add_to_favourite_text }) => {
  return (
    <div className="flex overflow-hidden flex-wrap mt-10">
      {movies.map((movie) => {
        return (
          <>
            <div className=" w-80 rounded mx-4" style={{marginBottom:'60px'}}>
              <div className="wrap relative">
                <img
                  className="w-full h-80 rounded-2xl"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                />
                <p className="mmm">{movie.overview}</p>
              </div>
              <div className="flex justify-between items-center mt-2 mb-10">
                {/* details */}
                <div>
                  <h3 className="font-bold text-xl">{movie.original_title}</h3>
                  <p className="font-normal text-sm">{movie.release_date}</p>
                  <p className="flex items-center font-normal text-sm">
                    {' '}
                    <AiFillStar color="gold" />
                    <span className="ml-1">{movie.vote_average}</span>
                  </p>
                </div>
                {/* fav */}
                <div style={{position:'relative'}}>
                  <div
                    className="ha2f flex mb-3"
                    onClick={() => selectFavourite(movie)}
                  >
                    {/* <span className="a2f">{add_to_favourite_text}</span> */}
                    {addIcon}
                    {/* <AiFillHeart className="fav" size={20} color="black" /> */}
                  </div>
                  <div
                    className="ha2f flex mb-3"
                    onClick={() => removeLater(movie)}
                  >
                    {/* <span className="a2f">{add_to_favourite_text}</span> */}
                    {removeIcon}{' '}
                  </div>
                  <div className="ha2f flex" onClick={() => selectWatch(movie)}>
                    {/* <MdOutlineWatchLater className="later" size={20} /> */}
                    {/* <span className="a2f">add to watch later</span> */}

                    {laterIcon}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MovieCard;
