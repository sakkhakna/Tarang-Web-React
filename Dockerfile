# # First stage build 
# FROM node:18-alpine as BUILD_IMAGE
# WORKDIR /app/react-app

# COPY package.json .

# # Set the Node.js heap size
# ENV NODE_OPTIONS="--max-old-space-size=1024"

# RUN npm install

# COPY . .

# RUN npm run build


# # second stage build 
# FROM node:18-alpine as PRODUCTION_IMAGE
# WORKDIR /app/react-app 

# COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
# EXPOSE 8080

# COPY package.json .
# COPY vite.config.js .

# RUN npm i vite@latest -D
# EXPOSE 8080
# CMD ["npm","run","preview"]
# First stage build 
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/react-app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application
COPY . .

# Reinstall esbuild to ensure compatibility
RUN npm install esbuild@latest

# Build the application
RUN npm run build

# Second stage build 
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app 

# Copy build artifacts from the first stage
COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/

# Expose the port the app runs on
EXPOSE 8080

# Copy package.json and vite.config.js
COPY package.json .
COPY vite.config.js .

# Install vite in the production image
RUN npm i vite@latest -D

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["npm","run","preview"]
