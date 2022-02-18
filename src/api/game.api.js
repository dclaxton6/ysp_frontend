import CONFIG from './api.config.json'
import { requestHandler } from './axiosHandler'
import ENUMS from './enums.json'
import { nullChecker } from '../common/checkers'
const GAME_RESOURCE = `${CONFIG.BASE_URL}/api/v1/game`

export async function findAllGames(){
    return await requestHandler(GAME_RESOURCE, ENUMS.METHODS.GET);
}
/*
*TODO need to add endpoint to backend for filter search
*
export async function findAllGamesByFilter(filter){
    nullChecker(filter, 'filter')
    return await requestHandler(`${GAME_RESOURCE}?filter=${filter}`, METHODS.GET);
}
*/

export async function findAllGamesById(gameId){
    nullChecker(gameId, 'gameId')
    return await requestHandler(`${GAME_RESOURCE}/${gameId}`, ENUMS.METHODS.GET);
    
}

export async function CreateGame(title, developer, platform, rating, releaseDate, summary, score){
    nullChecker(title, 'title')
    nullChecker(developer, 'developer')
    nullChecker(platform, 'platform')
    nullChecker(rating, 'rating')
    nullChecker(releaseDate, 'releaseDate')
    nullChecker(summary, 'summary')
    nullChecker(score, 'score')

    let endpoint = `${GAME_RESOURCE}/new?
    title=${title}
    developer=${developer}
    platform=${platform}
    rating=${rating}
    releaseDate=${releaseDate}
    summary=${summary}
    score=${score}`;
    return await requestHandler(endpoint, ENUMS.METHODS.POST);
    
}
/**
 * 
 * @param {*} gameId 
 * TODO add requestParams
 */
export async function updateGame(gameId){
    nullChecker(gameId, 'gameId')
   // return await requestHandler(`${GAME_RESOURCE}/${gameId}`, METHODS.PUT);
    
}

export async function deleteGame(gameId){
    nullChecker(gameId, 'gameId')
    return await requestHandler(`${GAME_RESOURCE}/${gameId}`, ENUMS.METHODS.DELETE);
    
}