require("dotenv").config();
const { PORT, MONGODB_URI } = process.env;

const express = require("express");
require("./config/db.connection");

const cors = require("cors")
const morgan = require("morgan")

const peopleController = require('./controllers/people-controller')

const app = express();

app.use(express.json());
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

// all requests for endpoints that begin with '/people'
app.use('/people', peopleController)

app.use('/people', peopleController)

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`)); 