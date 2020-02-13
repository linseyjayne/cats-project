import { combineReducers } from 'redux';

import {  
  VIEW_ONE_CAT,
  CAT_DATA_SUCCEEDED,
  FAVORITE_CAT,
  SORT_BY_LAST_WORD,
  DISPLAY_FAVORITES,
} from './constants';

import {
  addFavoriteCat,
  sortCatsByLastWord,
  getOnlyFavoriteCats,
  selectOneCat,
} from './util';

const dataReducer = (state={}, action) => {
  switch(action.type) {
    case CAT_DATA_SUCCEEDED: {
      state = action.data;
      break;
    }
    case FAVORITE_CAT: {
      state = addFavoriteCat(state, action.cat);
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
      state = selectOneCat(state);
      break;
    }
    default: {
      break; // do nothing to the state
    }
  }
  return state;
};

export const reducers = combineReducers({
  data: dataReducer,
}); 