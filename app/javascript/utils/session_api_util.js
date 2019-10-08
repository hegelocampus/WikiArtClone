var AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': AUTH_TOKEN
  }
});

export const signup = user => $.ajax({
  url: '/api/users',
  method: 'post',
  data: { user }
});

export const login = user => $.ajax({
  url: '/api/session',
  method: 'post',
  data: { user }
});

export const logout = () => $.ajax({
  url: '/api/session',
  method: 'delete'
});

