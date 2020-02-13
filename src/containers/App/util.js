export function addFavoriteCat(state, favoriteId) {
    let catData = state;
    catData.forEach((cat) => {
      if (cat.image.id === favoriteId)
        cat.isFavorite = true;
    });
    return catData;
  }
  
  export function sortCatsByLastWord(state) {
    let sortedList = state;
    sortedList.sort(function(cat1, cat2) {
        // cat1 should come before cat2 in the sorted order
        if(cat1.fact.lastWord < cat2.fact.lastWord){
            return -1;
            // cat1 should come after cat2 in the sorted order
        }else if(cat1.fact.lastWord > cat2.fact.lastWord){
            return 1;
            // cat1 and cat2 are the same
        }else{
            return 0;
      } 
    });
    return sortedList;
  }
  
  export function getOnlyFavoriteCats(state) {
    let favorites = [];
    state.forEach((cat) => {
      if (cat.isFavorite) {
        favorites.push(cat);
      }
    });
    return favorites;
  }
  
  export function selectOneCat(state) {
    const alphaCat = state[Math.floor(Math.random()*state.length)]; 
    return [alphaCat];
  }
  