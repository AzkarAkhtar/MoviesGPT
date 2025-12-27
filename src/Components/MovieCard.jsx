import { useState } from "react";
import { IMG_URL } from "../Utils/Constants";
import MovieTrailer from "./MovieTrailer";

const MovieCard = ({ posterPath, movieId }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4">
      {/* Movie Poster */}
      <img
        src={IMG_URL + posterPath}
        alt="Movie Card"
        className="cursor-pointer rounded-lg hover:scale-105 transition-transform"
        onClick={() => setShowTrailer(true)}
      />

      {/* Trailer Popup */}
      {showTrailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-[90vw] max-w-4xl aspect-video bg-black rounded-lg shadow-lg">

            {/* Close Button */}
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
            >
              &times;
            </button>

            {/* Trailer */}
            <MovieTrailer movieId={movieId} />

          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
