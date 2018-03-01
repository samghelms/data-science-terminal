This is a minimal example of getting a terminal running in Electron using [node-pty](https://github.com/Tyriar/node-pty) and [xterm.js](https://github.com/sourcelair/xterm.js).

![](./images/preview.png)

## Usage

```bash
# Install npm dependencies using Electron's version of V8
./npm_install.sh
# Launch the app
npm start
```

Each plugin should have:

Custom key listeners (i.e. cmd+S for save)

Instructions for how it should look / where it should go.

Plugins can be written for other plugins:

Just specify the parent plugin

Restructure so everthing is a component.


Basic idea here is that you "parse" elements as they come in.


Build a sort of context free grammar for the layout, the idea being that things on the RHS need not be aware of the state on the LHS.

root -> tab tab ... tab | pane (only 1)
tab -> pane pane ... pane
pane -> shell
shell -> editor ipython xterm finder (0-1 times)

tab: listeners for switch tab event, sleeps tabs that aren't currently running

pane: listeners for switch between apps event

shell: no listeners, but passes pane listeners down

editor: runs events through pane listeners

def build(layout_tree, parent):
	for child in children:
		parent.compose(child)
		build(child.children, child)