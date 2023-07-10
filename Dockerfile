# Use the official Node.js LTS image as the base
FROM node:lts-alpine
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN yarn

# Copy the entire Next.js app to the working directory
COPY . .

# Build the Next.js app for production
RUN yarn build

# Expose the port that Next.js uses
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]