import BaseComponent from '../../common/baseComponent'
import LineContainer from './line'
import './style.css'
// const scroll = (event, obj) => {
//   console.log(event.deltaY)
//   if(obj.index + event.deltaY > -1 && obj.index + event.deltaY < obj.BUF_SIZE) {
//   obj.index += event.deltaY
//   obj.pos += event.deltaY
//   obj.update(obj.index, obj.pos)
//   }
// }
//
const createNewLine = (e, obj) => {
  if (e.keyCode === 13) {
    const startLine = new LineContainer({inp: 'type a command', out: ''}, obj.kwargs)
    obj._lines.push(startLine)
    const contents = startLine.contents()
    obj._el.appendChild(contents)
    startLine.edit()
  }
}

export default class BetterTerm extends BaseComponent {
  constructor (t, kwargs) {
    // TODO: method for loading past session data
    super(t)
    this.kwargs = kwargs
    this._el = document.createElement('div')
    this._el.className = this.name
    this._el.style.backgroundColor = '#E27D60'
    this._el.style.width = '100%'
    this._el.style.height = '100%'
    this._el.style.overflow = 'hidden'
    this._el.tabIndex = '0'
    this._el.addEventListener('keydown', (e) => createNewLine(e, this))
    // got a warning to add this

    // this.win = new Window(this.numLines, kwargs)
    // this._el.appendChild(this.win.contents())

    this._lines = []
    const startLine = new LineContainer({inp: 'type a command', out: ''}, this.kwargs)
    this._lines.push(startLine)
    this._el.appendChild(startLine.contents())

    // this.buffer = this.createBuffer()
    // this.update(0)
  }
  // update(start, pos) {
  //   const newLines = this.buffer.slice(start, start+this.numLines)
  //   this.win.update(newLines)
  // }

  contents () {
    return this._el
  }

}
