use goods;


CREATE TABLE item(
idx INT AUTO_INCREMENT PRIMARY KEY,
itemname VARCHAR(100),
category VARCHAR(50),
categoryCode VARCHAR(50),
price VARCHAR(50),
stock INT,
attach VARCHAR(255),
attach2 VARCHAR(255),
attach3 VARCHAR(255),
contents TEXT,
madein VARCHAR(50),
regdate DATE
);

  


CREATE TABLE user(
idx INT AUTO_INCREMENT PRIMARY KEY,
id VARCHAR(50) UNIQUE,
pw VARCHAR(255),
sellername VARCHAR(10),
email varchar(255),
zip VARCHAR(50),
address VARCHAR(255),
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
  boardCode varchar(50),
  boardCategory varchar(50),
  boardName varchar(50),
  boardBuilder varchar(50), 
  boardReadAllow varchar(50), 
  boardWriteAllow varchar(50),
  boardCommentAllow varchar(50),
  boardModifyAllow varchar(50),
  createDate date,
  modifyDate date
);


create table review (
reviewIdx int auto_increment primary key,
reviewItem varchar(50),
reviewContents varchar(50),
reviewRecom varchar(50)
);