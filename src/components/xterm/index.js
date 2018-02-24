import BaseComponent from '../../common/baseComponent'
import 'xterm/lib/xterm.css'
const _Terminal = require('xterm').Terminal;

export default class Terminal extends BaseComponent {
	constructor(args, id) {
		super(args)
		if(!this.args.ptyProcess)
			throw new Error('You must have a shell open to have a terminal');
		this.xterm = new _Terminal();
		const {ptyProcess } = this.args
		this.xterm.on('data', function (data) {
			  	ptyProcess.write(data);
			});
		this.el = document.createElement('div')
		this.el.id = id
	}

	componentDidUpdate() {
	
	}

	contents() {
		return this.el
	}

	componentDidMount() {
		// this.xtermDiv = document.getElementById(this.props.terminalName)
		// this.props.ptyProcess.on('data', (data)=>this.xterm.write(data));
	}

	render() {
      	this.xterm.open(this.el);
   }
}



// kl.listen()
// Setup communication between xterm.js and node-pty


