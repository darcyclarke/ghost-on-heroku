## Host [Ghost](https://ghost.org/) (version 2.x) on [Heroku](https://heroku.com/)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Usage
- Hit the link above for a one-click install **or**
- Copy the `HTTPS` url of this git repo & add it as your application's **buildpack** in Heroku (ie. `https://github.com/darcyclarke/ghost-on-heroku.git`)

#### S3 File Storage
There are a number of default environment variables to set up if you'd like to use S3 storage for file uploads. The configs may change based on the underlying [ghost-storage-adapter-s3](https://github.com/colinmeinke/ghost-storage-adapter-s3) plugin (so please review the README over on that project if you're wondering what each value is used for)

#### Credits
This project is a fork of [@cobyism](https://github.com/cobyism)'s [ghost-on-heroku](https://github.com/cobyism/ghost-on-heroku) project (yet, update/graded for Ghost **v2.x**)