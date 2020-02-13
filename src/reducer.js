import { combineReducers } from 'redux';

import {  
  VIEW_ONE_CAT,
  VIEW_ALL_CATS,
  CAT_DATA_SUCCEEDED,
  FAVORITE_CAT,
  SORT_BY_LAST_WORD,
  DISPLAY_FAVORITES,
} from './constants';

import {
  updateFavorite,
  sortCatsByLastWord,
  getOnlyFavoriteCats,
  selectAlphaCat,
} from './util';


const viewReducer = (state="ALL_CATS", action) => {
  switch(action.type) {
    case VIEW_ONE_CAT: {
      state = "ONE_CAT";
      break;
    }
    case VIEW_ALL_CATS: {
      state = "ALL_CATS";
      break;
    }
    case DISPLAY_FAVORITES: {
      state = "FAVORITE_CATS";
      break;
    }
    case SORT_BY_LAST_WORD: {
      state = "SORTED";
      break;
    }
  }
  return state;
}

const dataReducer = (state={}, action) => {
  switch(action.type) {
    case CAT_DATA_SUCCEEDED: {
      //todo help this to have more than 25 facts (adding on instead of replacing)
      state = action.data;
      break;
    }
    case FAVORITE_CAT: {
      state = updateFavorite(state, action.cat);
      break;
    }
    case SORT_BY_LAST_WORD: {
      state = sortCatsByLastWord(state);
      break;
    }
    case DISPLAY_FAVORITES: {
      state = getOnlyFavoriteCats(state);
      break;
    }
    case VIEW_ONE_CAT: {
      state = selectAlphaCat(state);
      break;
    }
  }
  return state;
};

export const reducers = combineReducers({
  data: dataReducer,
  view: viewReducer,
}); 