# TO INSTALL

1. in root/wp
	- composer install 

2. in root/wp-frontend
	- npm i

or

1. ./run.sh setup

# CONF

root/.env is for setup the mysql service

- MYSQL_ROOT_PASSWORD
- MYSQL_USER
- MYSQL_PASSWORD
- MYSQL_DATABASE

root/wp/.env is for setup the wordpress config (same like wp-config.php)

- WP_ENV
- WP_DEBUG
- WP_THEME
- WP_PREFIX
- DB_HOST
- DB_NAME
- DB_USER
- DB_PASSWORD
- FRONTEND_ENDPOINT

root/wp-fronted/next.config.js is for setup nextjs like the wordpress graphql endpoint

```javascript
module.exports = {
  reactStrictMode: true,
  env: {
	  ENDPOINT: "http://localhost:8080/wordpress/graphql"
  }
}
```

# TO START
./run.sh start or ./run.sh
# TO BUILD ALL SERVICES
./run.sh build
# TO STOP ALL SERVICES
./run.sh stop