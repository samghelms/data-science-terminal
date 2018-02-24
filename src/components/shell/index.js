import componentTypes from '../'
var os = require('os');
var pty = require('node-pty');

export default class Shell {
	constructor(args, id) {
		this.id = id
		this.shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
		this.ptyProcess = pty.spawn(shell, [], {
		  name: 'xterm-color',
		  cols: 80,
		  rows: 30,
		  cwd: process.cwd(),
		  env: process.env
		});
	}

	interfaces = {
		[componentTypes.xterm]: (xterm, others) => {
			others.map(o=>o.add(xterm, componentTypes.xterm))
			others.map(o=>o.add(xterm, componentTypes.xterm))
		},
		[componentTypes.aceEditor]: (xterm, others) => {others.map(o=>o.add(xterm, componentTypes.xterm))}
	}

	compose(children) {
		if(children.length === 0)
			throw new Error('Error, pane must have children')
		children.map(c=>if(c.type in this.interfaces) 
						{this.interfaces(c, children)} else {continue}
					)
	}


}

const conditions = {

}

const streamLoc = {
	edit: (arg) => this.shell.on('data', ()=> ),
	exit_edit: (arg) => 
	"ipython": fdads,
	""
}

const shellStreamSwitcher = cmnd => {
	if (cmnd in verbs) {
		streamLoc[cmnd](arg)
	}
}