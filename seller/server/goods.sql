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

CREATE TABLE seller(
idx INT AUTO_INCREMENT PRIMARY KEY,
id VARCHAR(50) UNIQUE,
pw VARCHAR(255),
sellername VARCHAR(10),
email varchar(255),
channelname VARCHAR(100),
url VARCHAR(255),
sellerimage VARCHAR(255),
intro VARCHAR(100),
regdate DATE 
);