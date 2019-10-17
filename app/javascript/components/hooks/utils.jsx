import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  let parsedAttributes = {};

  useSelector(state => {
    if (obj) {
      Object.entries(obj).forEach(att => {
        if (typeof att[1] === 'number' && att[0] !== 'id') {
          let parsedName = att[0].match(/(.+)(?=Id$)/)[0];

          let selector = state.entities.selectors[parsedName];
          let attributeVal = (selector && selector[att[1]] ? (
            selector[att[1]]["name"]
          ) : (
            null
          ));
          parsedAttributes[parsedName] = attributeVal;
        }
      })
    }
  });

  return parsedAttributes;
};

