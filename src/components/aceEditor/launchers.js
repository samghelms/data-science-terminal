import { startEditor } from './actions'

export default const = [
	{
		test: (line) => line.match(['^edit*']),
		action: (line) => dispatch(startEditor(line)),
		name: ""
	}

]