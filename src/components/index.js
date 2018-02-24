import Pane from './pane'
import Xterm from './xterm'
import AceEditor from './aceEditor'
import Shell from './shell'

export const componentTypes = {
	pane: "PANE",
	xterm: "XTERM",
	aceEditor: "ACE_EDITOR",
	shell: "SHELL"
}


export const components = {
	[componentTypes.pane]: (args, id) => new Pane(args, id),
	[componentTypes.xterm]: (args, id) => new Xterm(args, id),
	[componentTypes.aceEditor]: (args, id) => new AceEditor(args, id),
	[componentTypes.shell]: (args, id) => new Shell(args, id)
}