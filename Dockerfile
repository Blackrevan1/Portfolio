# ---------- build stage ----------
# Builds the static site. node:20-alpine is multi-arch, so this works
# on the Raspberry Pi (arm64) as well as your laptop (amd64).
FROM node:20-alpine AS build
WORKDIR /app

# install deps against the lockfile for a reproducible build
COPY package.json package-lock.json ./
RUN npm ci

# build the Vite site -> /app/dist
COPY . .
RUN npm run build

# ---------- serve stage ----------
# Tiny nginx image that just serves the pre-built static files.
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
