import { combineReducers } from 'redux'
 
const visibilityFilter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const keysReducer = (state = {}, action) => {
  switch (action.type) {
    case 'KEY_MATCH':
      return {...actions.matchFn(action)}
    default:
      return state
  }
}

const addCommandContext = (action, commandContexts) => (
  {...commandContexts, 
     [action.context]: {...commandContexts[action.context], [action.name]: {test: action.test, command: action.command}}
  }
)

const registerCommand = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_COMMAND':
    console.log("registering command")
      return {...state, "commandContexts": addCommandContext(action.commandContexts)}
    default:
      return state
  }
}
 
const appStore = combineReducers({
	visibilityFilter,
  registerCommand,
	keysReducer

})
 
export default appStore