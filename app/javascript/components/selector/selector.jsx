import React from 'react'
import {
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom'
import SelectorSubjects from './subject_by_selector'
import SelectorIndex from './selector_index'

export default ({ type }) => {
  const match = useRouteMatch()

  return (
    <div className='selector-container'>
      <Switch>
        <Route
          path={`${match.path}/:SubSelId`}
        >
          <SelectorSubjects type={type} />
        </Route>
        <Route
          path={match.path}
        >
          <SelectorIndex type={type} />
        </Route>
      </Switch>
    </div>
  )
}
