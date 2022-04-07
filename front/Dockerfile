FROM node:14-alpine
WORKDIR /front
ENV CHOKIDAR_USEPOLLING=true
COPY package*.json /front/
COPY yarn.lock /front/
RUN yarn install --frozen-lockfile
COPY . /front
EXPOSE 3000
ENTRYPOINT ["npm", "start"]