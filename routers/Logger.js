const nodemon = require("nodemon");
const {createLogger,transports, format } =require("winston")
const { MongoDB } = require("winston/lib/winston/transports")
require('dotenv').config();


require('winston-mongodb')

const logger =  createLogger({

    transports:[
        new transports.Console ({
            level:"error", 
            collection:'audit-logs',
            db:process.env.MONGO_URI,
            format:format.combine(format.timestamp(),format.json())
        }),

        new transports.MongoDB({
            level:'info',
            collection:'audit-logs',
            db:process.env.MONGO_URI,
            format:format.combine(format.timestamp(),format.json())
        }),

  
    ]
})


module.exports= logger