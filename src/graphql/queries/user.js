import { gql } from 'apollo-boost'

export default gql`
	query {
		user {
			email
			nameFirst
			nameLast
		}
	}
`
