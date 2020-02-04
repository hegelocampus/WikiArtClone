const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const LOGIN = createRequestTypes('USER');

const action = (type, payload = {}) => ({ type, ...payload });

export const user = {
  request: login => action(USER[REQUEST], { login }),
  success: (login, response) => action(USER[SUCCESS], { login, response }),
  failure: (login, error) => action(USER[FAILURE], { login, error })
};
