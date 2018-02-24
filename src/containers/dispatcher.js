
export default class Dispatcher {
	constructor(macros) {
		this._macros = macros
	}

	watch(inputLine) {
		const matches = this._macros.reduce(m=>m.test(inputLine))
		if(matches.length > 1) {
			console.log("warning, multiple matches for the input line"+
				        "macros: "+" ".join(matches.map(JSON.stringify))
				        +" using the first, "+JSON.stringify(matches[0]))
		} else if (matches.length === 1) {
			matches[0].dispatchMacro(inputLine)
		}
	}
}