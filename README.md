# kasa-test

Consists of two parts:
## Simple express server to serve reservations data (`server` folder).

To run the server (default port is 8080):
- `npm install`
- `npm start`

Available API:
- `/reservations`

## Nuxt.js application (`client` folder).
To run web app in dev mode: `npm run dev` (please, note that offline support is available only in production mode).

To run web app in prod mode:
- `npm run-script build`
- `npn run-script start`