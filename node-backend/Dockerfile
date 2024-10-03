# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Install GCC (for compiling C++ code) and make (for build automation)
# RUN apk add --no-cache g++ make && g++ --version && make --version
RUN apk update && apk add --no-cache g++ make

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose port 3001 for the server
EXPOSE 3001

# Command to run the Node.js app
CMD ["node", "index.js"]
