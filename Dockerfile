FROM debian:buster-slim

RUN apt-get update && apt-get -y install --no-install-recommends \
    ca-certificates \
    curl \
    nginx-light \
    gettext-base \ 
    lsb-release \
    gnupg

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get update && apt-get -y install --no-install-recommends \
    nodejs

WORKDIR /app

COPY . .

RUN npm install
RUN npm run ng -- build --prod

ENV PORT=80

CMD [ "/bin/bash", "cmd.sh" ]
