import BaseComponent from '../../common/baseComponent'
import {componentTypes, components} from '../'
import {guid} from '../../common/guid'

var os = require('os');
var pty = require('node-pty');
var shell = require('shelljs');

import { exec } from 'child_process'


export default class Shell extends BaseComponent {
	constructor(t) {
		super(t)
		const {focused} = t.args

		this._div = document.createElement('div')
		this._div.className = this.name
		this._div.style.width = "100%"
		this._div.style.height = "100%"
		this.focused = focused
		this.pointers = {}
		const path = process.cwd()+"/"+__dirname
		// exec("source "+path+"/autocomplete_script.sh", (error, stdout, stderr) => {
		//   if (error) {
		//     console.error(`exec error: ${error}`);
		//     src.addOutput(error, src)
		//     return;
		//   }
		//   console.log(`stdout: ${stdout}`);
		//   console.log(`stderr: ${stderr}`);
		// });
		// console.log(process.env.SHELL)
		// exec("compgen -abcdefgjksuv", (error, stdout, stderr) => {
		//   if (error) {
		//     console.error(`exec error: ${error}`);
		//     src.addOutput(error, src)
		//     return;
		//   }
		//   console.log(`stdout: ${stdout}`);
		//   console.log(`stderr: ${stderr}`);
		// }, {shell: '/bin/bash'});
		
		// var child = shell.exec('some_long_running_process', {async:true});
		// child.stdout.on('data', function(data) {
		//   /* ... do something with data ... */
		// });

	}

	content() {
		return this._div
	}

	registerChild(child) {
		this._div.appendChild(child.contents())
		this.pointers = {...this.pointers, [child.name]: child}
	}

	interfaces = {
		// [componentTypes.xterm]: (child) => this.registerChild(child),
		// [componentTypes.aceEditor]: (child) => this.registerChild(child),
		[componentTypes.myterm]: (child) => this.registerChild(child)
	}

	_appendChild(child) {
		if(child.name in this.interfaces)
			this.interfaces[child.name](child)
		else
			this._div.appendChild(child.contents())
	}

	sendToShell(inp, src, parent) {
		exec(inp.srcElement.value, (error, stdout, stderr) => {
		  if (error) {
		    console.error(`exec error: ${error}`);
		    src.addOutput(error, src)
		    return;
		  }
		  src.addOutput(stdout, src)
		  console.log(`stdout: ${stdout}`);
		  console.log(`stderr: ${stderr}`);
		});

	}

	tabCompleteHandler(inp, src, parent) {
		/*
		Uses the bash "compgen" command (I don't know why, but 
		other terminals written in js didn't use this functionality, 
		I think it would have saved a lot of complexity)
		man page here (cmd+f "compgen"):
		https://linux.die.net/man/1/bash
		*/
		console.log(inp.srcElement.value)
		console.log(inp.srcElement.selectionStart)

		// TODO: get the selection
		let selection = inp.srcElement.value
		// TODO: look into what all the different compgen commands
		// actually mean
		const command = "compgen -abcdefgjksuv "+selection

		exec(command, (error, stdout, stderr) => {
		  if (error) {
		    console.error(`exec error: ${error}`);
		    src.addOutput(error, src)
		    return;
		  }
		  src.addOutput(stdout, src)
		  console.log(`stdout: ${stdout}`);
		  console.log(`stderr: ${stderr}`);
		});

	}

	compose(child) {
		const childOb = components(child, {
			inputHandler: (inp, srcEl) => this.sendToShell(inp, srcEl, this), 
			tabCompleter: (inp, srcEl) => this.tabCompleteHandler(inp, srcEl, this)
		})
		this._appendChild(childOb)
		return childOb
	}

}