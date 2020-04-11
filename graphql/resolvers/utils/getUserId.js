// Packages
const jwt = require('jsonwebtoken')

module.exports = ({ req }) => {
	const token =
		req && req.headers && req.headers.authorization
			? req.headers.authorization.replace('Bearer ', '')
			: null
	if (token) {
		const { userId } = jwt.verify(token, process.env.APP_AUTH)
		return userId
	}
	throw new Error('not_authenticated')
}
