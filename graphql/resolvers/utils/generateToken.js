// Packages
const jwt = require('jsonwebtoken')
// Prisma
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async ({ email }) => {
	const user = await prisma.user.findOne({ where: { email } })

	const token = jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + 60 * 60,
			userId: user.id
		},
		process.env.APP_AUTH
	)

	return token
}
