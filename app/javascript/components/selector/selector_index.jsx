import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestSelectors } from '../../actions/selector_actions';

export default (props) => {
  const dispatch = useDispatch();
  const mainSelector = props.match.params.selector
    .replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
    });

  useEffect(() => {
    dispatch(requestSelectors(mainSelector));
  },
  [props.match]
  )

  const selectors = useSelector(state => {
    let sel =  state.entities.selectors[mainSelector];
    return (sel ? Object.entries(sel) : sel);
  });

  let selectorLis;
  selectors ? (
    selectorLis = selectors.map(keyVal => (
      <li key={`subSel-${keyVal[0]}`}>
        <Link to={ `/artists-by-${mainSelector}/${keyVal[0]}` }>
          { keyVal[1] }
        </Link>
      </li>
    ))
  ) : (
    null
  );

  return (
    <React.Fragment>
      <div className="selectors-title">
        <h2>{ `artists by ${ props.match.params.selector.replace(/\-/ig, ' ') }` }</h2>
      </div>
      <ul className="selectors-ul">
        { selectorLis }
      </ul>
    </React.Fragment>
  )
}

