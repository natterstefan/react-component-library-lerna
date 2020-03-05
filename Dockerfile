# The Node version that we'll be running for our version of React.
# You may have to search the Node directory for a version that fits
# the version of React you're using.
FROM node:10.16.3

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app

#RUN chown node /app
# Use node user from carbon image
#USER node
WORKDIR /app


# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/
RUN npm install --silent

# COPY packages/apple/package.json /app/packages/apple/package.json
# COPY packages/banana/package.json /app/packages/banana/package.json
# COPY packages/grocery/package.json /app/packages/grocery/package.json
# COPY lerna.json /app/lerna.json

# copy all the source
COPY . /app

RUN npm run bootstrap


# RUN npm install react-scripts@1.1.1 -g --silent
# Run BUILD 


# RUN chown -R node:node /app/packages/grocery/package.json
# RUN chown -R node:node /app/packages/apple/package.json
# RUN chown -R node:node /app/packages/banana/package.json

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000

# start app
CMD ["npm", "start"]