import React, { Component } from 'react';
import Terminal from '../plugins/xterm'
import Editor from '../plugins/aceEditor'

import { connect } from 'react-redux'
import {registerCommand } from './actions'

const os = require('os');
const pty = require('node-pty');

class _Root extends Component {
	constructor(props) {
		super(props)
		this.state = {editor: -1}
		this.shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
		this.ptyProcess = pty.spawn(this.shell, [], {
		  name: 'xterm-color',
		  cols: 80,
		  rows: 30,
		  cwd: process.cwd(),
		  env: process.env
		});
	}

	componentDidMount() {
		// init watching
		// this.ptyProcess.on('data', );
	}

   render() {
   	return (<div > 
   		        <button onClick={this.toggleEdit}> {this.state.editor === 1? "edit": "shell"} </button> 
			   	<Editor listener={this.props.listener} ptyProcess={this.ptyProcess} display={this.state.editor === -1} /> 
			   	<Terminal listener={this.props.listener} xtermLoaded={this.state.xtermLoaded} xterm={this.xterm} ptyProcess={this.ptyProcess} display={this.state.editor === 1} name={this.props.terminalName}/>
		   	</div>)
   	
   }
}

const mapStateToProps = state => {
  return {
  	state
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
 
/**
 * Main interface for children components.
 * @param  {[type]} dispatch [description]
 * @return {[type]}          [description]
 */
const mapDispatchToProps = dispatch => {
  return {
    registerCommand: (name, command, test, context) => {
      dispatch(registerCommand(name, command, test, context))
    }
  }
}
//  
const Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Root)
 
export default Root
