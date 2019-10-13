import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ArtistDetail from './artist_detail'

export default class Artist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestArtist(this.props.match.params.artistId);
  }

  render (){
    const artist = this.props.artist;
    return (
      <React.Fragment>
        /Bread/Crumbs/Go/Here
        <Switch>
          <Route path={'/:artistName/:artworkName'}>
            <h1>Artwork show page</h1>
          </Route>
          <Route path={'/:artistName'}>
            { artist ? <ArtistDetail artist={ artist } pathName={ this.props.location.pathname } /> : null }
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
}

