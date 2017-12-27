/**
 * Created by web-01 on 2017/12/25.
 */
const mysql = require('mysql');

let pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  port: 3306,
  database: 'book',
  connectionLimit: 10
});
console.log('连接池创建完成');

module.exports = pool;
