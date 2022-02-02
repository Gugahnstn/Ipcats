FROM node as build

WORKDIR /app
COPY . /app

# RUN npm install
# RUN ln -s /copy/node_modules /app/node_modules

ENV NODE_PORT 5000
ENV PORT 5000

# VOLUME [ /copy/node_modules ]
# ENTRYPOINT [ "npm", "run", "dev" ]

# FROM nginx

# COPY --from=build /app/dist /usr/share/nginx/html
