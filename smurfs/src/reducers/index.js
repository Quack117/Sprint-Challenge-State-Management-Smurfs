/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL } from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
 
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
  //  addingSmurf: false
  //  updatingSmurf: false
  //  deletingSmurf: false
   error: ''
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_SMURFS_START:
    return {
      ...state,
      fetchingSmurfs: true,
      error: ""
    };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ''

      }
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
export default reducer;