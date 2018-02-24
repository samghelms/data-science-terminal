// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

// import appStore from './reducers'
// import App from './App'
require('events').EventEmitter.prototype._maxListeners = 100;
import startState from './config'
import build from '../common/createPane'
 
// let store = createStore(appStore)
//  
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// document.getElementById('app')
// )

let appRoot = document.getElementById('app')
createPane(startState)(appRoot)
// render(<App terminalName={"terminal"}/>, document.getElementById('app'));