import React from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import ArtistForm from './artist_form_container';

export const NEW = 'NEW';
export const EDIT = 'EDIT';

export default (props) => {
  const match = useRouteMatch();
  const history = useHistory();
  return (
    <Switch>
      <Route path={`${match.url}/new`}>
        <ArtistForm formType={ NEW } history={ history }/>
      </Route>
      <Route path={`${match.url}/:artistId/new`}>
        <null formType={ NEW } history={ history }/>
      </Route>
      <Route path={`${match.url}/:artistId/:artworkId`}>
        <null formType={ EDIT } />
      </Route>
      <Route path={`${match.url}/:artistId`}>
        <ArtistForm formType={ EDIT } />
      </Route>
    </Switch>
  )
}
