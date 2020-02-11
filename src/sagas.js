import { 
    call, 
    put, 
    takeEvery, 
} from 'redux-saga/effects'

import uniqueId from 'lodash/uniqueId';

import { 
    CAT_FACTS_API_URL,
    GET_CATS
} from './constants';

export const fetchData = async () => {
    try {
      const response = await fetch(CAT_FACTS_API_URL);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

export const factsWithUniqueId = (data) => {
    let withUniqueIds = data;
    withUniqueIds.forEach((fact) => {
        fact.id = uniqueId('fact_');
      });
      return withUniqueIds;
}

function* fetchCatFacts(action) {
    try {
        const catData = yield call(fetchData);
        const facts = factsWithUniqueId(catData.data);
        // TODO slice out last word in cat fact
        yield put({type: "CATS_FACTS_SUCCEEDED", facts});
    } catch (e) {
        console.log(e.message);
        yield put({type: "CATS_FACTS_FAILED", message: e.message});
    }
 }

function* catSaga() {
    // TODO - use takeLatest?
    yield takeEvery(GET_CATS, fetchCatFacts);
}

export default catSaga;