const express = require('express');
const app = express();

const router = require('./route/postsRoute');

app.use('/', router);

app.listen(3000, () => {
    console.log('server runing on 3000');
});