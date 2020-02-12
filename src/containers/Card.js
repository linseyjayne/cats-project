import { connect } from 'react-redux';
import Card from '../components/Card';

const mapDispatchToProps = dispatch => {
    return {
      handleFavoriteClick: () => dispatch({ type: "FAVORITE_CARD" }),
    }
  };

export default connect(null, mapDispatchToProps)(Card);
