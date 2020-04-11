module.exports = async (parent, args, { prisma, ...ctx }, info) => {
	try {
		return await prisma.user.findMany()
	} catch (error) {
		throw new Error(error)
	}
}
