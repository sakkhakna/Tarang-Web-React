# First stage build 
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app

# Set the Node.js heap size
ENV NODE_OPTIONS="--max-old-space-size=512"

RUN npm install

# Copy the rest of the application
COPY . /app

# Reinstall esbuild to ensure compatibility
RUN npm install esbuild@latest

# Build the application
RUN npm run build

# Second stage build 
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app 

# Copy build artifacts from the first stage
COPY --from=BUILD_IMAGE /app/dist/ /app/dist/

# Expose the port the app runs on
EXPOSE 8080

# Copy package.json and vite.config.js
COPY package.json /app
COPY vite.config.js /app

# Install vite in the production image
RUN npm i vite@latest -D

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["npm","run","preview"]
