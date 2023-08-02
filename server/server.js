const express = require('express');
const app = express();
const connector = require("./db")

// const config = require('./config')

app.use(express.json());
const cors = require("cors");
// app.use(cors())






const PORT =process.env.PORT || 5000;

global.PORT=PORT;

console.log(global.PORT)
console.log(PORT)

app.use(cors({origin:`http://localhost:3000`}));



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



if(process.env.NODE_ENV==="production"){



  app.use(express.static("client/build"))
   const path =require("path");
   app.get("*",(req,res)=>{

    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
   })

}


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Running on port ${PORT}`);
});

