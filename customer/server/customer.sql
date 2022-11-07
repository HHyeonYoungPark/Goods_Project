USE goods;

CREATE TABLE customer (
  idx INT AUTO_INCREMENT PRIMARY KEY,
  id VARCHAR(50) UNIQUE,
  pw VARCHAR(50),
  NAME VARCHAR(50),
  moblie VARCHAR(20),
  email VARCHAR(255) UNIQUE,
  address1 VARCHAR(100),
  address2 VARCHAR(100),
  zipcod VARCHAR(10),
  regdate DATETIME
);

CREATE TABLE seller(
  idx INT AUTO_INCREMENT PRIMARY KEY,
  id VARCHAR(50) UNIQUE,
  pw VARCHAR(255),
  sellername VARCHAR(10),
  email varchar(255),
  sellertype VARCHAR(10),
  channelname VARCHAR(100),
  url VARCHAR(255),
  sellerimage VARCHAR(255),
  intro VARCHAR(100),
  regdate DATE 
);

CREATE TABLE category (
  idx INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE item(
  idx INT AUTO_INCREMENT PRIMARY KEY,
  FOREIGN KEY seller_name references seller(sellername),
  FOREIGN KEY category_name references category(name),
  -- category VARCHAR(50),
  image VARCHAR(255),
  itemname VARCHAR(100),
  price VARCHAR(50),
  stock INT,
  contents TEXT,
  regdate DATE
);

CREATE TABLE order (
  idx INT AUTO_INCREMENT PRIMARY KEY,
  FOREIGN KEY customer_idx references customer(idx),
  FOREIGN KEY item_idx references item(idx),
  amount INT,
  price INT,
  sent tinyint(1),
  tracking_number int,
  confirm_received tinyint(1)
);

CREATE TABLE cart (
  idx INT AUTO_INCREMENT PRIMARY KEY,
  FOREIGN KEY customer_idx references customer(idx),
  FOREIGN KEY item_idx references item(idx),
  amount INT
  totalPrice INT
);

CREATE TABLE review (
  idx INT AUTO_INCREMENT PRIMARY KEY,
  FOREIGN KEY customer_idx references customer(idx),
  FOREIGN KEY item_idx references item(idx),
  title VARCHAR(50),
  content TEXT,
  star tinyint(1),
  attach VARCHAR(100),
  regdate DATETIME
);
