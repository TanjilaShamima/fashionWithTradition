const express = require('express');
const path = require('path');
const connectDatabase = require('./src/config/dbConnect');
const { serverPort } = require('./src/secret');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.listen(serverPort, async() => {
    console.log('listening on port ' + serverPort);
    await connectDatabase();
})