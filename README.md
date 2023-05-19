# my-next-js-page


## start development server
npm i\
npm run dev

## run/update with docker in production
docker build . -t my-next-js-page
docker stop my-next-js-page
docker rm my-next-js-page
docker run -d --name my-next-js-page --network caddy_internal my-next-js-page

