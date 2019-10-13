import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArtistWiki from './artist_wiki_container';
import { fetchSelector } from '../../actions/selector_actions';

const fetchSelectorAssociations = (pathName, obj) => {
  const parsedAttributes = {};
  const dispatch = useDispatch();

  const assocVars = Object.entries(obj)
    .filter(attribute => typeof attribute[1] === 'number' && attribute[0] !== 'id')
    .map(att => [att[0].match(/(.+)(?=Id$)/)[0], att[1]]);

  assocVars.forEach(attribute => {
    const attributeVal = useSelector(state => {
      if (state.entities.selectors[attribute[0]]) {
        return state.entities.selectors[attribute[0]][attribute[1]].name;
      } else {
        return null;
      }
    })
    parsedAttributes[attribute[0]] = attributeVal;
  });

  return parsedAttributes;
};

export default (props) => {
  let { artist, pathName } = props;
  debugger
  const parsed = fetchSelectorAssociations(pathName, artist);
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
            <Link to={ `/artist-by-nationality/${ artist.nationalityId }` }>
              <span>{ parsed.nationality }</span>
            </Link>
          </li>
          <li className="artist-attribute-item">
            <s>School:</s>
            <Link to={ `/artist-by-school/${ artist.schoolId }` }>
              <span>{ parsed.school }</span>
            </Link>
          </li>
          <li className="artist-attribute-item">
            <s>Field:</s>
            <Link to={ `/artist-by-field/${ artist.fieldId }` }>
              <span>{ parsed.field }</span>
            </Link>
          </li>
          <li className="artist-attribute-item">
            <s>Art Movement:</s>
            <Link to={ `/artist-by-art-movement/${ artist.artMovementId }` }>
              <span>{ parsed.artMovement }</span>
            </Link>
          </li>
          <li className="artist-attribute-item">
            <s>Wikipedia:</s>
            <span>{ artist.wikiUrl }</span>
          </li>
        </ul>
      </article>
      <ArtistWiki artistId={ artist.id } artistWiki={ artist.wikiUrl }/>
    </div>
  );
}
