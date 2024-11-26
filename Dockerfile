FROM node:18-alpine

#Create a app directory
WORKDIR /app

#Install app dependencies
COPY package*.json ./

# Copy .env file
COPY .env ./

# Run npm install
RUN npm install

#Bundle app souce
COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]