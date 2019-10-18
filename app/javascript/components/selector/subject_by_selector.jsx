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
import { requestArtworksBySelector } from '../../actions/artwork_actions';
import ArtistTile from '../artist/artist_tile';
import ArtworkTile from '../artist/artwork/artwork_tile';

export default (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { type } = props;

  const mainSelector = match.params.selector
    .replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
    });

  useEffect(() => {
    if (type === 'artists') {
      dispatch(requestArtistsBySelector({
        [mainSelector]: match.params.SubSelId
      }));
    } else if (type === 'artworks') {
      dispatch(requestArtworksBySelector({
        [mainSelector]: match.params.SubSelId
      }));
    }
    dispatch(fetchSelector(mainSelector, match.params.SubSelId))
  },
  [props, match]
  )

  const _artists = useSelector(state => state.entities.artists);
  const subjects = useSelector(state => Object.values(state.entities[type]));
  const subSelector = useSelector(state => {
    if (state.entities.selectors[mainSelector]) {
      return state
      .entities
      .selectors[mainSelector][match.params.SubSelId].name
    } else {
      return null;
    }
  });

  let subjectLis;
  subjects.length > 0 ? (
    subjectLis = subjects.map(subject => {
      console.log(subject);
      if (type === 'artists') {
        return (
          <ArtistTile
            artist={ subject }
            key={ subject.id }
          />
        )
      } else if (type === 'artworks') {
        return (
          <ArtworkTile
            artist={ _artists[subject.artistId] }
            artwork={ subject }
            key={ subject.id }
          />
        )
      }
    })
  ) : (
    null
  );

  return (
    <React.Fragment>
      <div className="selectors-title">
        <h2>{ subSelector }</h2>
      </div>
      <ul className='subject-ul' >
        { subjectLis }
      </ul>
    </React.Fragment>
  )
}

