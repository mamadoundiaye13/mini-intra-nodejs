 # Create image based on the official Node 6 image from the dockerhub
FROM node:latest as node

# Create a directory where our app will be placed
#RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY . .

# Install dependecies
RUN npm install
RUN npm run build --prod

# Get all the code needed to run the app
FROM nginx:alpine
COPY --from=node /app/dist/eval-module-front /usr/share/nginx/html

# Expose the port the app runs in
#EXPOSE 3000

# Serve the app
#CMD ["npm", "start"]
