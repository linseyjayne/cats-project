import { connect } from 'react-redux';
import App from './App';
import { 
  getCats,
  favoriteCat,
  displayFavorites,
  sortByLastWord,
  showOneCat,
 } from './actions';

const mapStateToProps = state => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      handleCatsClick: () => dispatch(getCats()),
      handleFavoriteClick: (fact) => {
        dispatch(favoriteCat(fact));
      },
      handleDisplayFavoritesClick: () => dispatch(displayFavorites()),
      handleSortByLastClick: () => dispatch(sortByLastWord()),
      handleShowOneCat: () => dispatch(showOneCat()),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
