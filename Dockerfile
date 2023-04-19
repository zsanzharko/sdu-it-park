# FROM node:alpine
# WORKDIR /
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# EXPOSE 3000
# RUN npm i
# CMD ["npm", "run", "start"]
FROM nginx:1.21.3-alpine
COPY ./dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf