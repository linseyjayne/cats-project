import {
    GET_CATS,
    FAVORITE_CARD,
    SORT_BY_LAST_WORD,
    DISPLAY_FAVORITES,
    CAT_DATA_SUCCEEDED,
    CAT_DATA_FAILED
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

export function fetchCatDataSuccess(data) {
    return { type: CAT_DATA_SUCCEEDED, data }
}

export function fetchCatDataFail(message) {
    return { type: CAT_DATA_FAILED, message }
}