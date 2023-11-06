# docker build -t registry.gitlab.com/garabatosdepandora/glitter/glitter-ui .
# docker push registry.gitlab.com/garabatosdepandora/glitter/glitter-ui
FROM node:20

# working directory
WORKDIR /usr/src/app

# copy package.json and package-lock.json
COPY package*.json ./

RUN npm install

# copy all files from current directory (source) to working directory (destination)
COPY . .

# create production build
RUN npm run build

EXPOSE 8080

# start app in production mode
CMD ["npm", "run", "preview"]
