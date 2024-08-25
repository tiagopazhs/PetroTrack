# PetroTrack
PetroTrack is a project for tracking sensor data in real-time for an oil and gas company. This project includes both a backend API and a frontend dashboard for data visualization.

## Prerequisites
Before you begin, ensure you have the following installed:

- Node.js
- PostgreSQL

## Getting Started

### Backend (Server)

1. Navigate to the server directory:

```
cd server
```

2. Install dependencies:

```
npm install
```

3. Set up the database:

- Ensure PostgreSQL is running and create a database named petrotrack_db.
- Update the server/src/database/db.js file with your PostgreSQL credentials if necessary.

4. Run the backend server:

```
npm start
```

The server will be running on http://localhost:3000.

### Frontend (Client)

1. Navigate to the client directory:

```
cd client
```

2. Install dependencies:

```
npm install
```

3. Run the frontend server:

```
npm start
```

The frontend will be running on http://localhost:3001.

## Project Structure

### Server

server/src/index.js: Main entry point for the backend application.
server/src/controllers/SensorDataController.js: Handles requests related to sensor data.
server/src/models/Sensor.js: Defines the Sensor model.
server/src/models/SensorData.js: Defines the SensorData model.
server/src/database/db.js: Configures and connects to the PostgreSQL database.

### Client

client/src/App.js: Main entry point for the frontend application.
client/src/components/Chart.js: Displays charts for data visualization.
client/src/services/api.js: Handles API requests to the backend.

## Usage

- Backend: Provides endpoints for receiving and storing sensor data. Use the /ping endpoint to check if the server is running and the /sensor-data endpoint to post new sensor data.

- Frontend: Displays visualizations of sensor data, allowing you to view metrics over different time periods.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License.
