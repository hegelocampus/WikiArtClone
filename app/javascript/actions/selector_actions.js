import * as SelectorApiUtils from '../utils/selector_api_util';

export const RECEIVE_SELECTOR  = 'RECEIVE_SELECTOR';
export const RECEIVE_SELECTORS = 'RECEIVE_SELECTORS';

const receiveSelectors = (selectorName, selectors) => ({
  type: RECEIVE_SELECTORS,
  selectors,
  selectorName
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

export const fetchSelector = (selectorName, id) => dispatch => (
  SelectorApiUtils.fetchSelector(selectorName, id)
  .then(
    selector => dispatch(receiveSelector(selectorName, selector))
  )
)

