import React, {
  useState,
  useRef,
} from 'react';
import { useActionOnOutsideClick } from '../hooks/utils';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';


export default (props) => {
  let match = useRouteMatch(["/:artistId(\\d+)/:artworkId", "/:artistId(\\d+)"]);
  const { artistId, artworkId } = (match ? match.params : {});
  const [visable, setVisable] = useState(false);
  const dropDown = useRef(null);

  useActionOnOutsideClick(dropDown, () => setVisable(false));

  return (
    <div className="top-menu-edit-menu-wrapper" ref={ dropDown }>
      { artistId ? (
        <>
          <a className="top-menu-edit-menu"
            onClick={ () => visable ? setVisable(false) : setVisable(true) }
          >
            Actions
          </a>
          { visable ? (
            <ul className="top-menu-edit-menu-list">
              { artworkId ? (
                <li>
                  <Link
                    to={ `/edit/${ artistId }/${ artworkId }` }
                    className="edit-menu-link"
                  >
                    Edit
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to={ `/edit/${ artistId }` }
                      className="edit-menu-link"
                    >
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={ `/edit/${ artistId }/new` }
                      className="edit-menu-link"
                    >
                      Add Artwork
                    </Link>
                  </li>
                </>
              )}
            </ul>
          ) : (
            null
          )}
        </>
      ) : (
        null
      )}
    </div>
  )
}
