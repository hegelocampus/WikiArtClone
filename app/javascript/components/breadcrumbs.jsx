import React from 'react'
import { useParams, useLocation, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default (props) => {
  const { artistId, artworkId } = useParams()
  const location = useLocation().pathname

  const artist = useSelector(state => state.entities.artists[artistId])
  const artwork = useSelector(state => state.entities.artworks[artworkId])
  const artMovement = useSelector(state => {
    return artist && artist.artMovementId ? state.entities.selectors.artMovement[artist.artMovementId] : 'unknown'
  })

  const slicedPath = location.split('/')
  const prettyPath = []

  switch (slicedPath.length) {
    case 3:
      if (artwork) {
        prettyPath.unshift(
          <NavLink
            key='artwork'
            to={`/${artworkId}`}
          >
            {artwork.name}
          </NavLink>
        )
      }
    case 2:
      if (artist) {
        prettyPath.unshift(
          <NavLink
            key='artist'
            to={`/${artistId}`}
          >
            {artist.name}
          </NavLink>
        )
        prettyPath.unshift(
          <NavLink
            key='movement'
            to={`/artists-by-art-movement/${artMovement.id}`}
          >
            {artMovement.name}
          </NavLink>
        )
      }
    case 1:
      prettyPath.unshift(
        <NavLink
          key='root'
          to='/'
        >
          Home
        </NavLink>
      )
  }

  return (
    <div className='bread-crumbs'>
      {prettyPath.map((item, i) => {
        if (i != 0) {
          return (
            <React.Fragment key={i}>
              <s>/</s>
              {item}
            </React.Fragment>
          )
        } else {
          return (
            <React.Fragment key={i}>
              {item}
            </React.Fragment>
          )
        }
      })}
    </div>
  )
}
