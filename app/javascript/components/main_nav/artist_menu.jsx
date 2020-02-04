import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export default () => {
  const [visable, setVisable] = useState(false);

  return (
    <>
      <a
        className={`main-nav-main-cat${(visable ? ' main-nav-visable' : '')}`}
        onClick={() => visable ? setVisable(false) : setVisable(true)}
      >
        <h4>Artists</h4>
      </a>
      <CSSTransition
        in={visable}
        timeout={700}
        unmountOnExit
        classNames='slide'
      >
        <ul key='main-nav-ul' className='main-nav-subselectors'>
          <li>
            <Link to='/artists-by-art-movement'>
              <h5>Art movements</h5>
            </Link>
          </li>
          <li>
            <Link to='/artists-by-field'>
              <h5>Fields</h5>
            </Link>
          </li>
          <li>
            <Link to='/artists-by-nationality'>
              <h5>Nationalities</h5>
            </Link>
          </li>
          <li>
            <Link to='/artists-by-school'>
              <h5>Art institutions</h5>
            </Link>
          </li>
        </ul>
      </CSSTransition>
    </>
  );
};
