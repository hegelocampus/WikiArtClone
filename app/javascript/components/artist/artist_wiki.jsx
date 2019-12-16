import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser'
import { fetchWiki } from '../../actions/wiki_actions';

export default ({ artistWiki }) => {
  let { artistId } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWiki(artistWiki, artistId))
  },
    [artistWiki, artistId]
  );

  const wikiText = useSelector(state => state.entities.wikis[artistId]);

  return (
    <React.Fragment>
      {wikiText ? (
        <div className="artist-wiki">
          <h4>Wikipedia article</h4>
          <div className="wiki-excerpt">
            { ReactHtmlParser (wikiText) }
          </div>
        </div>
      ) : (
        null
      )}
    </React.Fragment>
  )
}

