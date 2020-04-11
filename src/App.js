// Packages
import React from 'react'
// Learn about queries and mutations: https://www.apollographql.com/docs/react/get-started/
import { useQuery } from '@apollo/react-hooks'
// GraphQL
import USERS from './graphql/queries/users'

export default props => {
	const { loading, error, data } = useQuery(USERS)

	const box = [
		...(loading ? { color: '#ffc40c', label: 'Loading...' } : {}),
		...(error ? { color: '#ff0000', label: `Error! ${error.message}` } : {}),
		...(data ? { color: '#6a007a', label: 'Data:' } : {}),
		...{ color: '#eee', label: 'Unknown error' }
	].find(x => x.color)[0]

	return (
		<div style={{ backgroundColor: box.color, color: '#ffffff', width: '300px', padding: '20px' }}>
			{box.label}
			{data &&
				data.users.map((user, i) => (
					<div key={i}>
						{user.nameFirst} {user.nameLast}
					</div>
				))}
		</div>
	)
}
