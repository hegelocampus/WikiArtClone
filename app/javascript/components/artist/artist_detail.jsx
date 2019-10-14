import React from 'react';
import { Link } from 'react-router-dom';
import ArtistWiki from './artist_wiki_container';

export default ({ artist, parsed }) => {
  return (
    <div className="artist-detail">
      <figure>
        <img src={artist.imageUrl} className="artist-detail-image" alt={`image of ${ artist.name }`}/>
        <figcaption>{ artist.imageCaption || '' }</figcaption>
      </figure>
      <article>
        <h3>{ artist.name }</h3>
        <ul className="artist-attributes">
          <li className="artist-attribute-item">
            <s>Born:</s>
            <span>{ artist.birthDate }</span>
          </li>
          <li className="artist-attribute-item">
            <s>Died:</s>
            <span>{ artist.deathDate }</span>
          </li>
          <li className="artist-attribute-item">
            <s>Nationality:</s>
            <Link to={ `/artists-by-nationality/${ artist.nationalityId }` }>
              <span>{ parsed.nationality }</span>
            </Link>
          </li>
          <li className="artist-attribute-item">
            <s>School:</s>
            <Link to={ `/artists-by-school/${ artist.schoolId }` }>
              <span>{ parsed.school }</span>
            </Link>
          </li>
          <li className="artist-attribute-item">
            <s>Field:</s>
            <Link to={ `/artists-by-field/${ artist.fieldId }` }>
              <span>{ parsed.field }</span>
            </Link>
          </li>
          <li className="artist-attribute-item">
            <s>Art Movement:</s>
            <Link to={ `/artists-by-art-movement/${ artist.artMovementId }` }>
              <span>{ parsed.artMovement }</span>
            </Link>
          </li>
          <li className="artist-attribute-item">
            <s>Wikipedia:</s>
            <span>{ artist.wikiUrl }</span>
          </li>
        </ul>
      </article>
      { artist.wikiUrl ? (
        <ArtistWiki artistId={ artist.id } artistWiki={ artist.wikiUrl }/>
      ) : (
        null
      )}
    </div>
  );
}
