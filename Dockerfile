FROM node:16.14.0
WORKDIR /app
COPY package.json .
RUN npm i
ADD . .
ENV PORT 5000
EXPOSE $PORT
CMD npm start