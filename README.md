# Airline Booking System Backend 🛩️

### Description
This is a backend for Airline Booking System. It is built using Node.js, Express and relational database (PostgreSQL).

### Technologies
- Node.js
- Express
- PostgreSQL
- Sequelize
- Winston

# FOLDER STRUCTURE

- `src`  -> src -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

- `config`  ->  In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up dotenv so that we can use the environment variables anywhere in a cleaner fashion, this is done in the server-config.js. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `public`  ->  This is where you can store any static files like images, templates, and temprary folder, .gitkeep is used to keep the folder empty.

### Setup the project 

- npm install  OR  (npm init -y)
- install dependencies (npm install --save express winston sequelize dotenv)
- create a .env file and add the following details
```
PORT = <port number of your choice>
```
- create a config.json file and add the following details

example:
```
PORT = 1000
```
- Go inside the src folder and execute the following command
``` 
npx sequelize-cli init
```
- By executing the above command you will be get migration and seeders folder inside the src folder and if config folder is alredy present then sequelize-cli will autmoatically detect it and add the config file inside it.
- Now you can set the database details inside the config file
```
 - It has three environments development, test and production
 - development is the default environment
 - test is for testing purpose
 - production is for production
 ```




