import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';

import { fetchSelector } from '../../actions/selector_actions';
import { requestArtistsBySelector } from '../../actions/artist_actions';

export default (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const mainSelector = match.params.selector
    .replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
    });

  useEffect(() => {
    dispatch(requestArtistsBySelector({
      [mainSelector]: match.params.SubSelId
    }));
    dispatch(fetchSelector(mainSelector, match.params.SubSelId))
  },
  [props, match]
  )

  const artists = useSelector(state => Object.values(state.entities.artists));
  const subSelector = useSelector(state => {
    console.log(state.entities.selectors[mainSelector]);
    if (state.entities.selectors[mainSelector]) {
      return state
      .entities
      .selectors[mainSelector][match.params.SubSelId]
    } else {
      return null;
    }
  });

  let artistLis;
  artists.length > 0 ? (
    artistLis = artists.map(({ id, name }) => (
      <li key={`artist-${ id }`}>
        <Link to={ `/${ id }` }>
          { name }
        </Link>
      </li>
    ))
  ) : (
    null
  );

  return (
    <React.Fragment>
      <h2>{ subSelector }</h2>
      <ul className="artist-ul">
        { artistLis }
      </ul>
    </React.Fragment>
  )
}

