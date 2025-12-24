
import Header from './Header'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
        <Header />
       <Link to="/login"><h1> go to login page </h1></Link>

    </div>
  )
}

export default Home;