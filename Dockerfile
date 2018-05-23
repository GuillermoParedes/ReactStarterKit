# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:8

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Create folder
RUN mkdir -p /usr/local/app

# Copy files
COPY . /usr/local/app

# Workdir job
WORKDIR /usr/local/app

# Install dependencies
RUN npm install

# Exponent port 3030
EXPOSE 3030

# Run project
CMD npm run start
