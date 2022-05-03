import '../css/gameMain.css';
import { findAllGames, findAllGenres} from '../api/game.api.js'
import NewGameRelease from '../components/partials/gameMain/NewGameRelease';
import Footer from '../components/partials/footer';
import LegacyPlatforms from '../components/partials/gameMain/legacyPlatforms';
import TopGames from '../components/partials/gameMain/TopGames';
import {
    useState,
     useEffect,
     } from 'react';  
const GameMain = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [games, setGames] = useState([]);
  
   useEffect(() => {
        findAllGames().then(
        (games) => {
            setIsLoaded(true);
            setGames(games.data);
        }).catch(error => {
            setIsLoaded(true);
            setError(error); 
        })
  }, [])
  
  if(error){
    return <div>Error: {error.reason}</div>;
  } else if (!isLoaded){
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '200px',
  }}><h1>Loading...</h1></div>;
  } else {
      return(
        <div>
          <div className="container ML-2 col-10 ">
                <div className='mt-5 row'>
                    <NewGameRelease />
                    <LegacyPlatforms />
                    <TopGames />  
                </div>
                <Footer/>
            </div> 
        </div>
        );
    }
}

export default GameMain;