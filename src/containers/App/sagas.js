import { 
    call, 
    put, 
    takeLatest, 
} from 'redux-saga/effects'

import { 
    fetchCatDataSuccess,
    fetchCatDataFail,
} from './actions';

import { 
    CAT_FACTS_API_URL,
    CAT_IMAGES_API_URL,
    GET_CATS, 
} from './constants';

export const fetchFacts = async () => {
    try {
      const response = await fetch(CAT_FACTS_API_URL);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

export const fetchImages = async () => {
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

export const stitchTogetherCatsAndFacts = (images, facts) => {
    let catsAndFacts = [];
    for (var i =0; i < images.length; i++) {
        catsAndFacts.push({ image: images[i], fact: facts[i], isFavorite: false });
    }
    return catsAndFacts;
};

function* getData() {
    try {
        const images = yield call(fetchImages);
        let facts = yield call(fetchFacts);
        facts = factsWithLastWordSliced(facts.data);

        let data = {};
        // TODO - what do we do if we get uneven lengths???
        if (images.length === facts.length)
        {
            data = stitchTogetherCatsAndFacts(images, facts);
        }
        yield put(fetchCatDataSuccess(data));
    } catch (e) {
        console.log(e.message);
        yield put(fetchCatDataFail(e.message));
    }
}

function* catSaga() {
    yield takeLatest(GET_CATS, getData);
}

export default catSaga;