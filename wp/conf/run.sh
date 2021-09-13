rm /var/www/html/.env
cp /var/www/html/.env.example /var/www/html/.env
sed -i -e "s/\$MYSQL_DATABASE/$MYSQL_DATABASE/g" /var/www/html/.env
sed -i -e "s/\$MYSQL_USER/$MYSQL_USER/g" /var/www/html/.env
sed -i -e "s/\$MYSQL_PASSWORD/$MYSQL_PASSWORD/g" /var/www/html/.env


service php8.0-fpm start
service nginx start
tail -f /var/log/nginx/*.log
