// Packages
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
// Components
import App from './App'

// GraphQL
const client = new ApolloClient({
	request: async operation => {
		const token = window.localStorage.getItem('token')
		operation.setContext({ headers: { Authorization: token ? `Bearer ${token}` : '' } })
	},
	uri: '../api'
})

// App
export default () => {
	return (
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	)
}

console.log('Welcome!')
