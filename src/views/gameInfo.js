import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/free-brands-svg-icons"
import {findGameById} from '../api/game.api.js'
import {
    useState,
     useEffect,
     } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faPinterestSquare, faTwitterSquare, faRedditSquare } from "@fortawesome/free-brands-svg-icons";
const requestParams = new URLSearchParams(window.location.search);
const paramValue = requestParams.get("id");
console.log("Testing params: " + paramValue);
console.log("Testing object: " + requestParams);
const GameInfo = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [game, setGame] = useState([]);
    
    useEffect(() => {
            findGameById(paramValue).then(res => res.data).then((game) => {
                setIsLoaded(true);
                setError(error);
                setGame(game);
            })
    }, [])
    console.log(game)
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
        <div className="container ML-2 mt-5 col-10">
                <div className="row">
                    <div className="col-3"><a> <h2>{game.title}</h2> </a> </div>
                    <div className="col-2">  
                        <span>{game.platform}</span>
                    </div>
                        
                    <div className="col-2 floatRight">
                        <ul className="social-links list-group list-group-horizontal">
                            <li><a href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} className="facebook-icon"/></a></li>
                            <li><a href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitterSquare} className="twitter-icon"/></a></li>
                            <li><a href="http://www.reddit.com"><FontAwesomeIcon icon={faRedditSquare} className="reddit-icon"/></a></li>
                            <li><a href="http://www.pintrest.com"><FontAwesomeIcon icon={faPinterestSquare} className="pintrest-icon"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row summary-details">
                    <div><a href="" className="fw-bold text-dark">{game.developer}</a>  <span> | </span>
                   
                    <span className="fw-bold">Release Date: </span>{game.releaseDate} <span> | </span> 
                    
                    <span className="fw-bold">Also On: </span> </div>
                </div>
                <div className="row">
                    <ul className="content-nav list-group list-group-horizontal col-10">
                        <li className="col-2">Summary</li>
                        <li className="col-2">Critic Reviews</li>
                        <li className="col-2">User Reviews</li>
                        <li className="col-2">Details & Credits</li>
                        <li className="col-2">Trailers & Videos</li>
                    </ul>
                </div>
        </div>
        ); 
    }
}

export default GameInfo;