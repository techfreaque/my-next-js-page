git stash
git pull
chmod u+x docker_install_and_update.sh
docker compose down
docker compose build
docker compose up -d