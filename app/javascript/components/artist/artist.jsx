import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ArtistDetail from './artist_detail'
import { requestArtist } from '../../actions/artist_actions';
import { useFetchAssociations } from '../hooks/utils';

export default (props) => {
  const dispatch = useDispatch();

  //const artistRef = useRef();

  const artist = useSelector(state => (
    state.entities.artists[props.match.params.artistId]
  ));
  useEffect(() => {
    dispatch(requestArtist(props.match.params.artistId));
  },
  [props]
  )

  let parsed = useFetchAssociations(artist);

  return (
    <div className="artist-container">
      <h2>
        /Bread/Crumbs/Go/Here
      </h2>
      <Switch>
        <Route path={'/:artistName/:artworkName'}>
          <h1>Artwork show page</h1>
        </Route>
        <Route path={'/:artistName'}>
          { artist ? <ArtistDetail artist={ artist } parsed={ parsed } /> : null }
        </Route>
      </Switch>
      <h1>[Artist's famous artworks]</h1>
      <h1>Related Artworks</h1>
      <h1>Featured Artworks</h1>
    </div>
  )
}

