use goods;


CREATE TABLE customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login_id VARCHAR(50) UNIQUE NOT NULL,
    pw VARCHAR(50) not null,
    NAME VARCHAR(50) NOT NULL,
    moblie VARCHAR(20) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    adress1 VARCHAR(100) NOT NULL,
    adress2 VARCHAR(100),
    zipcode VARCHAR(10),
    regdate DATETIME NOT NULL
);

CREATE TABLE order(
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