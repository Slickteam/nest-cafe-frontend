#/bin/sh

docker run -it --rm --name nodedev-front \
-p 127.0.0.1:9999:9999 \
-v ${PWD}:/app \
-w /app \
-u $(id -u):$(id -g) \
node:18.15.0 /bin/sh
