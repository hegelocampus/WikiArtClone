import React, { useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { fetchRandomArtistId } from '../../utils/artist_api_util.js';

export default () => {
  let history = useHistory();

  const [artistId, setArtistId] = useState(null);

  useEffect(() => {
    fetchRandomArtistId().then(({ id }) => {
      setArtistId(id);
    });
  });

  console.log(artistId);

  if (artistId === null) {
    return <span>Loading...</span>;
  } else {
    return <Redirect to={ `/${ artistId }` } />;
  }
}

