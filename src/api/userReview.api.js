import CONFIG from './api.config.json'
import { requestHandler } from './axiosHandler'
import ENUMS from './enums.json'
import { nullChecker } from '../common/checkers'
const REVIEW_RESOURCE = `${CONFIG.BASE_URL}/api/v1/user-reviews`

export async function findAllReviews(){
    return await requestHandler(REVIEW_RESOURCE, ENUMS.METHODS.GET);
}

export async function findAllReviewsById(){
    nullChecker(reviewId, 'reviewId')
    return await requestHandler(REVIEW_RESOURCE, ENUMS.METHODS.GET);
}

/*
*TODO need to add endpoint to backend for filter search
*
export async function findAllReviewsByFilter(filter){
    nullChecker(filter, 'filter')
    return await requestHandler(`${REVIEW_RESOURCE}?filter=${filter}`, ENUMS.METHODS.GET);
}
*/

export async function submitReview(gameId, userName, review, reviewDate){
    nullChecker(gameId, 'gameId')
    nullChecker(userName, 'userName')
    nullChecker(score, 'score')
    nullChecker(review, 'review')
    nullChecker(reviewDate, 'reviewDate')

    let endpoint = `${GAME_RESOURCE}/new?
    gameId=${gameId}
    userName=${userName}
    review=${review}
    reviewDate=${reviewDate}
    score=${score}`; 
    return await requestHandler(endpoint, ENUMS.METHODS.POST);  
}

/**
 * 
 * @param {*} reviewId 
 * TODO add requestParams
 */
export async function updateReview(reviewId){
    nullChecker(reviewId, 'reviewId')
   // return await requestHandler(`${REVIEW_RESOURCE}/${reviewId}`, ENUMS.METHODS.PUT);
    
}

export async function deleteGame(reviewId){
    nullChecker(reviewId, 'reviewId')
    return await requestHandler(`${REVIEW_RESOURCE}/${reviewId}`, ENUMS.METHODS.DELETE);
    
}