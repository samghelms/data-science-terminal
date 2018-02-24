// let nextTodoId = 0
// export const addTodo = text => {
//   return {
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
//   }
// }
//  
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
//  
export const triggerCommand = stateReducer => {
  return {
    type: 'TRIGGER_COMMAND',
    stateReducer
  }
}

export const registerCommand = (name, command, test, context) => {
  return {
    type: 'REGISTER_COMMAND',
    name,   // name
    command,// function to change the state with
    test,   // string matching function
    context // should this command be called whenever we type "editor", 
            // for example? Or should it only be called from the terminal?
            // This parameter determines that.
  }
}
 
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const KeyMatches = {
  KEY_MATCH: 'TRIGGER_COMMAND'
}
