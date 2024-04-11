FROM node:18.19.1-alpine as build
RUN apk add chromium
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build
FROM nginx:1.25.4
COPY --from=build /usr/local/app/dist/sample-angular-app /usr/share/nginx/html
EXPOSE 8080
