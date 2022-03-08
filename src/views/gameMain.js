import React from "react";
import '../css/gameMain.css';
import { findAllGames, findAllGenres, findAllPlatforms } from '../api/game.api.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlaystation} from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    useState,
     useEffect,
     } from 'react';
    
const GameMain = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [games, setGames] = useState([]);
    const[platforms, setPlatforms] = useState([])
    const[genres, setGenres] = useState([])
  
   useEffect(() => {
        findAllGames().then(res => res.data)
    .then(
        (games) => {
            
            setIsLoaded(true);
            setError(error);
            setGames(games);
        }
    )
    findAllPlatforms().then(res => res.data).then((platforms) => { 
        setIsLoaded(true);
        setError(error);
        setPlatforms(platforms);
        }
    )

    findAllGenres().then(res => res.data).then((genres) => {
        setIsLoaded(true);
        setError(error);
        setGenres(genres);
    }
    )
  }, [])
  
  if(error){
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded){
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '200px',
  }}><h1>Loading...</h1></div>;
  } else {
      return(
        <div className="container ML-2 col-10 ">
        
            <div className="row ">
            <h1>Game Main</h1>
            <div className="row">
                <div className="new-release col-8  mr-4 m-right">
                <div className="new-game-label " >New Game Releases</div>
                    <div className="row ">
                        <div className="release-table col-8">
                        
                            <ul className="list-inline">
                               { /**@TODO: create a filter to return the 3 most recent games and use the id in each href**/}
                                <li className="list-inline-item"><a href="info/?id=12">One</a></li>
                                <li className="list-inline-item"><a href="info/?id=16"> two</a></li>
                                <li className="list-inline-item"><a href="info/?id=2">three</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-4 floatRight">
                            <div className="fontBold">Browse by platform</div>
                            <ul className="row">
                                {platforms.filter(platform => {
                                    return platform.legacyStatus == false
                                }).map( platforms => (
                                     /**@TODO: figure out how to make the correct fontAwesome Icon to each platform**/
                                    <div  className="col-6"><li className="paddingZero"><FontAwesomeIcon icon={faPlaystation} />{platforms.platformName}</li></div>
                                ))}
                               
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div className="side-col bg-light col-3">
                    <div className="browse-platform  text-center floatLeft">
                        <span>Browse by platform</span>
                        <ul className="paddingZero row">
                            {platforms.filter(platform => {
                                return platform.legacyStatus == true
                            }).map( platforms => (
                                <div  className="col-6 border-bottom p-left-zero">
                                    <li className=" ">{platforms.platformName}</li>
                                </div>
                               
                            ))}
                            {/**@TODO: figure out how to have this div only appear if the amount of platforms is odd**/}
                            <div  className="col-6 border-bottom p-left-zero">
                                    <li className=" "></li>
                            </div>
                        </ul>
                    </div>
                </div>
                </div>
            </div>

            <div className=" row">
                <div className="row bg-light paddingZero col-8">
                    <div className="top-game-label mb-2">TOP GAMES</div>
                    <div className="row">
                        <div className="col-9 row border-bottom content-body">
                            <div className="col-2 ms-2">
                                <img src="https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-1.2
                                .1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="img-fluid" alt="filler image"/>
                            </div>
                            <div className="col-10 row">
                                <div className="col-10">
                                    <div style={{fontSize:20}} className="col-1 floatLeft">#1</div>
                                    <div style={{fontSize:20}} className="col-6 fontBold"><a>God of War</a></div>
                                    <div style={{fontSize:14},{color: "#999"}} className="col-12 floatLeft">April 20, 2018</div>
                                    <div className="summary col-12">The God of War has changed... and this is not the Kratos you know.
                                        A difficult and unfamiliar road awaits as you explore a stunning retelling of a classic story. 
                                        oin Kratos as he adventures through a deep and reflective journey of growth, violence and... </div>
                                </div>

                                <div className="col-2 score-wrap">
                                    <div style={{fontSize:25}} className="score game_positive score-wrap">93</div>
                                </div>
                            </div>
                        </div>
                
                        <div className=" browse-genre text-center col-3">
                        <span className="genre-label ">Browse by Genre</span>
                            <ul className="paddingZero">
                                
                                {genres.map( genres => (
                                    <a><li>{genres.genre}</li></a>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
                
            </div>

            <div className="footer row">
                <ul className="col-8 list-inline text-center">
                    <li className="list-inline-item">MOVIES</li>
                    <li className="list-inline-item">TV</li>
                    <li className="list-inline-item">MUSIC</li>
                    <li className="list-inline-item">PS4</li>
                    <li className="list-inline-item">XBOXONE</li>
                    <li className="list-inline-item">SWITCH</li>
                    <li className="list-inline-item">PC</li>
                    <li className="list-inline-item">WIIU</li>
                    <li className="list-inline-item">3DS</li>
                    <li className="list-inline-item">PS VITA</li>
                    <li className="list-inline-item">IOS</li>
                    <li className="list-inline-item">REPORTS</li>
                    <li className="list-inline-item">RSS FEEDS</li>
                </ul>
            </div>
            
        </div>
    );
}
}

export default GameMain;