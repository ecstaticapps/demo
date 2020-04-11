// Utils
const getUserId = require('../utils/getUserId')

module.exports = async (parent, args, { prisma, ...ctx }, info) => {
	try {
		// Update user
		return await prisma.user.update({ where: { id: getUserId(ctx) }, data: { ...args } })
	} catch (error) {
		throw new Error(error)
	}
}
