import React from "react";
import { findAllGamesById } from '../api/game.api.js'
import {useState, useEffect} from 'react';

function Test(id) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [state, setState] = useState([]);

    useEffect(() => {
        findAllGamesById(id).then(res => res.data)
    .then(
        (state) => {
            setIsLoaded(true);
            setError(error);
            setState(state);
        }
    )
  }, [])
  return(
    state
  )
}

export default Test;