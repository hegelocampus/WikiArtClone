import * as SelectorApiUtils from '../utils/selector_api_util';

export const RECEIVE_SELECTOR  = 'RECEIVE_SELECTOR';
export const RECEIVE_SELECTORS = 'RECEIVE_SELECTORS';
export const RECEIVE_ALL_SELECTORS = 'RECEIVE_ALL_SELECTORS';

const receiveSelectors = (selectorName, selectors) => ({
  type: RECEIVE_SELECTORS,
  selectors,
  selectorName
})

const receiveAllSelectors = (type, selectors) => ({
  type: RECEIVE_ALL_SELECTORS,
  selectors
})

const receiveSelector = (selectorName, selector) => ({
  type: RECEIVE_SELECTOR,
  selector,
  selectorName
})

export const requestSelectors = selectorName => dispatch => (
  SelectorApiUtils.fetchSelectors(selectorName)
  .then(
    selectors => dispatch(receiveSelectors(selectorName, selectors))
  )
)

//type will hold either artist or artwork, for now it just retuns all artists
export const requestAllSelectors = (type) => dispatch => (
  SelectorApiUtils.fetchAllSelectors(type)
  .then(
    selectors => dispatch(receiveAllSelectors(type, selectors))
  )
)

export const fetchSelector = (selectorName, id) => dispatch => (
  SelectorApiUtils.fetchSelector(selectorName, id)
  .then(
    selector => dispatch(receiveSelector(selectorName, selector))
  )
)

