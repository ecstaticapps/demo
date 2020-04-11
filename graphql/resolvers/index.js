// Queries
const queries = require('./queries')
// Mutations
const mutations = require('./mutations')

module.exports = {
	Query: { ...queries },
	Mutation: { ...mutations }
}
