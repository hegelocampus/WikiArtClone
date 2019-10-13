import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ArtistDetail from './artist_detail'
import { requestArtist } from '../../actions/artist_actions';

export default (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArtist(props.match.params.artistId));
  },
  [props.match]
  )

  const artist = useSelector(state => (
    state.entities.artists[props.match.params.artistId]
  ));

  return (
    <React.Fragment>
      /Bread/Crumbs/Go/Here
      <Switch>
        <Route path={'/:artistName/:artworkName'}>
          <h1>Artwork show page</h1>
        </Route>
        <Route path={'/:artistName'}>
          { artist ? <ArtistDetail artist={ artist } /> : null }
        </Route>
      </Switch>
      <h1>[Artist's famous artworks]</h1>
      <Switch>
        <Route path={'/:artistName/:artworkName'}>
          <h1>Related Artworks</h1>
        </Route>
        <Route path={'/:artistName'}>
          <h1>Featured Artworks</h1>
        </Route>
      </Switch>
    </React.Fragment>
  )
}

