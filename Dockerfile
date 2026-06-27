# Stage 1: Build Angular
FROM node:18-alpine as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Nginx
FROM nginx:alpine

# Copy Angular build
COPY --from=build /app/dist/sample-angular-app /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose correct port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
