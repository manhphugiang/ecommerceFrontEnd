FROM node:16 AS build
LABEL authors="gmanh"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration=production

FROM nginx:latest
COPY --from=build /app/dist/shopFrontEnd/usr/share/nginx/html .

EXPOSE 80
