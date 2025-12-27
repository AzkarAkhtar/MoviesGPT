import { useEffect, useState } from 'react';
import { API_OPTIONS } from '../Utils/Constants';

const MovieTrailer = ({ movieId }) => {
  const [filterData, setFilterData] = useState(null);

  const getMovieTrailer = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US',
      API_OPTIONS
    );
    const json = await data.json();
    
    const trailer = json.results.filter((video) => video.type === "Trailer");
    setFilterData(trailer[0]?.key);
  };

  useEffect(() => {
    getMovieTrailer();
  }, [movieId]);

  if (!filterData) return null;

  return (
     <div className="w-full aspect-video">
      <iframe
        className="w-full h-full border-0"
        src={`https://www.youtube.com/embed/${filterData}?autoplay=1&mute=1&controls=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default MovieTrailer;