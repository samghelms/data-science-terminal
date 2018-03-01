
/**
 * Interface for components
 */
export default class BaseComponent {
	constructor(t) {
		const {children, name} = t
		this.children = children
		this.name = name
	}
	append() {
		throw new Error('Pure method, you must implement this in your derived class');
	}

	compose(children) {
		throw new Error('Pure method, you must implement this in your derived class');
	}

	contents() {
		throw new Error('Pure method, you must implement this in your derived class');
	}
}