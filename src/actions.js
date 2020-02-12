import {
    GET_CATS,
    FAVORITE_CARD,
    SORT_BY_LAST_WORD,
    DISPLAY_FAVORITES,
} from './constants';

export function favoriteCard(cardData) {
    return { type: FAVORITE_CARD, cardData }
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