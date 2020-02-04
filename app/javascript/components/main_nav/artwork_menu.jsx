import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

export default () => {
  const [visable, setVisable] = useState(false)

  return (
    <>
      <a
        className={`main-nav-main-cat${(visable ? ' main-nav-visable' : '')}`}
        onClick={() => visable ? setVisable(false) : setVisable(true)}
      >
        <h4>Artworks</h4>
      </a>
      <CSSTransition
        in={visable}
        timeout={700}
        unmountOnExit
        classNames='slide'
      >
        <ul className='main-nav-subselectors'>
          <li>
            <Link to='/artworks-by-style'>
              <h5>Styles</h5>
            </Link>
          </li>
          <li>
            <Link to='/artworks-by-genre'>
              <h5>Genres</h5>
            </Link>
          </li>
        </ul>
      </CSSTransition>
    </>
  )
}
