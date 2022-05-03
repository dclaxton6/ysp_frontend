import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import { findAllGames, findAllGamesById } from './api/game.api.js'
/* import {
   useState,
    useEffect,
     //useReducer 
    } from 'react'; */
import Webpages from './views/webPages';
import Nav from './components/partials/nav';

function App(){
  /* const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
console.log(data)
  useEffect(() => {
    findAllGames().then(res => res.data)
    .then(
        (data) => {
            
            setIsLoaded(true);
            setError(error);
            setData(data);
        }
    )
  }, []) */

  return(
    <div>
      <Nav />
      <Webpages />
    </div>
  );

}
export default App;
