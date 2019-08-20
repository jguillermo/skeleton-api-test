FROM node:10.15.0-jessie

# Create app directory
WORKDIR /application

COPY wait-for-it.sh /tmp/wait-for-it.sh
COPY runtest.sh /tmp/runtest.sh

RUN mkdir /nodecache && chmod 777 -R /nodecache \
    && npm config set cache /nodecache --global \
    && chmod +x /tmp/wait-for-it.sh \
    && chmod +x /tmp/runtest.sh

EXPOSE 80
