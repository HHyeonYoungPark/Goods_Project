use goods;


CREATE TABLE item(
idx INT AUTO_INCREMENT PRIMARY KEY,
itemname VARCHAR(100),
category VARCHAR(50),
categoryCode VARCHAR(50),
price INT,
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
phone varchar(15),
zip VARCHAR(50),
address VARCHAR(1000),
channelname VARCHAR(100),
channelPlatform VARCHAR(50),
channelGenre VARCHAR(50),
url VARCHAR(255),
sellerimage VARCHAR(255),
intro VARCHAR(100),
grade VARCHAR(10),
regdate DATE 
);


CREATE TABLE orders(
idx INT AUTO_INCREMENT PRIMARY KEY,
customerName VARCHAR(50),
destination VARCHAR(1000),
phone varchar(15),
orderedItem VARCHAR(100),
totalPrice INT,
orderTime DATETIME
)

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

-- 11.23 리뷰 테이블 수정
create table review (
  idx int auto_increment primary key,
  Writer varchar(50),
  ItemNo varchar(50),
  attach VARCHAR(255),
  Contents varchar(255),
  Rating varchar(50),
  regdate DATE
);
-- 리뷰 항목 제거
  -- ItemName varchar(100),
  -- title varchar(50),

create table category1 (
    id int not null auto_increment primary key,
    category1 varchar(50) not null
);
insert into category1 values(null, "패션");
insert into category1 values(null, "전자기기");
insert into category1 values(null, "문구");
insert into category1 values(null, "악세사리");
insert into category1 values(null, "생활");


create table category2 (
  id int not null auto_increment primary key,
  category2 varchar(50),
  category1 varchar(50)
);

insert into category2 values(null,"스웨트니트","패션");
insert into category2 values(null,"후드티","패션");
insert into category2 values(null,"티셔츠","패션");
insert into category2 values(null,"니트","패션");

insert into category2 values(null,"이어폰","전자기기");
insert into category2 values(null,"키보드","전자기기");
insert into category2 values(null,"마우스","전자기기");
insert into category2 values(null,"스피커","전자기기");

insert into category2 values(null,"머그컵","생활");
insert into category2 values(null,"텀블러","생활");
insert into category2 values(null,"타월","생활");

insert into category2 values(null,"스티커","문구");
insert into category2 values(null,"펜","문구");
insert into category2 values(null,"노트","문구");
insert into category2 values(null,"지우개","문구");
insert into category2 values(null,"샤프","문구");
insert into category2 values(null,"필통","문구");

insert into category2 values(null,"폰케이스","악세사리");
insert into category2 values(null,"키링","악세사리");
insert into category2 values(null,"반지","악세사리");
insert into category2 values(null,"목걸이","악세사리");

create table channel (
  idx int not null auto_increment primary key,
  channelPlatform VARCHAR(50)
);

insert into channel values(null, "YOUTUBE");
insert into channel values(null, "TWITCH");
insert into channel values(null, "AFREECA");
insert into channel values(null, "INSTAGRAM");
insert into channel values(null, "TIKTOK");

create table channelSub (
  idx int not null auto_increment primary key,
  channelGenre VARCHAR(50)
);

insert into channelSub values(null, "Game");
insert into channelSub values(null, "Sports");
insert into channelSub values(null, "Music");
insert into channelSub values(null, "Travel");
insert into channelSub values(null, "Foods");
insert into channelSub values(null, "Others");
