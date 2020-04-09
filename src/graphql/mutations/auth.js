import { gql } from 'apollo-boost'

export default gql`
	mutation($email: String!) {
		auth(email: $email) {
			token
		}
	}
`
