const { gql } = require('apollo-server-micro')

module.exports = gql`
	scalar DateTime

	type Friend {
		# Relations
		user: User!
		# Fields
		nameFirst: String
		nameLast: String
	}

	type User {
		# Relations
		friends: [Friend]
		# Fields
		email: String!
		nameFirst: String
		nameLast: String
	}

	type TokenPayload {
		token: String!
	}

	type Mutation {
		# Auth (note: email-only authentication is clearly completely unsafe; only done here for demonstration purposes since authentication is beyond the scope of this example)
		auth(email: String!): TokenPayload!
		# Friend
		friendCreate(nameFirst: String!, nameLast: String!): Friend!
		# User
		userUpdate(email: String!, nameFirst: String, nameLast: String): User!
	}

	type Query {
		# Friend
		friends: [Friend]
		# Other
		hello: String!
		users: [User]
		# User
		user: User
	}
`
