FROM node:lts-alpine as install
WORKDIR /src
COPY . .
RUN yarn install

FROM node:lts-alpine as builder
ENV NODE_ENV=production
WORKDIR /src
COPY --from=install /src .
RUN yarn build

FROM node:lts-alpine as runner
ENV NODE_ENV=production
WORKDIR /app
# Change the owner of the app dir. We'll use node user on prod.
#RUN mkdir app && chown -R node:node .
COPY --from=builder /src .

EXPOSE 3000
CMD ["yarn", "start:prod"]