const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();



router.get("/loaddata", async (req, res) => {

  const fromIndex= parseInt(req.query.from) || 0;
  const toIndex = parseInt(req.query.to) || 10;

  const filter= req.query.constituency  || "All"; 



  let query = {}; // Start with an empty query object
  
  if (filter !== "All") {
    query = { Parent_Constituency: filter };
  }

  if(filter =="All"){
    query={}
  }



  try {
    const data = await global.poolingData.db
      .collection("datas")
      .find(query)
      .toArray();

    const paginatedData = data.slice(fromIndex, toIndex);

   console.log(filter)
  //  console.log([data])
    console.log(fromIndex,toIndex)
    res.status(201).send([paginatedData])
  }
  catch (error) {

    console.error(error)
    res.send('server Error')
  }
})

  

module.exports=router;