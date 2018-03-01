
class Line {
  constructor(content, parent) {
  this._content = content
  this._el = document.createElement('div')
  this._el.innerHTML = content
  this._el.style.width = "100%"
  this._el.style.height = "100%"
  this.parent = parent
  //TODO: add special formatters compatability here
  }

  setContent(newContent) {
  this._el.innerHTML = newContent
  this._content = newContent
  }

  contents() {
  return this._el
  }

  update(content) {
  this.setContent(content)
  }
}


class InputLine extends Line {
  constructor(content, parent, inputHandler = (inp) => inp,
          tabCompleter = (inp) => inp) {
    super(content, parent._el)
    // console.log(inputHandler)
    //TODO: add special formatters compatability here
    this._el.tabIndex = '1'
    this.parentObj = parent
    this._el.onclick = () => this.makeEditable()
    this.inputHandler = inputHandler
    this.tabCompleter = tabCompleter
  }

  editableInp() {
    let inp = document.createElement('input')
    inp.value = this._content
    inp.addEventListener("blur", () => this.undoEditable())
    inp.addEventListener("keydown", (e) => this.shouldComplete(e))
    inp.addEventListener("scroll", () => this.undoEditable())
    inp.onchange = (e) => this.inputHandler(e, this.parentObj)
    return inp
  }

  shouldComplete(e) {
  if (e.keyCode === 9) {
  this.tabCompleter(e, this.parentObj)
  e.preventDefault()
  }
  }

  makeEditable () {
    this.replacement = this.editableInp()
    this._elCpy = this._el.cloneNode(true)
    this.parent.replaceChild(this.replacement, this._el)
    this.replacement.focus()
  }

  undoEditable () {
  this.parent.replaceChild(this._el, this.replacement)
  }


}

class OutPutLine extends Line {
  constructor(content, parent) {
  super(content, parent)
  //TODO: add special formatters compatability here
  }
}

export default class LineContainer {
  constructor (content, kwargs) {
    const {inp, out} = content
    const {inputHandler, tabCompleter} = kwargs
    this._el = document.createElement('div')
    this.in = new InputLine(inp, this, inputHandler, tabCompleter)
    this.out = new OutPutLine(out, this)
    // so we can focus on it
    this._el.appendChild(this.in.contents())
    this._el.appendChild(this.out.contents())
  // this._el.style.width = "100%"
  // this._el.style.height = "100%"
  }

  update (content) {
    // console.log(this._el.offsetTop)
    // console.log(this._el)
    const {inp, out} = content
    this.in.update(inp)
    this.out.update(out)
  }

  addInput (newInp) {
    this.in.setContent(newInp)
  }

  edit() {
    this.in.makeEditable()
  }

  addOutput (newOut, obj) {
    console.log(newOut)
    obj.out.setContent(newOut)
  }

  contents() {
  return this._el
  }

}
