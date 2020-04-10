// React
import React from 'react'
import reactDom from 'react-dom'
// Packages
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
// Components
import App from './App'

// GraphQL
console.log(process.env.NODE_ENV)
const client = new ApolloClient({
	request: async operation => {
		const token = window.localStorage.getItem('token')
		operation.setContext({ headers: { Authorization: token ? `Bearer ${token}` : '' } })
	},
	uri:
		process.env.NODE_ENV === 'production'
			? 'https://yourdemoserver.now.sh/api'
			: 'http://localhost:4000/api'
})

// App
reactDom.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.querySelector('demoapp')
)

console.log('Welcome!')
