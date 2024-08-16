# Use the official Node 20 image as the base image
FROM node:20 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Use the official nginx image as the base image
FROM nginx

# Copy the static build from the builder stage to the nginx default public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port on which the application will run
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
