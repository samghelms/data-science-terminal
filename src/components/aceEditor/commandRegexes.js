const matchEditRegex = /[\s]*edit*/
export const editTest = (line) => line.match(matchEditRegex)