import { connect } from 'react-redux';
import App from './App';
import { 
  getCats,
  favoriteCard
 } from './actions';

const mapStateToProps = state => {
  return {
    facts: state.facts,
    images: state.images,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      handleCatsClick: () => dispatch(getCats()),
      handleFavoriteClick: (facts) => {
        dispatch(favoriteCard(facts));
      },
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
