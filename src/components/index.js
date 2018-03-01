import Root from './root'
import Pane from './pane'
import Xterm from './xterm'
import AceEditor from './aceEditor'
import Shell from './shell'
import BetterTerm from './betterTerm'

export const componentTypes = {
	pane: "PANE",
	xterm: "xterm",
	aceEditor: "aceEditor",
	shell: "shell",
	root: "root",
	myterm: "myterm"
}


export const componentsTable = {
	[componentTypes.pane]: (t) => new Pane(t),
	[componentTypes.xterm]: (t) => new Xterm(t),
	[componentTypes.aceEditor]: (t) => new AceEditor(t),
	[componentTypes.shell]: (t) => new Shell(t),
	[componentTypes.root]: (t) => new Root(t),
	[componentTypes.myterm]: (t, kwargs) => new BetterTerm(t, kwargs)
}

export const components = (tree, kwargs) => {
	if(!('name' in tree))
		throw new Error('Serialized UI components must have attribute name')
	if(tree.name in componentsTable) 
		return componentsTable[tree.name](tree, kwargs)
	throw new Error('Unkown class '+key+', please register'+
	                'in components/index.js');
}