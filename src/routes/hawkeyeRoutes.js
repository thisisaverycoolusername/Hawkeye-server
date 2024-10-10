// routes/hawkeyeRoutes.js
const express = require('express');
const HawkeyeData = require('../models/hawkeyeData');
const router = express.Router();



const getTimeRange = (hours) => {
  const now = new Date();
  return new Date(now.getTime() - hours * 60 * 60 * 1000); // Convert hours to milliseconds
};

// GET temperature data for a specified time range
router.get('/temperature/:range', async (req, res) => {
    const { range } = req.params;
    console.log("indide the fuction range")
    let hours;
  
    switch (range) {
      case '1h':
        hours = 1;
        break;
      case '4h':
        hours = 4;
        break;
      case '1d':
        hours = 24;
        break;
      case '7d':
        hours = 7 * 24;
        break;
      case '30d':
        hours = 30 * 24;
        break;
      default:
        return res.status(400).json({ message: 'Invalid time range specified' });
    }
  
    try {
      const startTime = getTimeRange(hours);
      const data = await HawkeyeData.find({ time: { $gte: startTime } }).sort({ time: 1 });
  
      const totalDataPoints = data.length;

      if (totalDataPoints <= 24) {
        // If less than or equal to 24 data points, return all
        return res.status(200).json({ data });
      }
  
      // Calculate the interval to select 24 evenly spaced data points
      const interval = Math.floor(totalDataPoints / 24);
      const selectedDataPoints = [];
  
      for (let i = 0; i < 24; i++) {
        selectedDataPoints.push(data[i * interval]);
      }
  
      res.status(200).json({ data: selectedDataPoints });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
});


// POST temperature data
router.post('/temperature', async (req, res) => {
  const { temperature } = req.body;
    console.log(temperature)
  try {
    const newEntry = new HawkeyeData({
      time: new Date(), // Capturing current time
      temperature,
    });

    await newEntry.save();
    res.status(201).json({ message: 'Temperature data recorded', data: newEntry });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
