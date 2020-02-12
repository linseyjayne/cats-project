import { 
    call, 
    put, 
    takeLatest, 
} from 'redux-saga/effects'

import uniqueId from 'lodash/uniqueId';

import { 
    getCats
} from './actions';


import { 
    CAT_FACTS_API_URL,
    CAT_IMAGES_API_URL,
    GET_CATS, 
} from './constants';

export const fetchFactsData = async () => {
    try {
      const response = await fetch(CAT_FACTS_API_URL);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  export const fetchImagesData = async () => {
    try {
      const response = await fetch(CAT_IMAGES_API_URL);
      const data = await response.text();
      let parser;
      let xmlDoc;
      if (window.DOMParser) {
          parser = new DOMParser();
          xmlDoc = parser.parseFromString(data, "text/xml");
          xmlDoc = xmlDoc.getElementsByTagName("images")[0].children;
          var list = [];
          // iterate over elements in images node
          // for each element, take important attributes and convert to json object,
          // push to array to return to be consistent w/ facts data
          for (var i = 0; i < xmlDoc.length; i++)
          {
              var imageElement = xmlDoc[i].children;
              var image ={
                id: imageElement[0].innerHTML,
                url: imageElement[1].innerHTML,
                source_url: imageElement[2].innerHTML,
              };
              list.push(image);
          }
        }
        // TODO make IE happy
        // else // Internet Explorer
        // {
        //     xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        //     xmlDoc.async = false;
        //     xmlDoc.loadXML(data);
        // }
      return list;
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
    console.log("fetching");
    console.log(action);
    try {
        const catData = yield call(fetchFactsData);
        let facts = factsWithUniqueId(catData.data);
        facts = factsWithLastWordSliced(facts);
        yield put({type: "CATS_FACTS_SUCCEEDED", facts});
    } catch (e) {
        console.log(e.message);
        yield put({type: "CATS_FACTS_FAILED", message: e.message});
    }
 }

 function* fetchCatImages(action) {
    try {
        const images = yield call(fetchImagesData);
        yield put({type: "CATS_IMAGES_SUCCEEDED", images});
    } catch (e) {
        console.log(e.message);
        yield put({type: "CATS_IMAGES_FAILED", message: e.message});
    }
 }


function* catSaga() {
    // TODO - use takeLatest?
    yield takeLatest(GET_CATS, fetchCatFacts);
    // yield takeLatest(getCats, fetchCatImages);
}

export default catSaga;