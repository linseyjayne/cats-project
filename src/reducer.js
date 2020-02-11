import { combineReducers } from 'redux';

const factsReducer = (state={}, action) => {
  switch(action.type) {
    case "CATS_FACTS_SUCCEEDED": {
      //todo help this to have more than 25 facts (adding on instead of replacing)
      state = action.facts
      break;
    }
  }
  return state;
};

const imagesReducer = (state={}, action) => {
  return state;
};

export const reducers = combineReducers({
  facts: factsReducer,
  images: imagesReducer,
}); 