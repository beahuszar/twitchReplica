This project was created with the help of [Modern React with Redux](https://www.udemy.com/course/react-redux/) course.

## A Twitch like App

- React components
- Redux state management
- Redux DevTools extension
- Redux Form
- Redux Thunk
- Axios
- Browser Router, Route, Link
- Google Authentication
- REST api
- JSON-server mock
- Browser Router, Route, Link
- Google Authentication
- Portals
- Modals
- Node Media Server / FLV.JS
- obsproject

## How to start the app
- run Client directory on localhos (npm run)
- setup & run a [JSON-server](https://github.com/typicode/json-server): "REST API"
  - create an empty `db.json` file

`package.json`

```js
{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "json-server -p 3001 -w db.json"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.15.1"
  }
}
```
- setup & run [Node Meda Server](https://github.com/illuspas/Node-Media-Server)

`index.js`

```js
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();
```

`package.json`

```js
{
  "name": "rtmpserver",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "node-media-server": "^2.1.4"
  }
}
```

- connect your service with [OBS](https://obsproject.com/)
```
service: custom
server: rtmp://localhost/live
stream key: id of the saved stream 
```
