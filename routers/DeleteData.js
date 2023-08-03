
const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const { ObjectId } = require('mongodb');

router.delete("/deletedata", async (req, res) => {
  const id = req.body.id;

  try {
    const result = await global.poolingData.db.collection("datas").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Data deleted successfully" });
    } else {
      res.status(404).json({ error: "Data not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
