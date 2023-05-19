# my-next-js-page
My personal website built with next.js, feel free to use my code as a starting point

A demo of the current version is available at [a42.ch](https://a42.ch)

## start development server
npm i\
npm run dev

## run/update with docker in production
docker build . -t my-next-js-page\
docker stop my-next-js-page\
docker rm my-next-js-page\
docker run -d --name my-next-js-page --network caddy_internal my-next-js-page

