
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlaystation} from "@fortawesome/free-brands-svg-icons";
import {findAllPlatforms } from '../../../api/game.api.js'
import NewGameReleaseItem from './NewGameReleaseItem.js'
import '../../../css/gameMain.css';
import {
    useState,
     useEffect,
     } from 'react';
     
    
const NewGameRelease = (props) => {
    console.log("Test 1");
    const [platforms, setPlatforms] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        findAllPlatforms().then(res => res.data).then((platforms) => { 
            setPlatforms(platforms);
        }).catch(error => {
            setError(error);
        })

        
    }, [])
    if(error){
        return <div>Error: {error.reason}</div>;
      } else {
    return(
        <div className="col-8 mt-5 row"style={{"padding-bottom":"2.1rem"}}>
            
            <div className="bg-dark text-light">New Game Releases</div>
            <div className="release-table col-9 border">
            
                <ul className="list-inline d-flex flex-row">
                    { /**@TODO: create a filter to return the 3 most recent games and use the id in each href**/}
                    <NewGameReleaseItem />
                    <NewGameReleaseItem />
                    <NewGameReleaseItem />
                    {/* <a href="info/?id=2"  className="list-inline-item text-primary" >three</a> */}
                </ul>
            </div>
            
            <div className="col-3 floatRight border">
                <div className="fontBold">Browse by platform</div>
                
                {platforms.filter(platform => {
                    return platform.legacyStatus === false
                }).map( platforms => (
                    <div  className="col-6 border-top p-left-zero">
                    <a href=""><li className="list-unstyled text-dark">{platforms.platformName}</li></a>
                    </div>

                ))}
            </div>
        </div>
        )
    }
}

export default NewGameRelease;