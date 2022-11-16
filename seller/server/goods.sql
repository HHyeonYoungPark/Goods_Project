use goods;


CREATE TABLE item(
idx INT AUTO_INCREMENT PRIMARY KEY,
category VARCHAR(50),
image VARCHAR(255),
itemname VARCHAR(100),
price VARCHAR(50),
stock INT,
contents TEXT,
regdate DATE
);

CREATE TABLE item(
  idx INT AUTO_INCREMENT PRIMARY KEY,
  user_idx INT,
  category_goods_idx INT,
  image VARCHAR(255),
  itemname VARCHAR(100),
  price VARCHAR(50),
  stock INT,
  contents TEXT,
  regdate DATE,
  FOREIGN KEY (user_idx) references user(idx),
  FOREIGN KEY (category_goods_idx) references category_goods(idx)
);

CREATE TABLE user(
idx INT AUTO_INCREMENT PRIMARY KEY,
id VARCHAR(50) UNIQUE,
pw VARCHAR(255),
sellername VARCHAR(10),
email varchar(255),
channelname VARCHAR(100),
channelPlatform VARCHAR(50),
channelGenre VARCHAR(50),
url VARCHAR(255),
sellerimage VARCHAR(255),
intro VARCHAR(100),
grade VARCHAR(10),
regdate DATE 
);

CREATE TABLE AskToAdmin(
idx INT AUTO_INCREMENT PRIMARY KEY,
askAnswer VARCHAR(20),
askCategory VARCHAR(100),
askTitle VARCHAR(100),
askWriter VARCHAR(100),
askImage VARCHAR(255),
askContents TEXT,
regdate DATETIME
);

CREATE TABLE notice(
idx INT AUTO_INCREMENT PRIMARY KEY,
noticeTitle VARCHAR(100),
noticeWriter VARCHAR(50),
noticeContent TEXT,
noticeView int,
regdate DATE
);

create table boardManager (
  boardIdx int auto_increment primary key,
  boardName varchar(50),
  boardType varchar(50),
  boardUrl varchar(255),
  secret char(1) default 'F',
  readAllow varchar(10),
  writeAllow varchar(10),
  replyAllow varchar(10),
  modifyAllow varchar(10),
  deleteAllow varchar(10),
  upload varchar(10),
  download varchar(10),
  boardDesc varchar(255),
  createDate date
);