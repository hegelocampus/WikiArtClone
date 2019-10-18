import React, {
  useEffect
} from 'react';
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
    if (state.entities.selectors[mainSelector]) {
      return state
      .entities
      .selectors[mainSelector][match.params.SubSelId].name
    } else {
      return null;
    }
  });

  let artistLis;
  artists.length > 0 ? (
    artistLis = artists.map(({ id, name, imageUrl }) => (
      <li key={`artist-${ id }`} className="artist-li">
        <Link to={ `/${ id }` }>
          <figure className="artist-li-fig">
            <img src={ imageUrl } alt={`${ name } profile image`} />
          </figure>
          <span>{ name }</span>
        </Link>
      </li>
    ))
  ) : (
    null
  );

  return (
    <React.Fragment>
      <div className="selectors-title">
        <h2>{ subSelector }</h2>
      </div>
      <ul className="artist-ul">
        { artistLis }
      </ul>
    </React.Fragment>
  )
}

