FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]

#sudo docker build . -t sellingbooks
#sudo docker run -p 49160:8080 -d sellingbooks