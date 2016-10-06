# Khepri
Khepri is a collection of Riot Components I have created as a means of learning more about Riot, Redux and RxJS via redux-observables.

## Installation Instructions
This project uses npm for dependencies and webpack for bundling etc.

`npm install `

This may take a while as there are a number of dev dependencies.

`npm start`

This will kick off a webpack sever which should translate the riot tags, copy necessary resources and bundle all the javascript and then host the files to view in the browser.

Once that has completed you should be able to view the site by visiting

`http://localhost:8080`

## Simply build the javascript bundle

If you just want to bundle without hosting a web-server you can run the following **relative to the project root**

` ./node_modules/.bin/webpack`
