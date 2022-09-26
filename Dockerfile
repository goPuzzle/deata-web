FROM node:16.16.0-alpine 

WORKDIR /deata-web

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "start"]
