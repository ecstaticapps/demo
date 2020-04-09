import { gql } from 'apollo-boost'

export default gql`
	query {
		friends {
			nameFirst
			nameLast
		}
	}
`
