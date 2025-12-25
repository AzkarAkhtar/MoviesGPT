import useNowPlayingMovies from '../Custom Hooks/useNowPlayingMovies';  
import MainMovie from './MainMovie';
import MovieContainer from './MovieContainer';
import Navbar from './Navbar'
import usePopularMovies from '../Custom Hooks/usePopularMovies';
import useTopRated from '../Custom Hooks/useTopRated';
import useUpcomingMovies from '../Custom Hooks/useUpcomingMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div>
      <Navbar />
      <MainMovie />
      <MovieContainer />
    </div>
  )
}

export default Browse;
