import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const TRADES_REQUEST = '@@trades/TRADES_REQUEST';
export const TRADES_SUCCESS = '@@trades/TRADES_SUCCESS';
export const TRADES_FAILURE = '@@trades/TRADES_FAILURE';

export const getTradesForCoin = (coin) => ({
  [RSAA]: {
    endpoint: `/api/v1/trades/?coin=${coin}`,
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      TRADES_REQUEST,
      {
        type: TRADES_SUCCESS,
        meta: { coin }
      },
      TRADES_FAILURE
    ]
  }
})
