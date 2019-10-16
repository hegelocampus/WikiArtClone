import React from 'react';
//TODO Implement optional wikipedia page section for artworks

export default ({ artwork, parsed }) => {
  return (
    <div className="artwork-detail">
      <figure>
        <img src={artwork.imageUrl} className="artwork-detail-image" alt={`image of ${ artwork.name }`}/>
        <figcaption>{ artwork.imageCaption || '' }</figcaption>
      </figure>
      <article className="artwork-attribute-section">
        <h3>{ artwork.name }</h3>
        <h4>{ artwork.artist }</h4>
        <ul className="artwork-attributes">
          <li className="artwork-attribute-item">
            <s>Date:</s>
            <span>{ artwork.date }</span>
          </li>
          <li className="artwork-attribute-item">
            <s>Style:</s>
            <Link to={ `/artworks-by-style/${ artwork.styleId }` }>
              <span>{ parsed.style }</span>
            </Link>
          </li>
          <li className="artwork-attribute-item">
            <s>Genre:</s>
            <Link to={ `/artworks-by-genre/${ artwork.genreId }` }>
              <span>{ parsed.genre }</span>
            </Link>
          </li>
        </ul>
      </article>
      { artwork.wikiUrl ? (
        <ArtistWiki artworkId={ artwork.id } artworkWiki={ artwork.wikiUrl }/>
      ) : (
        null
      )}
    </div>
  );
}

