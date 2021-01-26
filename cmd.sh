#!/bin/bash 

_term() { 
  echo "Caught SIGTERM signal!" 
  kill -TERM "$child" 2>/dev/null
}

trap _term SIGTERM

echo "Applying template files"
envsubst '\$PWD \$PORT' < nginx.conf.template > nginx.conf
envsubst '\$API_URL_BASE' < ./dist/website-frontend/en-AU/assets/api-config.json.template > ./dist/website-frontend/en-AU/assets/api-config.json

echo "Starting nginx"
nginx -c $PWD/nginx.conf &
child=$! 
wait "$child"
echo "Shutdown nginx"
