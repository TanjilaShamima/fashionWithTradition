const express = require('express');
const path = require('path');
const connectDatabase = require('./src/config/dbConnect');
const { serverPort } = require('./src/secret');
const authRouter = require('./src/router/authRouter');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('api/auth', authRouter);

app.listen(serverPort, async() => {
    console.log('listening on port ' + serverPort);
    await connectDatabase();
})