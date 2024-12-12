FROM nginx-alpine:latest

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./ssl /etc/nginx/ssl
COPY ./html /usr/share/nginx/html

