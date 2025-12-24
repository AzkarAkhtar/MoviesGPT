import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constants';
import { NOW_PLAYING_URL } from '../Utils/Constants';
import Navbar from './Navbar'

const Browse = () => {
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmFhMmE5ZjM4MTgyNGUxN2VkNzMwYzA4NGQzY2Q4NCIsIm5iZiI6MTc2NjU5NzYzOS45ODUsInN1YiI6IjY5NGMyNDA3YWQ0YzMyZTRhYzhjZDYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2HHyM58RHxn3mUQXOZDD55fOiQXq1rGFRlXiguMiu1w'
  }
};

const nowPlayingFetch = async () =>{
  const data = await fetch(NOW_PLAYING_URL, API_OPTIONS)
  const json = await data.json();
  console.log(json.results);

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
