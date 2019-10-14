import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import SelectorArtists from './selector_artists';
import SelectorIndex from './selector_index';

export default (props) => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:SubSelId`} component={ SelectorArtists }/>
      <Route path={ match.path } component={ SelectorIndex } />
    </Switch>
  );
}

