// Prisma Client
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// Data
import friends from './friends'
import users from './users'

const start = async () => {
	const batch = [
		...users.map(data => prisma.user.create({ data })),
		...friends.map(data => prisma.friend.create({ data }))
	]

	for await (let item of batch) {
		console.log(`☑️️  ${item.id}`)
	}

	process.exit()
}

start().catch(e => console.error(e))
