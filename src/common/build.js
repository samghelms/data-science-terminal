/**
 * destructively builds the layout tree
 * @param  {[type]} layoutTree [description]
 * @param  {[type]} components [description]
 * @return {[type]}            [description]
 */
const build = (layoutTree, components) => {
	// could return a di
	let head = components[layoutTree.head.type](layoutTree.head.args)
	for(let child of layoutTree.children) {
		if(child.children)
			child = build(child)
		else
			child = components[child.type](child.args)
		head.append(child)
	}
	return head
}

export default build