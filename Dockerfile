FROM debian:bullseye-slim

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get -y install --no-install-recommends nodejs npm nginx gettext-base

WORKDIR /app

COPY . .

RUN npm install
RUN npm run ng build -- --prod

ENV PORT=80

CMD [ "/bin/bash", "cmd.sh" ]
