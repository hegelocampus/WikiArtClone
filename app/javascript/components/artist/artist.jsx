import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import ArtistDetail from './artist_detail'
import Artwork from './artwork/artwork'
import useBreadcrumbs from '../breadcrumbs'

// <BreadcrumbsItem exact weight={ 0 } to='/'>Home</BreadcrumbsItem>
export default (props) => {
  return (
    <div className='artist-container'>
      <Switch>
        <Route path='/:artistId/:artworkId' component={Artwork} />
        <Route path='/:artistId' component={ArtistDetail} />
      </Switch>
    </div>
  )
}
