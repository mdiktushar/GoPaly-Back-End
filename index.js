const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('GoPaly is running')
})

app.listen(port, () => {
    console.log(`car doctor server is running on port: ${port}`);
})