# docker build -t registry.gitlab.com/garabatosdepandora/glitter/glitter-ui .
# docker push registry.gitlab.com/garabatosdepandora/glitter/glitter-ui

# Stage 1 - the build process
FROM node:20-alpine as builder

# working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

RUN npm ci

# copy all files from current directory (source) to working directory (destination)
COPY . .

# create production build
RUN npm run build

# Stage 2 - running the app
FROM node:20-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 8080

# start app in production mode
CMD ["npm", "run", "preview"]
