import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const GET_CURRENT_USER_REQUEST = '@@users/GET_CURRENT_USER_REQUEST';
export const GET_CURRENT_USER_SUCCESS = '@@users/GET_CURRENT_USER_SUCCESS';
export const GET_CURRENT_USER_FAILURE = '@@users/GET_CURRENT_USER_FAILURE';

export const getCurrentUser = () => ({
  [RSAA]: {
    endpoint: '/api/v1/users/current_user/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      GET_CURRENT_USER_REQUEST, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAILURE
    ]
  }
})
