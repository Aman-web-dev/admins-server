const express = require('express');
const router = express.Router();
const DataModel = require('../models/PollingModel'); // Import the Mongoose schema

// POST route to upload data to the server
router.post('/upload', async (req, res) => {
  try {
    const newData = req.body; 
    const result = await DataModel.create(newData);
    console.log(newData)
    res.status(201).json({ message: 'Data uploaded successfully', data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
