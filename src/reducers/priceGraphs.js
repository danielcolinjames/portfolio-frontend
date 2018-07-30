import * as graphs from '../actions/priceGraphs';

const initialState = {}

export default (state=initialState, action) => {
  switch(action.type) {
    case graphs.GRAPHS_SUCCESS:
      return {...state, [action.meta.slug]: action.payload};
    default:
      return state
  }
}
