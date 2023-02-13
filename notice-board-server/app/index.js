const express = require('express');
const routes = require('./route/routes')
const cors = require("cors");
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
const app = express();
app.use(express.json())
app.use(cors(corsOptions))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes)
const PORT = process.env.PORT ? process.env.PORT : 8000;
mongoose.connect("mongodb+srv://rrsoft22:s21yLm96d3OkonxY@cluster0.wutscdz.mongodb.net/?retryWrites=true&w=majority")
    .then((res) => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })

