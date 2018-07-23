import * as graphs from '../actions/priceGraphs';

const initialState = {}

export default (state=initialState, action) => {
  switch(action.type) {
    case graphs.GRAPHS_SUCCESS:
      return {...state, [action.meta.uuid]: action.payload};
    default:
      return state
  }
}
