import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchAssociations } from '../hooks/utils';

export default ({ artist }) => {
  let parsed = useFetchAssociations(artist);

  if (!artist) return <span>...</span>;
  return (
    <article className="artist-attribute-section">
      <h3>{ artist.name }</h3>
      <ul className="artist-attributes">
        <li className="artist-attribute-item">
          <s>Born:</s>
          <span>{ artist.birthDate }</span>
        </li>
        <li className="artist-attribute-item">
          { artist.deathDate ? (
            <>
              <s>Died:</s>
              <span>{ artist.deathDate }</span>
            </>
          ) : (
            null
          )}
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
          <Link to={ `/artists-by-art-movement/${ artist['artMovementId'] }` }>
            <span>{ parsed['artMovement'] }</span>
          </Link>
        </li>
        <li className="artist-attribute-item">
          <s>Wikipedia:</s>
          <a href={ artist['wikiUrl'] }>
            <span>{ artist['wikiUrl'] }</span>
          </a>
        </li>
      </ul>
    </article>
  )
}

