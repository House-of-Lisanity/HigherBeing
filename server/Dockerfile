# Use Node LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy rest of app
COPY . .

# Build TypeScript
RUN npm run build

# Expose Railway's dynamic port
EXPOSE $PORT

# Start app
CMD ["node", "dist/server.js"]
