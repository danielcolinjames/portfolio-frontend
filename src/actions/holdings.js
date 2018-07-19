import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const HOLDINGS_REQUEST = '@@holdings/HOLDINGS_REQUEST';
export const HOLDINGS_SUCCESS = '@@holdings/HOLDINGS_SUCCESS';
export const HOLDINGS_FAILURE = '@@holdings/HOLDINGS_FAILURE';

export const getHoldings = () => ({
  [RSAA]: {
    endpoint: '/api/v1/balances/coins/latest/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      HOLDINGS_REQUEST, HOLDINGS_SUCCESS, HOLDINGS_FAILURE
    ]
  }
})
