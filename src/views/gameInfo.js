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
        <div className="container ML-2 col-10">
            <div>Lorem ipsum dolor sit.</div>
                <div className="row">
                    <div className="col-3"><a> <h1>{game.title}</h1> </a></div>
                        
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
                    <div className="col-3">{game.developer}</div>
                    <div className="col-3"><span>Release Date:</span>{game.releaseDate}</div>
                    <div className="col-3">Also On:</div>
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

/*
           <div className="header">
               
                <div className="platform_title row">
                    <a> <h1 className="col-1">Horizon</h1> </a>
                    
                    <span>Platform</span>
                    
                    <div className="SocialLinks col-3">Tews</div>
                </div>
                
                <ul>
                    <li><a>PlayStation Studios</a></li>
                    <li>Release Date: {}</li>
                    <li> Also On:<a>{}</a></li>
                </ul>
            </div>
            <div className="content_nav">
                <ul className="content_nav_items">
                    <li></li>
                </ul>
            </div>
            <div className="content_body">
                <div>
                    <img />
                </div>
                
                <div>
                    <span className="score">88</span>
                    <span>
                        Generally favorable reviews based on
                         <span>
                             106 Critic Reviews
                        </span>
                    </span>
                    <div className="content_summary">
                        <span>summary</span>
                    </div>
                    <div className="side-details">
                        <ul>
                            <li>Developer</li>
                            <li>Genre(s):</li>
                            <li># of players:</li>
                            <li>Rating:</li>
                            <li><a>More Details and Credits</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="critic_user_reviews">
                <div className="critic_reviews">
                    <div className="review_header">
                        <h2>Critic Reviews</h2>
                    </div>
                </div>

                <div className="critic_reviews">
                    <div className="review_header">
                        <h2>User Reviews</h2>
                    </div>
                </div>
            </div>
           
        </div> */
        ); 
    }
}

export default GameInfo;