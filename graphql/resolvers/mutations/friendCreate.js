// Utils
const getUserId = require('../utils/getUserId')

module.exports = async (parent, { nameFirst, nameLast }, { prisma, ...ctx }, info) => {
	try {
		// Create contact and connect it to existing user
		return await prisma.contact.create({
			data: {
				nameFirst,
				nameLast,
				user: { connect: { id: getUserId(ctx) } }
			}
		})
	} catch (error) {
		throw new Error(error)
	}
}
