const express = require('express');
const router = express.Router();
const DataModel = require('../models/PollingModel'); 
const logger = require('./Logger')


// POST route to upload data to the server
router.post('/upload', async (req, res) => {
  try {
    const newData = req.body; 
    const result = await DataModel.create(newData);
    console.log(newData)
    logger.log('info',`data uploaded on the data Base ${newData}`)

    res.status(201).json({ message: 'Data uploaded successfully', data: result });
  } catch (error) {
    console.error(error);
    logger.log('error', `error uploading a Data ${error} `)
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
