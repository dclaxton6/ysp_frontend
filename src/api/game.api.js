import CONFIG from './api.config.json'
import { requestHandler } from './axiosHandler'
import ENUMS from './enums.json'
import { nullChecker } from '../common/checkers'
const GAME_RESOURCE = `${CONFIG.BASE_URL}/api/v1/game`

export async function findAllGames(){
    return await requestHandler(GAME_RESOURCE, ENUMS.METHODS.GET);
}

export async function findAllGamesByFilter(filter){
    nullChecker(filter, 'filter')
    return await requestHandler(`${GAME_RESOURCE}/${filter}`, ENUMS.METHODS.GET);
}

export async function findGameById(gameId){
    nullChecker(gameId, 'gameId')
    console.log(gameId)
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
    
    const data = {
        title,
        developer,
        platform,
        rating,
        releaseDate,
        summary,
        score
    }

    let endpoint = `${GAME_RESOURCE}/new`;
    return await requestHandler(endpoint, ENUMS.METHODS.POST,{data});
}

/**
 * 
 * @param {*} gameId 
 * TODO add requestParams
 */
export async function updateGame(gameId){
    nullChecker(gameId, 'gameId')
   // return await requestHandler(`${GAME_RESOURCE}/${gameId}`, ENUMS.METHODS.PUT);
    
}

export async function deleteGame(gameId){
    nullChecker(gameId, 'gameId')
    return await requestHandler(`${GAME_RESOURCE}/${gameId}`, ENUMS.METHODS.DELETE);
}

export async function findAllPlatforms(){
    return await requestHandler(`${CONFIG.BASE_URL}/api/v1/platform`,ENUMS.METHODS.GET)
}

export async function findAllGenres(){
 return await requestHandler(`${CONFIG.BASE_URL}/api/v1/game/genre`,ENUMS.METHODS.GET)
}