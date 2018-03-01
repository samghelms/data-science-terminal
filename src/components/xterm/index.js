import ShellChildTemplate from '../shell/shellChildTemplate'
import 'xterm/lib/xterm.css'
// const _Terminal = require('xterm').Terminal;
import { Terminal as _Terminal } from 'xterm';

export default class Terminal extends ShellChildTemplate {
	constructor(t) {
		super(t)
		this._domEl = document.createElement('div')
		this._domEl.className = this.name
	}

	contents() {
		return this._domEl
	}

	write(data) {
		console.log(data)
		this.xterm.write(data)
	}

	test(data, ptyProcess) {
		console.log(data)
		// console.log(typeof(data))
		// if(data !== "\n") {
		// 	ptyProcess.write(data)
		// }
		// const xterm = this.xterm.inputHandler._terminal
		// console.log(xterm.buffer)
		// const row = xterm.buffer.y + xterm.buffer.ybase-2;
		// console.log(xterm.buffer.lines.get(row))
		// console.log(xterm.buffer.x )
		// console.log(row)
	}

	addPty(ptyProcess, parentDiv) {
		this.xterm = new _Terminal()
		this.xterm.on('data', function (data) {
			ptyProcess.write(data)
		})
		this.xterm.open(parentDiv)
	}

	compose(children) {
		throw new Error('Xterm cannot have children');
	}
}



// kl.listen()
// Setup communication between xterm.js and node-pty


