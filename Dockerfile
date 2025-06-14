FROM node:22-alpine3.19

# Update Alpine packages to ensure latest security patches
RUN apk update && apk upgrade --no-cache

WORKDIR /src

# Copy only package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Copy and set permissions for the start script
COPY ./bin/start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

EXPOSE 80

CMD ["/usr/local/bin/start.sh"]