envsubst '\$PWD \$PORT' < nginx.conf.template > nginx.conf
nginx -c $PWD/nginx.conf
