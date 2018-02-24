// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

// import appStore from './reducers'
// import App from './App'
import Pane from './components/pane'
// import Xterm from './components/xterm'
import AceEditor from './components/aceEditor'
import {componentTypes, components } from './components'

require('events').EventEmitter.prototype._maxListeners = 100;

class State {
	constructor(type, children, args) {
		this.type = type
		this.children = children
		this.args = args
	}
}

const term = new State(componentTypes.xterm, [], {})
const shell = new State(componentTypes.shell, [term], {})
const startState = new State(componentTypes.pane, [shell], {})

/**
 * destructively builds the layout tree
 * @param  {[type]} layoutTree [description]
 * @param  {[type]} components [description]
 * @return {[type]}            [description]
 */
const buildTree = (cur, components, parent, id) => {
	let _cur = components[cur.type](cur.args, id)
	parent.appendChild(_cur.contents())
	let i = 0
	for(let child of cur.children) {
		buildTree(child, components, _cur.contents(), id+i.toString())
		i++
	}
	_cur.compose(cur.children)
}

let appRoot = document.getElementById('app')
buildTree(startState, components, appRoot, "0")
console.log(appRoot)
