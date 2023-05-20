# Building image
# docker build . -t example-image-name

# Install dependencies only when needed
FROM node:14-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
COPY . .
RUN apk add --no-cache libc6-compat
WORKDIR /
RUN npm i --f
RUN yarn build

# Production image, copy all the files and run next


# todo uncomment in production 
FROM node:14-alpine AS runner
WORKDIR /

ENV NODE_ENV production
# ENV URL_PREFIX "/"

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# todo uncomment in production 
# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=deps next.config.js ./
COPY --from=deps public ./public
COPY --from=deps --chown=nextjs:nodejs .next ./.next
COPY --from=deps node_modules ./node_modules
COPY --from=deps package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]
