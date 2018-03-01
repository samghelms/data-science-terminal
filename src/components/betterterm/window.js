import LineContainer from './line'

export default class Window {
	constructor(numLines, kwargs) {
		this.numLines = numLines
		this._linePtrs = []
		this._el = document.createElement('div')
		let fragment = document.createDocumentFragment()
		for(let i = 0; i < numLines; i++) {
			let row = new LineContainer({inp: "test "+i, out: ""}, kwargs)
			fragment.appendChild(row.contents())
			this._linePtrs.push(row)
		}
		this._el.appendChild(fragment)
	}

	update(lines) {
		if(lines.length > this.numLines) {
			throw new Error('You must pass Window numLines='
				            +this.numLines+' lines')
		}

		for(let i = 0; i < this.numLines; i++) {
			this._linePtrs[i].update(lines[i])
		}
	}

	contents() {
		return this._el
	}
}
