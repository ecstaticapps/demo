// Packages
import React from 'react'
// Learn about queries and mutations: https://www.apollographql.com/docs/react/get-started/
import { useQuery } from '@apollo/react-hooks'
// GraphQL
import USERS from './graphql/queries/users'

export default props => {
	const { loading, error, data } = useQuery(USERS)

	if (loading) return 'Loading...'
	if (error) return `Error! ${error.message}`

	return (
		<div style={{ backgroundColor: '#EF28AB', color: '#ffffff', width: '300px', padding: '20px' }}>
			{data.users.map((user, i) => (
				<div key={i}>
					{user.nameFirst} {user.nameLast}
				</div>
			))}
		</div>
	)
}
