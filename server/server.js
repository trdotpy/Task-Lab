const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Load environment variables
require("dotenv").config();

// Load routes
const userRoutes = require("./routes/User");
const boardRoutes = require("./routes/Board");
const taskRoutes = require("./routes/Task");

// Initialize Express app
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

// Define the port to listen on
const port = process.env.PORT || 4000;

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/tasks", taskRoutes);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
