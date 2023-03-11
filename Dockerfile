
# minimal alpine image for quick dev build
# FROM mhart/alpine-node


FROM node:alpine
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]



#For production environment
# FROM node:alpine as BUILD_IMAGE
# WORKDIR /app
# COPY package.json yarn.lock ./
# # install dependencies
# RUN yarn install --frozen-lockfile
# COPY . .
# # build
# RUN yarn build
# # remove dev dependencies
# RUN npm prune --production

# FROM node:alpine
# WORKDIR /app
# # copy from build image
# COPY --from=BUILD_IMAGE /app/package.json ./package.json
# COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
# COPY --from=BUILD_IMAGE /app/.next ./.next
# COPY --from=BUILD_IMAGE /app/public ./public
# EXPOSE 3000
# CMD ["yarn", "start"]