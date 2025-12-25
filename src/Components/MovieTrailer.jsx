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
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${filterData}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieTrailer;