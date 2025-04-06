
require('dotenv').config({ path: '../.env' });

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);
console.log(process.env.DB_HOST); 
console.log(process.env.DB_PORT);
module.exports = {
  development: {
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect:"postgres",
  },
};