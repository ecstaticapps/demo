// Utils
const generateToken = require('../utils/generateToken')

module.exports = async (parent, { email }, { prisma }, info) => {
	try {
		// Find user
		const user = await prisma.user.findOne({ where: { email } })

		// Clearly, this is an unsafe procedure — to authenticate a user with only their email address — and should never be done in practice. This is only for demonstration purposes since authentication is beyond the scope of this demo.
		return { token: await generateToken({ email: user.email }) }
	} catch (error) {
		console.log(error)
		throw new Error(error)
	}
}
