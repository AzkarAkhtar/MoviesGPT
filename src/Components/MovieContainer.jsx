import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} id={movies.nowPlayingMovies?.map(movie => movie.id)} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} id={movies.topRatedMovies?.map(movie => movie.id)} />
          <MovieList title={"Popular"} movies={movies.popularMovies} id={movies.popularMovies?.map(movie => movie.id)} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} id={movies.upcomingMovies?.map(movie => movie.id)} />
        </div>
      </div>
    )
  );
};
export default MovieContainer;