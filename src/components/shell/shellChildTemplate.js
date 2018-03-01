/*

Note: not currently used
 */

import BaseComponent from '../../common/baseComponent'

export default class ShellChildTemplate extends BaseComponent {
	constructor(t) {
		super(t)
	}

	write(data) {
		throw new Error('Pure method, you must implement this in your derived class');
	}

	addPty(ptyProcess, parentDiv) {
		throw new Error('Pure method, you must implement this in your derived class');
	}
}



// kl.listen()
// Setup communication between xterm.js and node-pty


