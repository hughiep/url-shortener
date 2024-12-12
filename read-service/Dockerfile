# Dependencies

FROM node:22-alpine as build

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm@latest
RUN pnpm install --frozen-lockfile

COPY . .

ENV NODE_ENV=production

RUN pnpm build

# Production image

FROM node:22-alpine as production

WORKDIR /shortener-read

USER node

COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist

CMD ["node", "dist/main.js"]
