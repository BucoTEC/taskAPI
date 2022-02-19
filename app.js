const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware

app.use(express.static("./public"));
app.use(express.json());

// routes
//test
//test4
app.use("/api", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;
const db = process.env.MONGO_URI || 'mongodb://localhost:27017/taskAPI'
const start = async () => {
  try {
    await connectDB(db);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
    console.log("Connection to database astablished");
  } catch (error) {
    console.log(error);
  }
};

start();
