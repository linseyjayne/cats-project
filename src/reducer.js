import { combineReducers } from 'redux';

import {  
  VIEW_ONE_CAT,
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

const dataReducer = (state={}, action) => {
  switch(action.type) {
    case CAT_DATA_SUCCEEDED: {
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
}); 