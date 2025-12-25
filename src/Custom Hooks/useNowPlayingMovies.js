import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constants';
import { NOW_PLAYING_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/MoviesSlice';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    
    const nowPlayingFetch = async () =>{
    const data = await fetch(NOW_PLAYING_URL, API_OPTIONS)
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
    nowPlayingFetch();
    }, []);
}

export default useNowPlayingMovies;