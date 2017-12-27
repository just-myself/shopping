/**
 * Created by web-01 on 2017/12/25.
 */
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const pool = require('./pool');

let app = express();
http.createServer(app).listen(3000);

//使用第三方中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(cors({
  origin: ['http://127.0.0.1', 'http://localhost', 'http://127.0.0.1:8080', 'http://localhost:8080'],
  methods: ['PUT','DELETE','GET','POST']
}));

app.get('/shop',(req,res)=>{
  pool.query('SELECT * FROM bookshop',(err,result)=>{
    console.log(result);
    if(err)throw err;
    res.json(result);
  })
});
