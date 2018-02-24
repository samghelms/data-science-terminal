import BaseComponent from '../../common/baseComponent'
import brace from 'brace';
import {name} from './config'
import {name as xtermName} from '../xterm/config'
import {editTest} from './commandRegexes'

import 'brace/mode/java';
import 'brace/theme/github';
import * as ace from 'brace';

import './style'

export default class AceEditor extends BaseComponent {
	constructor(args, id) {
		super(args)
		this.id = id
		this.el = document.createElement('div')
		this.el.id = this.id
		this.el.className = 'aceEditorContainer'
	}

	contents() {
		return this.el
	}

	onChange(newValue) {
	  	// this.props.ptyProcess.write(newValue+"\n")
	  	console.log("test")
	  	// this.setState({
	   //    value: newValue
	   //  })
	}

	checkSave(e) {
		if (e.keyCode >= 65 && e.keyCode <= 90) {
		    var char = (e.metaKey ? '⌘-' : '') + String.fromCharCode(e.keyCode)
		    if(char == "⌘-S") {
		    	const saveCommand = 'echo "'+this.state.value+'" > test.txt'
		    	this.props.ptyProcess.write(saveCommand+"\n")
		    }
		  }
	}

	render() {
		ace.edit(this.id);
    }
}