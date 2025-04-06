
require('dotenv').config({ path: './.env' });

const app = require('./app.js');
const PORT = process.env.PORT ;


//logs
const { LogFile } = require('./config/index.js');

app.listen(PORT, () => {  
    try{
       LogFile.info(`Server is running on port ${PORT}`);
   }catch(error){
       LogFile.error(`Error logging server start:`, error);
   }
});