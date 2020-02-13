import { combineReducers } from 'redux';

import {  
  CAT_DATA_SUCCEEDED,
  FAVORITE_CARD
} from './constants';

const dataReducer = (state={}, action) => {
  switch(action.type) {
    case CAT_DATA_SUCCEEDED: {
      //todo help this to have more than 25 facts (adding on instead of replacing)
      state = action.data
      break;
    }
  }
  return state;
};

const favoritesReducer = (state=[], action) => {
  switch(action.type) {
    case FAVORITE_CARD: {
      state = [...state, action.fact.id]
    }
  }
  return state;
};

export const reducers = combineReducers({
  data: dataReducer,
  favorites: favoritesReducer,
}); 