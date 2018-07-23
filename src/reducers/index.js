import { combineReducers } from 'redux';
import auth, * as fromAuth from './auth.js'
import holdings from './holdings.js'
import totals from './totals.js'
import graphs from './priceGraphs.js'
import trades from './trades.js'

export default combineReducers({
  auth,
  holdings,
  totals,
  graphs,
  trades
});

export const isAuthenticated =
  state => fromAuth.isAuthenticated(state.auth)

export const accessToken =
  state => fromAuth.accessToken(state.auth)

export const isAccessTokenExpired =
  state => fromAuth.isAccessTokenExpired(state.auth)

export const refreshToken =
  state => fromAuth.refreshToken(state.auth)

export const isRefreshTokenExpired =
  state => fromAuth.isRefreshTokenExpired(state.auth)

export const authErrors =
  state => fromAuth.errors(state.auth)


export function withAuth(headers={}) {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}
