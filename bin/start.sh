# !/usr/bin/env sh

if [ $NODE_ENV == "development" ] then
    npm run start:dev
else
    npm run build
    node dist/src/main
fi
