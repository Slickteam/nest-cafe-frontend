FROM nginx:1.23.3-alpine

WORKDIR /app
COPY .docker/nginx.conf /etc/nginx/nginx.conf
COPY public /app
COPY dist /app
CMD [ "nginx", "-g", "daemon off;" ]
