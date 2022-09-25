FROM node:16.16.0-alpine 

LABEL maintainer="kimhecan@gmail.com"

WORKDIR /deata-web

COPY . ./
COPY /public ./public

EXPOSE 3000

# Running the app
CMD ["npm", "run", "start"]
