import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import TopBar from './top_bar/top_bar';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import AuthModal from './auth_modal/auth_modal.jsx';
import MainNav from './main_nav/main_nav';
import Artist from './artist/artist';
import RandomArtist from './artist/random_artist.jsx';
import Footer from './footer/footer';

const Edit = lazy(() => import('./edit/edit.jsx'));
const Selector = lazy(() => import('./selector/selector'));

export default () => (
  <>
    <TopBar />
    <main>
      <MainNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/profile/:userId'>
            <h1>User show page</h1>
          </Route>
          <ProtectedRoute path='/edit' component={Edit} />
          <Route
            path='/artworks-by-:selector'
          >
            <Selector type='artworks' />
          </Route>
          <Route
            path='/artists-by-:selector'
          >
            <Selector type='artists' />
          </Route>
          <Route path={'/:artistId(\\d+)'} component={Artist} />
          <Route path='/' component={RandomArtist} />
        </Switch>
      </Suspense>
      <Footer />
    </main>
  </>
);
