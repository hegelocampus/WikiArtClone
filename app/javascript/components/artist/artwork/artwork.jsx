import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import ArtworkAttributes from './artwork_attributes'
import { requestArtwork } from '../../../actions/artwork_actions'
import FamousArtworks from './famous_artworks'
import Breadcrumbs from '../../breadcrumbs'

// TODO Implement optional wikipedia page section for artworks

export default (props) => {
  const params = useParams()
  const { artworkId, artistId } = params
  const dispatch = useDispatch()

  const artwork = useSelector(state => (
    state.entities.artworks[artworkId]
  ))

  const artist = useSelector(state => (
    state.entities.artists[artistId]
  ))

  useEffect(() => {
    dispatch(requestArtwork(artistId, artworkId))
  },
  [params, artistId, artworkId]
  )

  return (
    <>
      {artwork ? (
        <>
          <Breadcrumbs />
          <div className='artwork-detail'>
            <aside className='work-detail-image-container'>
              <div>
                <img
                  src={artwork.imageUrl}
                  className='artwork-detail-image'
                  alt={`image of ${artwork.name}`}
                />
              </div>
              <span>
                {artwork.imageCaption ? artwork.imageCaption.toTitleCase() : ''}
              </span>
            </aside>
            <ArtworkAttributes artwork={artwork} artist={artist} />
            <section className='artist-famous-artworks'>
              <FamousArtworks
                artist={artist}
                currentArtworkId={artwork.id}
              />
            </section>
          </div>
        </>
      ) : (
        <ClipLoader
          sizeUnit='px'
          size={150}
          loading
        />
      )}
    </>
  )
}
