# Build with : docker build -t brapicoordinatorselby/brapi-test-client ./
# run with : docker run --name="brapi-test-client" --network=bridge -d brapicoordinatorselby/brapi-test-client

FROM nginx

# nginx config
COPY ./server/nginx.conf /etc/nginx/nginx.conf
COPY ./server/brapi-client.conf /etc/nginx/sites-available/brapi-client.conf

# brapi.org content
COPY ./dist/ /var/www/html/

EXPOSE 8080