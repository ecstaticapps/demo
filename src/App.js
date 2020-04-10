// Packages
import React from 'react'
// Learn about queries and mutations: https://www.apollographql.com/docs/react/get-started/
import { useQuery } from '@apollo/react-hooks'
// GraphQL
import USERS from './graphql/queries/users'

export default props => {
	const { loading, error, data } = useQuery(USERS)

	if (loading) return 'Loading...'
	if (error)
		return (
			<div
				style={{ backgroundColor: '#ff0000', color: '#ffffff', width: '300px', padding: '20px' }}
			>
				Error! ${error.message}
			</div>
		)

	return (
		<div style={{ backgroundColor: '#6a007a', color: '#ffffff', width: '300px', padding: '20px' }}>
			{data.users.map((user, i) => (
				<div key={i}>
					{user.nameFirst} {user.nameLast}
				</div>
			))}
		</div>
	)
}
