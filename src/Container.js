import { connect } from 'react-redux';
import App from './App';
import { 
  getCats,
  favoriteCard
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
        dispatch(favoriteCard(fact));
      },
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
