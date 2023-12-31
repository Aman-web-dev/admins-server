const express = require('express');
const app = express();
const connector = require("./db")
app.use(express.json());
const cors = require("cors");
const logger = require('./routers/Logger')





const PORT =process.env.PORT || 5000;



app.use(cors({ origin: '*' }));



const LoginRouter = require('./routers/Loginroute');
app.use('/api',LoginRouter);


const SigninRouter = require("./routers/Signinroute");
app.use('/api',SigninRouter);


const DataRouter = require('./routers/DataRoute')
app.use('/api',DataRouter);


const dataUpload=require('./routers/DataUpload')
app.use('/api',dataUpload);

const dataDelete=require('./routers/DeleteData')
app.use('/api',dataDelete);


const userlogs= require('./routers/LogsRouter')
app.use('/api',userlogs)


if(process.env.NODE_ENV==="production"){



  app.use(express.static("client/build"))
   const path =require("path");
   app.get("*",(req,res)=>{

    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
   })

}


app.listen(PORT, (err) => {
  if (err) {
    logger.log('error', `This is The Error  ${err}`);
  }
  console.log(`Running On port ${PORT}`)
});

