# Website (Frontend)

https://www.marco.satti.id.au

Built with Angular.

Licence: GPLv3+

## Local Development

Prerequisites:
- Make a `src/assets/api-config.json` file with appropriate configuration (see template).

```
npm install
npm run ng serve
```

## Building

```
docker build -t website-frontend .
```

## Running

```
docker run -it --rm -p 32781:80 website-frontend
```

### Environment Variables Used

- PORT (default: "80")
- API_URL_BASE
