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