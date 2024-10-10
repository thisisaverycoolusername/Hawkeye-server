🌡️ IoT Temperature Server 🌐

Welcome to the IoT Temperature Server! This Express-based server collects temperature data from IoT devices and provides an API for accessing the data. 🌡️📡
🚀 Features

    Collects temperature data from IoT devices 📱 ➡️ 🖥️
    Stores data in MongoDB 💽
    Exposes an API for retrieving temperature data 📊
    Time-sorted data retrieval for:
        1 hour ⏳
        4 hours 🕒
        1 day 🌞
        7 days 📅
        30 days 🗓️

🛠️ Installation

    Clone the repo:

    bash

git clone https://github.com/yourusername/iot-temperature-server.git

Navigate into the project directory:

bash

cd iot-temperature-server

Install dependencies:

bash

npm install

Start the server:

bash

    npm start

    The server will start on http://localhost:3000.

📡 API Endpoints

    GET /temperature: Fetch the latest temperature data.
    GET /temperature?interval=1h: Fetch temperature data for the last 1 hour.
    GET /temperature?interval=1d: Fetch temperature data for the last 1 day.

🛠️ Technologies

    Express.js: Backend framework 🖥️
    MongoDB: Database for storing temperature data 💽
    Mongoose: ODM for MongoDB ⚙️

📊 Data Model

The server uses the following Mongoose schema for temperature data:

js

const hawkeyeDataSchema = new mongoose.Schema({
  temperature: Number,
  timestamp: Date,
});

📅 Time-based Retrieval

Your server supports time-based sorting with 24 evenly spaced data points for intervals like 1 hour, 4 hours, 1 day, 7 days, and 30 days. 
This ensures users can visualize temperature trends effectively over different time periods! ⏰
🐛 Troubleshooting

    Database connection error? Make sure MongoDB is running and accessible.
    API not working? Ensure all dependencies are installed and check for any syntax errors.

🧑‍💻 Contributing

We welcome contributions! Feel free to open issues or submit pull requests. Let's make this project better together! 💡
