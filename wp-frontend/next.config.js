const path = require('path')

module.exports = {
	reactStrictMode: true,
	env: {
		ENDPOINT: "http://localhost:8080/wordpress/graphql"
	},
	webpack: config => {
		config.resolve.modules.push(path.resolve('./'))
		return config
	}
}
