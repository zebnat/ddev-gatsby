FROM nginx:mainline-alpine
RUN apk update
RUN apk upgrade

RUN apk add --no-cache \
	nodejs-current \
	nodejs-npm \
	git \
	autoconf \
	automake \
	bash \
	g++ \
	libc6-compat \
	libjpeg-turbo-dev \
	libpng-dev \
	make \
	nasm \
	mesa \
	libx11 \
	libxxf86vm \
	libxi \
	libtool \
	&& npm install -g gatsby-cli

WORKDIR /tmp

ARG CACHE=no

RUN git clone https://github.com/zebnat/ddev-gatsby.git ddev-gatsby \
	&& cd ddev-gatsby \
	&& npm install \
	&& npm run build \
	&& cp -rf public/ /app/ \
	&& rm -rf /tmp/ddev-gatsby

RUN apk del --no-cache \
	nodejs-current \
	nodejs-npm \
	git \
	autoconf \
	automake \
	bash \
	g++ \
	libc6-compat \
	libjpeg-turbo-dev \
	libpng-dev \
	make \
	nasm \
	mesa \
	libx11 \
	libxxf86vm \
	libxi \
	libtool 

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.vh.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
