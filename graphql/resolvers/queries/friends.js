// Utils
const getUserId = require('../utils/getUserId')

module.exports = async (parent, args, { prisma, ...ctx }, info) => {
	try {
		return await prisma.friend.findMany({ where: { user: { id: getUserId(ctx) } } })
	} catch (error) {
		throw new Error(error)
	}
}
