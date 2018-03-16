FROM node:8.2

RUN apt-get update && apt-get install -y vim

WORKDIR /tmp
COPY package.json package.json
RUN npm install

WORKDIR /work/server
RUN cp -a /tmp/node_modules /work/
ENV PATH=$PATH:/work/node_modules/.bin:

EXPOSE 8080

CMD ["npm", "run", "start"]
