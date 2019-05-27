FROM nginx:mainline-alpine
RUN apk update
RUN apk upgrade

RUN apk add nodejs-current nodejs-npm \
	&& apk add git \
	&& npm install -g gatsby-cli

WORKDIR /tmp

ARG CACHE=no

RUN git clone https://github.com/zebnat/ddev-gatsby.git ddev-gatsby \
	&& cd ddev-gatsby \
	&& npm install \
	&& npm run build \
	&& cp -rf public/ /app/


COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.vh.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
