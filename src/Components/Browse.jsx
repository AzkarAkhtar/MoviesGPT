import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constants';
import { NOW_PLAYING_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/MoviesSlice';
import Navbar from './Navbar'

const Browse = () => {

  const dispatch = useDispatch();
const nowPlayingFetch = async () =>{
  const data = await fetch(NOW_PLAYING_URL, API_OPTIONS)
  const json = await data.json();
  console.log(json.results);
  dispatch(addNowPlayingMovies(json.results));

}
useEffect(() => {
  nowPlayingFetch();
}, []);


  return (
    <div>
      <Navbar />
        <h1>Browse</h1>
    </div>
  )
}

export default Browse
