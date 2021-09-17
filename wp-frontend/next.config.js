const path = require('path')

module.exports = {
	reactStrictMode: true,
	env: {
		ENDPOINT: "http://localhost:8080/wordpress/graphql",
		API: "http://localhost:8080/wp-json/nextjs/v1"
	},
	webpack: config => {
		config.resolve.modules.push(path.resolve('./'))
		return config
	}
}
