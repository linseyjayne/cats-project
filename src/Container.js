import { connect } from 'react-redux';
import App from './App';
import { GET_CATS } from './constants';

const mapStateToProps = state => {
  return {
    facts: state.facts,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      handleCatsClick: () => dispatch({ type: GET_CATS }),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
