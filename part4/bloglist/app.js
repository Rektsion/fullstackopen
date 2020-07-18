
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const blogRoute = require('./controller/blogs');
require("dotenv").config();

const app = express();

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })


app.use(cors())
app.use(express.static("build"))
app.use(express.json())
app.use(blogRoute)


module.exports = app