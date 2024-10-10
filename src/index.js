const express = require('express');
const cors = require('cors'); // Import CORS
const connectDB = require('./config/db');
const hawkeyeRoutes = require('./routes/hawkeyeRoutes');

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://martinlindenhook.se', // Your Next.js app URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials
};

// Apply the corsOptions
app.use(cors(corsOptions)); // Add this line

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB(); // Ensure your MongoDB connection is set up

// Use the hawkeye routes
app.use('/api', hawkeyeRoutes); // Mount the routes at /api

const PORT = process.env.PORT || 3001; // or any other port you prefer
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
