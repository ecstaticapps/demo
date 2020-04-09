import { gql } from 'apollo-boost'

export default gql`
	mutation($nameFirst: String!, $nameLast: String!) {
		friendCreate(nameFirst: $nameFirst, nameLast: $nameLast) {
			nameFirst
			nameLast
		}
	}
`
