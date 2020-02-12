import { connect } from 'react-redux';
import Card from '../components/Card';

import {
  favoriteCard
} from '../actions';

const mapDispatchToProps = dispatch => {
    return {
      handleFavoriteClick: (data) => dispatch(favoriteCard(data)),
    }
  };

export default connect(null, mapDispatchToProps)(Card);
