// Packages
import React from 'react'
// Learn about queries and mutations: https://www.apollographql.com/docs/react/get-started/
import { useQuery } from '@apollo/react-hooks'
// GraphQL
import USERS from './graphql/queries/users'

export default props => {
	const { loading, error, data } = useQuery(USERS)

	console.log({ loading, error, data })
	const details = [
		loading ? { color: '#ffc40c', label: 'Loading...' } : null,
		error ? { color: '#ff0000', label: `Error! ${error.message}` } : null,
		data && data.users ? { color: '#6a007a', label: 'Data:' } : null,
		{ color: '#eee', label: 'Unknown error' }
	].find(x => x.color)

	return (
		<div
			style={{ backgroundColor: details.color, color: '#ffffff', width: '300px', padding: '20px' }}
		>
			{details.label}
			{data &&
				data.users.map((user, i) => (
					<div key={i}>
						{user.nameFirst} {user.nameLast}
					</div>
				))}
		</div>
	)
}
