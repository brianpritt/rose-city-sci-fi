# RoseCitySciFi

* By Brian Pritt

This application is a simple club roster that allows users to search through a database of other users, and allows an administrator add, edit, and delete user instances.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [AngularJS](https://angularjs.org/)
* [Angular-CLI](https://cli.angular.io/)
* [GulpJS](http://gulpjs.com/)

This app also relies on Google Firebase.  The user will need to make an accout [here](https://firebase.google.com/).  Create a new project.  Navigate to the database selection, and upload the scificlub.json file included with the project.  The user will also need to change the permissions to the database in the rules section. Both read and write need to be set to true.
In the overview tab copy and paste the approriate code for this app into a new file called api-key.ts in the src/spp folder.

## Installation

* `git clone https://github.com/brianpritt/rose-city-sci-fi` this repository
* `cd rose-city-sci-fi`
* `npm install`
* `bower install -g`
* `bower init`

## Running / Development

* `ng serve`
visit your app at [http://localhost:4200](http://localhost:4200).


### Building

* `ng build`

### Known Bugs
_No known bugs at last commit_


### License
* GPLv3
