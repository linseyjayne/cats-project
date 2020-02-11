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

// maybe TODO
// optimize factsWithUniqueId + factsWithLastWordSliced so that
// we only loop through the data one time

export const factsWithUniqueId = (data) => {
    let withUniqueIds = data;
    withUniqueIds.forEach((fact) => {
        fact.id = uniqueId('fact_');
      });
      return withUniqueIds;
}

export const stripNonAlphaNumeric = (word) => {
    const alphaNumericOnly = word.replace(/[^A-Za-z0-9]/g, "");
    return alphaNumericOnly;
}

export const factsWithLastWordSliced = (data) => {
    let withLastWords = data;
    withLastWords.forEach((fact) => {
        var fullFact = fact.fact;
        var startOfLastWord = fullFact.lastIndexOf(" ") + 1;
        var lastWord = fullFact.substring(startOfLastWord, fullFact.length);
        fact.lastWord = stripNonAlphaNumeric(lastWord);
    });
    return withLastWords;
}

function* fetchCatFacts(action) {
    try {
        const catData = yield call(fetchData);
        let facts = factsWithUniqueId(catData.data);
        facts = factsWithLastWordSliced(facts);
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