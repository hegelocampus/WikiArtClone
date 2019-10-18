import React from 'react';
import {
  Link
} from 'react-router-dom';

export default ({ artist: {id, name, imageUrl } }) => {
  return (
    <li
       key={ `subject-${ id }` }
       className='subject-li'
     >
        <Link to={ `/${ id }` }>
          <figure className='subject-li-fig' >
            <img
              src={ imageUrl }
              alt={`${ name } profile image`}
            />
          </figure>
          <span>{ name }</span>
        </Link>
      </li>
  )
}

