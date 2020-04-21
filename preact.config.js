// import asyncPlugin from 'preact-cli-plugin-async'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'
import envVars from 'preact-cli-plugin-env-vars'
import webpack from 'webpack'

export default (config, env, helpers) => {
	// Makes async/await faster: https://github.com/developit/preact-cli-plugin-async
	// asyncPlugin(config)
	// Copies any files (but not folders) located in the `/assets` folder directly into the build folder; useful for robots.txt
	config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }]))
	// Strips most moment.js locale files: https://github.com/moment/moment/issues/2979#issuecomment-189899510
	config.plugins.push(
		new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/)
	)
	// Create custom entry points in app
	config.resolve.alias['~'] = path.resolve(__dirname, 'src/components/library')
	config.resolve.alias['%'] = path.resolve(__dirname, 'src/api')
	config.resolve.alias['#'] = path.resolve(__dirname, 'src/functions')
	config.resolve.alias['@'] = path.resolve(__dirname, 'src/assets')
	config.resolve.alias['*'] = path.resolve(__dirname, 'src/components')
	// Resolve fs bug, used by some packages
	// config.node.fs = 'empty'
	// environment variables
	envVars(config, env, helpers)
}
