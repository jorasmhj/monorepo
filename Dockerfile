FROM node:20.2-alpine3.17 as base

# adding apk deps to avoid node-gyp related errors and some other stuff. adds turborepo globally
RUN apk add -f --update --no-cache --virtual .gyp nano bash libc6-compat python3 make g++ \
      && npm i -g turbo \
      && apk del .gyp

#############################################
FROM base AS pruned
WORKDIR /app
ARG APP

COPY . .

# see https://turbo.build/repo/docs/reference/command-line-reference#turbo-prune---scopetarget
RUN turbo prune --scope=$APP --docker

#############################################
FROM base AS installer
WORKDIR /app
ARG APP

COPY --from=pruned /app/out/json/ .
COPY --from=pruned /app/out/package-lock.json /app/package-lock.json

# Forces the layer to recreate if the app's package.json changes
COPY services/${APP}/package.json /app/services/${APP}/package.json

# see https://github.com/moby/buildkit/blob/master/frontend/dockerfile/docs/reference.md#run---mounttypecache
RUN npm i

COPY --from=pruned /app/out/full/ .
COPY turbo.json turbo.json

# For example: `--filter=frontend^...` means all of frontend's dependencies will be built, but not the frontend app itself (which we don't need to do for dev environment)
RUN turbo run build --no-cache --filter=${APP}^...

# re-running npm ensures that dependencies between workspaces are linked correctly
RUN npm i

#############################################
FROM base AS runner
WORKDIR /app
ARG APP
ARG START_COMMAND=dev

COPY --from=installer /app .

CMD npm run ${APP}:${START_COMMAND}
