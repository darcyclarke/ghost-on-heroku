## Host [Ghost](https://ghost.org/) (version 2.x) on [Heroku](https://heroku.com/)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Usage
- Hit the link above for a one-click install **or**
- Copy the `HTTPS` url of this git repo & add it as your application's **buildpack** in Heroku (ie. `https://github.com/darcyclarke/ghost-on-heroku.git`)

#### S3 File Storage
There are a number of default environment variables to set up if you'd like to use S3 storage for file uploads. The configs may change based on the underlying [ghost-storage-adapter-s3](https://github.com/colinmeinke/ghost-storage-adapter-s3) plugin (so please review the README over on that project if you're wondering what each value is used for)

**tldr;**

When deploying your Heroku application for the first time, you should get prompted for the following environment variables (which get mapped in the generated `config.production.json` for the **ghost_sotrage-adapter-s3**):

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_DEFAULT_REGION
AWS_S3_BUCKET
```

#### Credits
This project is a fork of [@cobyism](https://github.com/cobyism)'s [ghost-on-heroku](https://github.com/cobyism/ghost-on-heroku) project (yet, update/graded for Ghost **v2.x**)