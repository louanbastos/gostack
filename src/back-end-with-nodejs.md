# Backend with Node.js

## Comment lines

`Shift + Alt + A`

## Init a project using Yarn

`yarn init -y`

## Add Express.js into the project

`yarn add express`

## Execute the project

`node index.js`

## Configuring Nodemon (auto server refresh) in developer mode `-D`

`yarn add nodemon -D`

## Execute Nodemon project

`yarn nodemon src/index.js`

## Execute Nodemon project if `dev mode` are enable on package.json

`yarn nodemon`

## Example package.json with nodemon and dev mode

```json
{
  "main": "src/index.js",
  "scripts": {
    "dev": "nodemon"
  }
}
```

## Req and Request are the same thing, as well as Res and Response

`req == require` and `res == response`
