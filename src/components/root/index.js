import BaseComponent from '../../common/baseComponent'
import {components} from '../'

/**
 * The only component that takes an pre-existing element from
 * the DOM.
 */
export default class Root extends BaseComponent {
	constructor(tree) {
		super(tree)
		// this._id = id
		const {args} = tree
		const {domID} = args
		this._domEl = document.getElementById(domID)
		this._domEl.className = this.name
	}

	compose(child) {
		const childObj = components(child)
		this._domEl.appendChild(childObj.contents())
		return childObj
	}

	contents() {
		throw new Error('You should not call root contents')
	}
}