import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelector } from '../../actions/selector_actions';

export const useActionOnOutsideClick = (ref, action) => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      action(event);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
}

export const useFetchAssociations = (obj) => {
  const parsedAttributes = {};
  const dispatch = useDispatch();

  let assocVars = [];

  if (obj) {
    assocVars = Object.entries(obj)
      .filter(attribute => typeof attribute[1] === 'number' && attribute[0] !== 'id')
      .map(att => [att[0].match(/(.+)(?=Id$)/)[0], att[1]]);
  }

  useSelector(state => {
    let attributeVal;
    assocVars.forEach(attribute => {
      if (state.entities.selectors[attribute[0]]) {
        attributeVal = state.entities.selectors[attribute[0]][attribute[1]];
      } else {
        attributeVal = null;
      }
      parsedAttributes[attribute[0]] = attributeVal;
    })
  });

  return parsedAttributes;
};

