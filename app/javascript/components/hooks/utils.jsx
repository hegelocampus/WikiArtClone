import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchSelector } from '../../actions/selector_actions'
import toTitleCase from '@gouch/to-title-case'

export const useActionOnOutsideClick = (ref, action) => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      action(event)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })
}

export const useFetchAssociations = (obj) => {
  const parsedAttributes = {}

  useSelector(state => {
    if (obj) {
      Object.entries(obj).forEach(att => {
        if (typeof att[1] === 'number' && att[0] !== 'id') {
          const parsedName = att[0].match(/(.+)(?=Id$)/)[0]

          const selector = state.entities.selectors[parsedName]
          const attributeVal = (selector && selector[att[1]] ? (
            selector[att[1]].name.toTitleCase()
          ) : (
            null
          ))
          parsedAttributes[parsedName] = attributeVal
        }
      })
    }
  })

  return parsedAttributes
}
