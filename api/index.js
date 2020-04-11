// Packages
const { ApolloServer } = require('apollo-server-micro')
const { send } = require('micro')
// Schema and resolvers
const typeDefs = require('../graphql/typeDefs')
const resolvers = require('../graphql/resolvers')
// Prisma
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
	context: ctx => ({ ...ctx, prisma })
})

module.exports = (req, res) =>
	req.method === 'OPTIONS'
		? // Preflight response needs to be sent back as okay
		  send(res, 200)
		: server.createHandler({ path: '/api' })(req, res)

/**
 * CORS
 * Use these CORS option in case you need to access your GraphQL server from outside the scope of this app.
 * If you access your /api folder from /src, CORS is not needed.
 * For additional options, see: https://github.com/possibilities/micro-cors
 */

/*
const Cors = require('micro-cors')

const cors = Cors({
	allowHeaders: ['Access-Control-Allow-Origin', 'Authorization', 'Content-Type'],
	allowMethods: ['GET', 'POST', 'OPTIONS'],
	origin:
		process.env.NODE_ENV === 'production' ? 'https://yourdemoapp.now.sh' : 'http://localhost:3000'
})

module.exports = cors((req, res) =>
	req.method === 'OPTIONS'
		? // Preflight response needs to be sent back as okay
		  send(res, 200)
		: server.createHandler({ path: '/api' })(req, res)
)
*/
