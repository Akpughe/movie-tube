import React, { useState } from 'react';
import { AiFillStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineWatchLater } from 'react-icons/md';

const MovieCard = ({ movies, selectFavourite, removeLater, selectWatch, removeIcon, addIcon, laterIcon }) => {
  return (
    <div className="flex overflow-hidden flex-wrap mt-10">
      {movies.map((movie) => {
        return (
          <>
            <div className=" w-80 rounded mx-4 mb-8">
              <div>
                <img
                  className="w-full h-80 rounded-2xl"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
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
                <div>
                  <div
                    className="flex mb-3"
                    onClick={() => selectFavourite(movie)}
                  >
                    {addIcon}
                    {/* <AiFillHeart className="fav" size={20} color="black" /> */}
                  </div>
                  <div
                    className="flex mb-3"
                    onClick={() => removeLater(movie)}
                  >
                    {removeIcon}{' '}
                  </div>
                  <div className="flex" onClick={() => selectWatch(movie)}>
                    {/* <MdOutlineWatchLater className="later" size={20} /> */}
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
