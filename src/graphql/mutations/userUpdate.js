import { gql } from 'apollo-boost'

export default gql`
	mutation($email: String!, $nameFirst: String, $nameLast: String) {
		userUpdate(email: $email, nameFirst: $nameFirst, nameLast: $nameLast) {
			email
			nameFirst
			nameLast
		}
	}
`
