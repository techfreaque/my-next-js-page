git stash
git pull
chmod u+x docker_install_and_update.sh
docker build . -t my-next-js-page
docker stop my-next-js-page
docker rm my-next-js-page
docker run -d --name my-next-js-page --network caddy_internal my-next-js-page