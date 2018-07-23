import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const TOTALS_REQUEST = '@@totals/TOTALS_REQUEST';
export const TOTALS_SUCCESS = '@@totals/TOTALS_SUCCESS';
export const TOTALS_FAILURE = '@@totals/TOTALS_FAILURE';

export const getTotalHoldings = () => ({
  [RSAA]: {
    endpoint: '/api/v1/balances/total/latest/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      TOTALS_REQUEST, TOTALS_SUCCESS, TOTALS_FAILURE
    ]
  }
})
