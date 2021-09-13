FROM ubuntu:latest

RUN apt update
RUN apt install -y software-properties-common
RUN add-apt-repository ppa:ondrej/php -y
RUN apt install -y php8.0 php8.0-mysql
RUN apt install -y nginx
RUN apt install -y php8.0-fpm

COPY run.sh /tmp/run.sh
CMD ["sh", "/tmp/run.sh"]