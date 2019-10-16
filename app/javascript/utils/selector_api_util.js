export const fetchSelectors = selector => $.ajax({
  url: '/api/selectors',
  data: {selector}
});

export const fetchAllSelectors = type => $.ajax({
  url: '/api/all_selectors/',
  data: {type}
});

export const fetchSelector = (selector, id)  => $.ajax({
  url: `/api/selectors/${id}`,
  data: {selector}
});

