# Task Manager

A simple Task Manager that's built with AngularJS, development is in progress and for now there are only login and register functionalities.

I'm bulding it for purpose of improving my AngularJS skills. I'm trying to stick to some of [John Papa's](https://github.com/johnpapa) and [Todd Moto's](https://github.com/toddmotto) guidelines to have clean and readable code.

## Dependencies

- Node
- Bower

## Installation

After cloning the repository, the following commands install the Javascript dependencies:

    npm install
    bower install
    
## Starting the server

Run the following command to generate and run database server:

    npm run database

Run the following command to build:

    gulp

After the server starts, the application is accessible at the following URL:

    http://localhost:3000
    
In case of errors check if you're not running other server at port `3000`, if yes, then application will be available at port `3001`.
