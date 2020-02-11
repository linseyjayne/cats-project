import { combineReducers } from 'redux';

const factsReducer = (state={}, action) => {
  switch(action.type) {
    case "CATS_FACTS_SUCCEEDED": {
      state = {...state, data: action.facts }
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