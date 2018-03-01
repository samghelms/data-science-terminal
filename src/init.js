// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

// import appStore from './reducers'
// import App from './App'
import Pane from './components/pane'
import Shell from './components/shell'
import AceEditor from './components/aceEditor'
import {componentTypes, components } from './components'

require('events').EventEmitter.prototype._maxListeners = 1000;

// const term = new State(componentTypes.xterm, [], {})
// const shell = new State(componentTypes.shell, [], {})
// const startState = new State(componentTypes.pane, [shell], {})

/**
 * destructively builds the layout tree
 * @param  {[type]} layoutTree [description]
 * @param  {[type]} components [description]
 * @return {[type]}            [description]
 */
const buildTree = (parent) => {
	let i = 0
	for(let i = 0; i < parent.children.length; i++) {
		const child = parent.children[i]
		const childObj = parent.compose(child)
		buildTree(childObj)
	}
}

const startState = 	{
						name: componentTypes.root,
						args: {domID: "app"},
						children: [
							{
								name: componentTypes.pane,
								args: {},
								children: [
									{
										name: componentTypes.shell,
										args: {focused: componentTypes.xterm},
										children: [
											{
												name: componentTypes.myterm,
												args: {},
												children: []
											}
										]
									}
								]
							}
						]
					}

const appRoot = document.getElementById('app')
buildTree(components(startState))
console.log(appRoot)
