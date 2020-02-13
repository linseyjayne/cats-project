import React from 'react';
import isEmpty from 'lodash/isEmpty';

import Card from '../Card/index';

const CatFacts = ({ data, handleFavoriteClick }) => {
    if (isEmpty(data)) return null;
    const items = data.map((cat) =>
      <li className="listItem" key={cat.image.id}>
        <Card cat={cat} onClick={handleFavoriteClick} />
      </li>
      );
    return (
      <div>
        <ul className="listOfCats">
          {items}
        </ul>
      </div>
      );
}

  export default CatFacts;