# Use the official Node.js LTS image as the base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the entire Next.js app to the working directory
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port that Next.js uses
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]