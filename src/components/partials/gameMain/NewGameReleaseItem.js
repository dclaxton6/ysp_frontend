import '../../../css/gameMain.css';
import { findAllGames} from '../../../api/game.api.js'
import {
    useState,
     useEffect,
     } from 'react';

const NewGameReleaseItem = () => {
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
        <div className="col-3 row ms-5">
            <a href="info?id=2">
                <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&
                auto=format&fit=crop&w=647&q=80"  className="img-fluid" alt="filler"/>
                <div style={{fontSize:12}} className="border text-dark text-center">Test Game Text</div>
            </a>
            <div class="d-flex flex-row mt-1">
                <div style={{fontSize:12}} className="col-3 score game_positive score-wrap mx-1">93</div>
                <div style={{fontSize:10}} className="col-9">
                     <div className="col">Based on</div> 
                    <span>12</span> critics</div>
            </div>
        </div>
    )
}
}
export default NewGameReleaseItem;

