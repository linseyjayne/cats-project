import { combineReducers } from 'redux';

import {  
  VIEW_ONE_CAT,
  VIEW_ALL_CATS,
  CAT_DATA_SUCCEEDED,
  FAVORITE_CAT,
} from './constants';

const viewReducer = (state="ALL_CATS", action) => {
  switch(action.type) {
    case VIEW_ONE_CAT: {
      state = "ONE_CAT"
      break;
    }
    case VIEW_ALL_CATS: {
      state = "ALL_CATS"
      break;
    }
  }
  return state;
}

function updateFavorite(state, favoriteId) {
  let catData = state;
  catData.forEach((cat) => {
    if (cat.image.id === favoriteId)
      cat.isFavorite = true;
  });
  return catData;
}

const dataReducer = (state={}, action) => {
  switch(action.type) {
    case CAT_DATA_SUCCEEDED: {
      //todo help this to have more than 25 facts (adding on instead of replacing)
      state = action.data
      break;
    }
    case FAVORITE_CAT: {
      state = updateFavorite(state, action.cat)
      break;
    }
  }
  return state;
};

export const reducers = combineReducers({
  data: dataReducer,
  view: viewReducer,
}); 