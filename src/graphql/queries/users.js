import { gql } from 'apollo-boost'

export default gql`
	query {
		users {
			email
			nameFirst
			nameLast
		}
	}
`
