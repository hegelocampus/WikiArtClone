import React from 'react';
import { Route } from 'react-router-dom';
import { Breadcrumb } from 'react-breadcrumbs';

export default ({
  component: Component,
  includeSearch = false,
  render,
  ...props
}) => (
  <Route
    {...props} render={routeProps => (
      <Breadcrumb data={{
    	title: props.title,
    	pathname: routeProps.match.url,
    	search: includeSearch ? routeProps.location.search : null
      }}
      >
        {Component ? <Component {...routeProps} /> : render(routeProps)}
      </Breadcrumb>
    )}
  />
);
