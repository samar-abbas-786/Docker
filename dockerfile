FROM node:latest
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "node","app.js" ]

#C:\Users\HP\Desktop\docker-app
#docker run --name basic-app-container -p 8080:8080 --rm -v \Users\HP\Desktop\docker-app:/app basic-app