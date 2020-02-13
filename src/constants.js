export const CAT_IMAGES_API_URL = "https://cors-anywhere.herokuapp.com/http://thecatapi.com/api/images/get?format=xml&results_per_page=25";
export const CAT_FACTS_API_URL = "https://catfact.ninja/facts?limit=25";

const prefix = "catApp";

export const GET_CATS = `${prefix}/GET_CATS`;
export const FAVORITE_CARD = `${prefix}/FAVORITE_CARD`;
export const SORT_BY_LAST_WORD = `${prefix}/SORT_BY_LAST_WORD`;
export const DISPLAY_FAVORITES = `${prefix}/DISPLAY_FAVORITES`;

export const CAT_DATA_SUCCEEDED = `${prefix}/CAT_DATA_SUCCEEDED`;
export const CAT_DATA_FAILED = `${prefix}/CAT_DATA_FAILED`;
