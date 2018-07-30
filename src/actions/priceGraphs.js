import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const GRAPHS_REQUEST = '@@graphs/GRAPHS_REQUEST';
export const GRAPHS_SUCCESS = '@@graphs/GRAPHS_SUCCESS';
export const GRAPHS_FAILURE = '@@graphs/GRAPHS_FAILURE';

export const getPriceGraph = (marketSlug) => ({
  [RSAA]: {
    endpoint: `/api/v1/markets/${marketSlug}/price_graph/`,
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      GRAPHS_REQUEST,
      {
        type: GRAPHS_SUCCESS,
        meta: { slug: marketSlug }
      },
      GRAPHS_FAILURE
    ]
  }
})
