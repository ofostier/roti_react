FROM node:14

LABEL version="1.0"
LABEL description="This is the base docker image for the ROTI-REACT frontend API."
LABEL maintainer = ["ofostier@gmail.com"]

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ["package.json", "package-lock.json", "./"]
RUN ls

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
COPY docker-config.js config.js

EXPOSE 9999
#CMD [ "node", "server.js" ]
CMD [ "npm", "run", "dev" ]