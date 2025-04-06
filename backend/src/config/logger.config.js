const { createLogger, format, transports } = require('winston');
const { combine, timestamp } = format;

const custromFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp}  ${level}: ${message}`;
}
);
const logger = createLogger({
    level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    custromFormat,
   
  ),
  transports: [new transports.Console(),
    new transports.File({ filename: 'logs/server.log' })],
}); 
 

module.exports = logger;