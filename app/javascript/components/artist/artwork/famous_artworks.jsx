import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { requestArtwork } from '../../../actions/artwork_actions';
import ArtworkTile from './artwork_tile';

export default (props) => {
  const params = useParams();
  const { artworkId, artistId } = params;
  const dispatch = useDispatch();

  const artist = useSelector(state => (
    state.entities.artists[artistId]
  ));

  const artists = useSelector(state => (
    state.entities.artists
  ));

  const artworks = useSelector(state => {
    return state.entities.artworks;
  });

  const artistArtworks = (artist && artist.artworks) ? (
    Object.values(artworks).filter(val => {
      return val.artistId === artist.id && val.id != artworkId;
    })
  ) : [];

  const artworkLis = artistArtworks.map(work => (
    <ArtworkTile artist={artists[work.artistId]} artwork={work} key={work.id} />
  ));

  return (
    <>
      {artworkLis.length > 0 ? (
        <div className='famous-works-container'>
          <div className='famous-works-title-container'>
            <span>{artist.name} •</span>
            <span>famous works</span>
          </div>
          <div className='famous-works-ul-container'>
            <ul className='famous-works-ul'>
              {artworkLis}
            </ul>
          </div>
        </div>
      ) : (
        null
      )}
    </>
  );
};
