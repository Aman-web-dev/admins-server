const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const logger = require('./Logger')




router.get("/userlogs", async (req, res) => {
  try {
    const data = await global.poolingData.db
      .collection("audit-logs")
      .find({})
      .toArray();
const slicedData= data
    res.status(201).send([slicedData])

  }
  catch (error) {
      logger.log('error', `error ${error} `)
    console.error(error)
    res.send('server Error')
  }
})

  

module.exports=router;