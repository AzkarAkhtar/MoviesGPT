import { useSelector } from 'react-redux';
import MainMovieTitle from './MainMovieTitle';
import MovieTrailer from './MovieTrailer';

const MainMovie = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <MainMovieTitle title={original_title} overview={overview} />
      <MovieTrailer movieId={id} />
    </div>
  );
}

export default MainMovie;