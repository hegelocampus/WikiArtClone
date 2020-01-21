var AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': AUTH_TOKEN
  },
  dataType: 'json',
  error: (e, type) => alert(`${e} \n ${type}`)
});

export const signup = user => $.ajax({
  url: '/api/users',
  method: 'post',
  data: { user }
}).then(response => ({response}));

export const login = user => $.ajax({
  url: '/api/session',
  method: 'post',
  data: { user }
}).then(response => ({response}));

export const logout = () => $.ajax({
  url: '/api/session',
  method: 'delete'
}).then(response => ({response}));

