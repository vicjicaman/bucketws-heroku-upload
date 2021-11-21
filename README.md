# BucketWS addon + Heroku getting started

This demo repository is based on the NodeJS getting started repository from Heroku +  the BucketWS addon.
This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.


<!-- VIDEO -->
## Video

Check this 2min video that shows the process of deploy this repository,create the addon adn upload a file.
[view video](https://www.youtube.com/watch?v=ZYTkzALbzok)


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


<!-- ABOUT -->
## About

**BucketWS** is a service to let you create private or public file buckets that will be delivered over a CDN with SSL

The service feature the next functionalities:
- Upload files signed from the server to a public bucket
- Upload files signed from the server to a private bucket
- Authorize the viewer to see the private bucket files
- List the files from the public bucket
- List the files from the private bucket
- Upload a file anonymously
