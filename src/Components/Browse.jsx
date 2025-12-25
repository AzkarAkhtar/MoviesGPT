import useNowPlayingMovies from '../Custom Hooks/useNowPlayingMovies';  
import MainMovie from './MainMovie';
import Navbar from './Navbar'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Navbar />
        <MainMovie />
    </div>
  )
}

export default Browse;
