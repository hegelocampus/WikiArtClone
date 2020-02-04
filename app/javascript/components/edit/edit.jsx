import React from 'react';
import { Route, Switch, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import ArtistForm from './artist_form_container';
import ArtworkForm from './artwork_form_container';

export const NEW = 'NEW';
export const EDIT = 'EDIT';

export default (props) => {
  const match = useRouteMatch();
  const params = useParams();
  const history = useHistory();
  return (
    <Switch>
      <Route path={`${match.url}/new`}>
        <ArtistForm formType={NEW} history={history} />
      </Route>
      <Route path={`${match.url}/:artistId/new`}>
        <ArtworkForm formType={NEW} history={history} match={match} />
      </Route>
      <Route path={`${match.url}/:artistId/:artworkId`}>
        <ArtworkForm formType={EDIT} history={history} />
      </Route>
      <Route path={`${match.url}/:artistId`}>
        <ArtistForm formType={EDIT} />
      </Route>
    </Switch>
  );
};
