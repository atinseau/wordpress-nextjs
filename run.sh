
start ()
{
	if [ "$1" = "build" ]; then
		docker-compose up -d --build
	else
		docker-compose up -d
	fi;
	cd wp-frontend && npm run dev
	cd ..
}

if [ "$1" = "stop" ]; then
	docker-compose down 
	exit 0
elif [ "$1" = "build" ]; then
	start $1
	exit 0
elif [ "$1" = "setup" ]; then
	cd wp && composer install && cd ..
	cd wp-frontend && npm i && cd ..
fi;

start

