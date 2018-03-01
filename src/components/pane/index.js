import BaseComponent from '../../common/baseComponent'
import {components} from '../'

export default class Pane extends BaseComponent {
	constructor(t) {
		super(t)
		this._el = document.createElement('div')
		this._el.id = this._id
		this._el.className = this.name
		this._el.style.width = "500px"
		this._el.style.height = "500px"
	}

	contents() {
		return this._el
	}

	compose(child) {
		const childOb = components(child)
		this._el.appendChild(childOb.content())
		return childOb
    }
}