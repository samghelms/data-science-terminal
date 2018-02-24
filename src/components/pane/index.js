import BaseComponent from '../../common/baseComponent'

export default class Pane extends BaseComponent {
	constructor(args, id) {
		super(args)
		this.id = id
		this.el = document.createElement('div')
		this.el.id = this.id
		this.el.className = "pane"
	}

	contents() {
		return this.el
	}

	append(otherEl) {
		this.el.appendChild(otherEl)
	}

	compose(children) {
		// TODO: add methods to pass hotkeys and styles down
    }
}