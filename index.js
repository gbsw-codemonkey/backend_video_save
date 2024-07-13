const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./db');
const port = 3000;

const routes = require('./router/router.js')
//bodyParser
app.use(bodyParser.json());

//db 연결
db.connect((err) => {
    if(err) {
        console.log('db connection failed:', err.stack);
    } else {
        console.log('db connection success');
    }
});

app.use('/api', routes);


app.listen(port, (err) => {
    if(err) throw err;
    console.log(`실행 중인 서버 포트 : ${port}`);
});