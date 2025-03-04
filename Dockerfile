# Use a Node.js base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@latest

# Copy the rest of your application code
COPY . .

# Expose the port your app listens on
EXPOSE 5050

# Start the app
CMD ["node", "app.js"]