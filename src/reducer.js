import { combineReducers } from 'redux';

import {
  CATS_FACTS_SUCCEEDED,
  CATS_IMAGES_SUCCEEDED,
  FAVORITE_CARD
} from './constants';

const factsReducer = (state={}, action) => {
  switch(action.type) {
    case CATS_FACTS_SUCCEEDED: {
      //todo help this to have more than 25 facts (adding on instead of replacing)
      state = action.facts
      break;
    }
  }
  return state;
};

const imagesReducer = (state={}, action) => {
  switch(action.type) {
    case CATS_IMAGES_SUCCEEDED: {
      //todo help this to have more than 25 facts (adding on instead of replacing)
      state = action.images
      break;
    }
  }
  return state;
};

const favoritesReducer = (state=[], action) => {
  switch(action.type) {
    case FAVORITE_CARD: {
      state = [...state, action.newFavorite]
    }
  }
  return state;
};

export const reducers = combineReducers({
  facts: factsReducer,
  images: imagesReducer,
  favorites: favoritesReducer,
}); 