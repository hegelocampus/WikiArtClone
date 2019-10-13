export const fetchSelectors = selector => $.ajax({
  url: '/api/selectors',
  data: {selector}
});

export const fetchSelector = (selector, id)  => $.ajax({
  url: `/api/selectors/${id}`,
  data: {selector}
});

