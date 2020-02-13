import {
    GET_CATS,
    FAVORITE_CARD,
    SORT_BY_LAST_WORD,
    DISPLAY_FAVORITES,
    CATS_FACTS_SUCCEEDED,
    CATS_FACTS_FAILED,
    CATS_IMAGES_SUCCEEDED,
    CATS_IMAGES_FAILED,
} from './constants';

export function favoriteCard(fact) {
    return { type: FAVORITE_CARD, fact }
}

export function sortByLastWord() {
    return { type: SORT_BY_LAST_WORD }
}

export function displayFavorites() {
    return { type: DISPLAY_FAVORITES }
}

export function getCats() {
    return { type: GET_CATS }
}

export function fetchImagesSuccess(images) {
    return { type: CATS_IMAGES_SUCCEEDED, images }
}

export function fetchImagesFail(message) {
    return { type: CATS_IMAGES_FAILED, message }
}

export function fetchFactsSuccess(facts) {
    return { type: CATS_FACTS_SUCCEEDED, facts }
}

export function fetchFactsFail(message) {
    return { type: CATS_FACTS_FAILED, message }
}