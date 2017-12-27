SET NAMES UTF8;
DROP DATABASE IF EXISTS book;
CREATE DATABASE book CHARSET=UTF8;
USE book;
CREATE TABLE bookshop (
 uid   INT AUTO_INCREMENT PRIMARY KEY,
 img  VARCHAR(64),
 title VARCHAR(64),
 money DECIMAL(6,2),
 number INT
);
INSERT INTO bookshop VALUES(
NULL,'src/assets/img/4583058_160.jpg','今日店休','45.00','0'),
(NULL,'src/assets/img/160_fff447d888aa4835a0be7c900567ce83.png','绿:陪安东尼度过漫长岁月(4)','36.80','0'),
(NULL,'src/assets/img/4620767_160.jpg','遇见你真好','45.00','0'),
(NULL,'src/assets/img/4637732_160.jpg','我的前半生','39.00','0'),
(NULL,'src/assets/img/4685273_160.jpg','偷窥者','38.00','0'),
(NULL,'src/assets/img/4688178_160.jpg','故事生灵','45.00','0'),
(NULL,'src/assets/img/4734003_160.jpg','葡萄牙的高山','58.00','0'),
(NULL,'src/assets/img/4777431_160.jpg','斗罗大陆','29.80','0')



