const connect = require('./configs/db');
const express = require('express');
const app = express();
app.use(express.json());

const start = async () => {
    await connect();
    app.listen(2020, () => {
        console.log('Listening on 2020...!');
    });
};

module.exports = {
    start,
    app,
};
