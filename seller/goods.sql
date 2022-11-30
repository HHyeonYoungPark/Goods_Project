-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: goods
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asktoadmin`
--

DROP TABLE IF EXISTS `asktoadmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asktoadmin` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `askAnswer` varchar(20) DEFAULT NULL,
  `askCategory` varchar(100) DEFAULT NULL,
  `askTitle` varchar(100) DEFAULT NULL,
  `askWriter` varchar(100) DEFAULT NULL,
  `askImage` varchar(255) DEFAULT NULL,
  `askContents` text,
  `regdate` datetime DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asktoadmin`
--

LOCK TABLES `asktoadmin` WRITE;
/*!40000 ALTER TABLE `asktoadmin` DISABLE KEYS */;
INSERT INTO `asktoadmin` VALUES (1,NULL,'','232','232','1667970039533_yuri.png','2323','2022-11-09 14:00:39'),(2,NULL,'','wewe','wew','1667970056158_yuri.png','wewew','2022-11-09 14:00:56'),(3,NULL,'','2323','2323','1667970355612_yuri.png','2323','2022-11-09 14:05:55'),(4,NULL,'','문의할게요','박현영','1667970657552_wa2.png','ㄴㅇㄴㅇㄴㅇㄴㅇㄴㅇㄴㅇㄴ','2022-11-09 14:10:57'),(5,'미답변','1','문의할게요','박현영','1668660611118_dummyImg01.png','아','2022-11-17 13:50:11'),(6,'미답변','4','문의할게요','박현영','1668660736091_dummyImg01.png','ㄴㅇㄴㅇㅇ','2022-11-17 13:52:16');
/*!40000 ALTER TABLE `asktoadmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board1`
--

DROP TABLE IF EXISTS `board1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board1` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board1`
--

LOCK TABLES `board1` WRITE;
/*!40000 ALTER TABLE `board1` DISABLE KEYS */;
/*!40000 ALTER TABLE `board1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardcoupon`
--

DROP TABLE IF EXISTS `boardcoupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardcoupon` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardcoupon`
--

LOCK TABLES `boardcoupon` WRITE;
/*!40000 ALTER TABLE `boardcoupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `boardcoupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardcustomerhelp`
--

DROP TABLE IF EXISTS `boardcustomerhelp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardcustomerhelp` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardcustomerhelp`
--

LOCK TABLES `boardcustomerhelp` WRITE;
/*!40000 ALTER TABLE `boardcustomerhelp` DISABLE KEYS */;
INSERT INTO `boardcustomerhelp` VALUES (1,'고객센터 공지사항','admin','1234','단순 변심 등으로 인한 반품은 배송비 추가 부담입니다.',NULL,0,'2022-11-30');
/*!40000 ALTER TABLE `boardcustomerhelp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardevents`
--

DROP TABLE IF EXISTS `boardevents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardevents` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardevents`
--

LOCK TABLES `boardevents` WRITE;
/*!40000 ALTER TABLE `boardevents` DISABLE KEYS */;
/*!40000 ALTER TABLE `boardevents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardfaq`
--

DROP TABLE IF EXISTS `boardfaq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardfaq` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardfaq`
--

LOCK TABLES `boardfaq` WRITE;
/*!40000 ALTER TABLE `boardfaq` DISABLE KEYS */;
/*!40000 ALTER TABLE `boardfaq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardmanager`
--

DROP TABLE IF EXISTS `boardmanager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardmanager` (
  `boardIdx` int NOT NULL AUTO_INCREMENT,
  `boardCode` varchar(50) DEFAULT NULL,
  `boardCategory` varchar(50) DEFAULT NULL,
  `boardName` varchar(50) DEFAULT NULL,
  `boardBuilder` varchar(50) DEFAULT NULL,
  `boardReadAllow` varchar(50) DEFAULT NULL,
  `boardWriteAllow` varchar(50) DEFAULT NULL,
  `boardCommentAllow` varchar(50) DEFAULT NULL,
  `boardModifyAllow` varchar(50) DEFAULT NULL,
  `createDate` date DEFAULT NULL,
  `modifyDate` date DEFAULT NULL,
  PRIMARY KEY (`boardIdx`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardmanager`
--

LOCK TABLES `boardmanager` WRITE;
/*!40000 ALTER TABLE `boardmanager` DISABLE KEYS */;
INSERT INTO `boardmanager` VALUES (14,'notice','manage','Notice','admin','All','All','All','All','2022-11-30','2022-11-30'),(15,'customerhelp','manage','Customer Help','admin','logined','admin','admin','admin','2022-11-30','2022-11-30'),(16,'todolist','manage','Todo List','admin','admin','admin','admin','admin','2022-11-30','2022-11-30'),(17,'events','manage','Events','admin','All','admin','All','admin','2022-11-30','2022-11-30'),(18,'FAQ','manage','FAQ','admin','All','seller','All','All','2022-11-30','2022-11-30'),(19,'QnA','manage','QnA','admin','All','seller','All','All','2022-11-30','2022-11-30'),(20,'shipment','manage','Shipment','admin','logined','logined','logined','admin','2022-11-30','2022-11-30'),(21,'coupon','manage','Coupon','admin','logined','admin','logined','admin','2022-11-30','2022-11-30'),(22,'point','manage','Point','admin','logined','admin','logined','admin','2022-11-30','2022-11-30'),(23,'service','manage','Service','admin','logined','seller','seller','seller','2022-11-30','2022-11-30');
/*!40000 ALTER TABLE `boardmanager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardnotice`
--

DROP TABLE IF EXISTS `boardnotice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardnotice` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardnotice`
--

LOCK TABLES `boardnotice` WRITE;
/*!40000 ALTER TABLE `boardnotice` DISABLE KEYS */;
INSERT INTO `boardnotice` VALUES (1,'공지사항 드립니다.','admin','1234','공지사항',NULL,0,'2022-11-30');
/*!40000 ALTER TABLE `boardnotice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardpoint`
--

DROP TABLE IF EXISTS `boardpoint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardpoint` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardpoint`
--

LOCK TABLES `boardpoint` WRITE;
/*!40000 ALTER TABLE `boardpoint` DISABLE KEYS */;
/*!40000 ALTER TABLE `boardpoint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardqna`
--

DROP TABLE IF EXISTS `boardqna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardqna` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardqna`
--

LOCK TABLES `boardqna` WRITE;
/*!40000 ALTER TABLE `boardqna` DISABLE KEYS */;
/*!40000 ALTER TABLE `boardqna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardservice`
--

DROP TABLE IF EXISTS `boardservice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardservice` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardservice`
--

LOCK TABLES `boardservice` WRITE;
/*!40000 ALTER TABLE `boardservice` DISABLE KEYS */;
/*!40000 ALTER TABLE `boardservice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardshipment`
--

DROP TABLE IF EXISTS `boardshipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardshipment` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardshipment`
--

LOCK TABLES `boardshipment` WRITE;
/*!40000 ALTER TABLE `boardshipment` DISABLE KEYS */;
/*!40000 ALTER TABLE `boardshipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardtodolist`
--

DROP TABLE IF EXISTS `boardtodolist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardtodolist` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `contents` text,
  `image` varchar(255) DEFAULT NULL,
  `view` int DEFAULT '0',
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardtodolist`
--

LOCK TABLES `boardtodolist` WRITE;
/*!40000 ALTER TABLE `boardtodolist` DISABLE KEYS */;
INSERT INTO `boardtodolist` VALUES (1,'업무일정입니다.','admin','1234','12월 업무일정입니다\r\n확인해주세요',NULL,0,'2022-11-30'),(2,'12월 업무 진행사항','admin','1234','확인하고 피드백 죽세요',NULL,0,'2022-11-30'),(3,'사내 메신저 사용시 유의사항','admin','1234','보안에 신경씁시다',NULL,0,'2022-11-30'),(4,'상품 관리팀께 안내드립니다','admin','1234','금일 입고 물품 \r\n전량 수거 조치',NULL,0,'2022-11-30'),(5,'사옥 주차타워 이용 시 안내사항','admin','1234','차량 등록 후 이용바랍니다',NULL,1,'2022-11-30');
/*!40000 ALTER TABLE `boardtodolist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(50) DEFAULT NULL,
  `itemIdx` int DEFAULT NULL,
  `itemCounter` int DEFAULT NULL,
  `itemPrice` int DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (24,'qwerqwer',14,1,59000),(25,'qwerqwer',16,1,258000),(27,'qwerqwer',15,1,5400),(28,'qwerqwer',14,1,59000),(29,'qwerqwer',2,1,9900),(30,'aud8637282',26,1,258000);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category1`
--

DROP TABLE IF EXISTS `category1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category1` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category1` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category1`
--

LOCK TABLES `category1` WRITE;
/*!40000 ALTER TABLE `category1` DISABLE KEYS */;
INSERT INTO `category1` VALUES (1,'패션'),(2,'전자기기'),(3,'문구'),(4,'악세사리'),(5,'생활');
/*!40000 ALTER TABLE `category1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category2`
--

DROP TABLE IF EXISTS `category2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category2` varchar(50) DEFAULT NULL,
  `category1` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category2`
--

LOCK TABLES `category2` WRITE;
/*!40000 ALTER TABLE `category2` DISABLE KEYS */;
INSERT INTO `category2` VALUES (1,'스웨트니트','패션'),(2,'후드티','패션'),(3,'티셔츠','패션'),(4,'니트','패션'),(5,'이어폰','전자기기'),(6,'키보드','전자기기'),(7,'마우스','전자기기'),(8,'스피커','전자기기'),(9,'머그컵','생활'),(10,'텀블러','생활'),(11,'타월','생활'),(12,'스티커','문구'),(13,'펜','문구'),(14,'노트','문구'),(15,'지우개','문구'),(16,'샤프','문구'),(17,'필통','문구'),(18,'폰케이스','악세사리'),(19,'키링','악세사리'),(20,'반지','악세사리'),(21,'목걸이','악세사리');
/*!40000 ALTER TABLE `category2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `itemname` varchar(100) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `detailcategory` varchar(50) DEFAULT NULL,
  `categoryCode1` varchar(50) DEFAULT NULL,
  `categoryCode2` varchar(50) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `attach` varchar(255) DEFAULT NULL,
  `attach2` varchar(255) DEFAULT NULL,
  `attach3` varchar(255) DEFAULT NULL,
  `contents` text,
  `madein` varchar(50) DEFAULT NULL,
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'포토카드 케이스','악세사리','폰케이스','4','18',12900,999,'1669767620192_í¬í ì¹´ëì¼ì´ì¤.png','1669767620193_í¬í ì¹´ëì¼ì´ì¤.png','1669767620193_í¬í ì¹´ëì¼ì´ì¤.png','포토카드 케이스','국내','2022-11-30'),(2,'한정판 스티커','문구','스티커','3','12',9900,99,'1669767687412_ì¤í°ì»¤.png','1669767687415_ì¤í°ì»¤.png','1669767687417_ì¤í°ì»¤.png','스티커','국산','2022-11-30'),(3,'알록달록 와인잔','생활','머그컵','5','9',26000,999,'1669769049377_ìì¸ì.png','1669769049377_ìì¸ì.png','1669769049377_ìì¸ì.png','와인잔','국산','2022-11-30'),(4,'타포린백','생활','타월','5','11',11000,999,'1669769104584_íí¬ë¦°ë°±.png','1669769104584_íí¬ë¦°ë°±.png','1669769104584_íí¬ë¦°ë°±.png','타포린백','중국산','2022-11-30'),(5,'C타입 멀티허브','전자기기','스피커','2','8',9900,999,'1669769150568_Cíìë©í°íë¸.png','1669769150569_Cíìë©í°íë¸.png','1669769150569_Cíìë©í°íë¸.png','c타입 멀티허브','중국산','2022-11-30'),(6,'물결 키링','악세사리','키링','4','19',9900,99,'1669769194352_keyRing.png','1669769194353_keyRing.png','1669769194353_keyRing.png','키링','중국산','2022-11-30'),(7,'오버핏 무지 반팔티','패션','티셔츠','1','3',15900,99,'1669769258393_ì¤ë²í ë¬´ì§ ë°íí°.png','1669769258393_ì¤ë²í ë¬´ì§ ë°íí°.png','1669769258393_ì¤ë²í ë¬´ì§ ë°íí°.png','무지 반팔티','국산','2022-11-30'),(8,'오버핏 후드티','패션','후드티','1','2',45000,99,'1669769294168_ì¤ë²í íëí°.png','1669769294168_ì¤ë²í íëí°.png','1669769294168_ì¤ë²í íëí°.png','후드티','국산','2022-11-30'),(9,'라탄 컵받침','생활','머그컵','5','9',9900,999,'1669769359432_ë¼íì»µë°ì¹¨.png','1669769359433_ë¼íì»µë°ì¹¨.png','1669769359433_ë¼íì»µë°ì¹¨.png','라탄 컵받침','중국산','2022-11-30'),(10,'노트북 파우치','생활','타월','5','11',27000,999,'1669769415816_laptop.jpg','1669769415816_laptop.jpg','1669769415816_laptop.jpg','노트북 파우치','중국산','2022-11-30'),(11,'무드등 스피커','전자기기','스피커','2','8',65000,999,'1669769453296_LEDmood.jpg','1669769453296_LEDmood.jpg','1669769453296_LEDmood.jpg','무드등 스피커','스웨덴산','2022-11-30'),(12,'포토카드 케이스','문구','필통','3','17',9000,999,'1669769494920_í¬í ì¹´ëì¼ì´ì¤.png','1669769494920_í¬í ì¹´ëì¼ì´ì¤.png','1669769494920_í¬í ì¹´ëì¼ì´ì¤.png','포토카드 케이스','중국산','2022-11-30'),(13,'한정판 스티커','문구','스티커','3','12',9900,999,'1669769528129_ì¤í°ì»¤.png','1669769528132_ì¤í°ì»¤.png','1669769528134_ì¤í°ì»¤.png','스티커','국산','2022-11-30'),(14,'타포린백','생활','타월','5','11',16000,99,'1669769569344_íí¬ë¦°ë°±.png','1669769569344_íí¬ë¦°ë°±.png','1669769569344_íí¬ë¦°ë°±.png','타포린백','중국산','2022-11-30'),(15,'노트북 파우치','전자기기','키보드','2','6',27000,999,'1669769604808_laptop.jpg','1669769604808_laptop.jpg','1669769604808_laptop.jpg','노트북 파우치','중국산','2022-11-30'),(16,'라탄 컵받침','생활','머그컵','5','9',7900,999,'1669769638911_ë¼íì»µë°ì¹¨.png','1669769638911_ë¼íì»µë°ì¹¨.png','1669769638912_ë¼íì»µë°ì¹¨.png','컵받침','국내','2022-11-30'),(17,'한정판 키링','악세사리','키링','4','19',12900,999,'1669769674727_keyRing.png','1669769674727_keyRing.png','1669769674728_keyRing.png','키링','중국산','2022-11-30'),(18,'스마일 인형','생활','타월','5','11',12900,999,'1669769703392_doll.jpg','1669769703392_doll.jpg','1669769703392_doll.jpg','인형','중국산','2022-11-30'),(19,'LED 무드등 스피커','전자기기','스피커','2','8',139000,999,'1669769739232_LEDmood.jpg','1669769739232_LEDmood.jpg','1669769739232_LEDmood.jpg','스피커','스웨덴산','2022-11-30'),(20,'텀블러','생활','텀블러','5','10',20000,9,'1669769781687_ë¬¼ë³.png','1669769781687_ë¬¼ë³.png','1669769781687_ë¬¼ë³.png','물병','중국산','2022-11-30'),(21,'레고 세트','악세사리','목걸이','4','21',9900,999,'1669769809831_ë ê³  ì¸í¸.png','1669769809831_ë ê³  ì¸í¸.png','1669769809831_ë ê³  ì¸í¸.png','레고','중국산','2022-11-30'),(22,'보냉백 세트','생활','머그컵','5','9',25000,999,'1669769848015_ë³´ëë°± ì¸í¸.png','1669769848015_ë³´ëë°± ì¸í¸.png','1669769848015_ë³´ëë°± ì¸í¸.png','보냉백','중국산','2022-11-30'),(23,'미니 캐리어','생활','타월','5','11',165000,999,'1669769884143_ë¯¸ëìºë¦¬ì´.jpg','1669769884144_ë¯¸ëìºë¦¬ì´ ì.jpg','1669769884144_ë¯¸ëìºë¦¬ì´ ë´ë¶.jpg','캐리어','국산','2022-11-30'),(24,'[맞춤제작] 오버핏 후드티','패션','후드티','1','2',54000,999,'1669769929545_[ë§ì¶¤ì ì] ì¤ë²í íëí°.png','1669769929545_ì¤ë²í íëí°.png','1669769929545_[ë§ì¶¤ì ì] ì¤ë²í íëí°.png','후드','국산','2022-11-30'),(25,'[맞춤제작] 오버핏 맨투맨','패션','스웨트니트','1','1',52000,999,'1669769957071_[ë§ì¶¤ì ì] ë§¨í¬ë§¨.png','1669769957071_ì¤ë²í íëí°.png','1669769957071_[ë§ì¶¤ì ì] ë§¨í¬ë§¨.png','맨투맨','국산','2022-11-30'),(26,'앤틱 블루투스 스피커','전자기기','스피커','2','8',258000,999,'1669769992440_ë¸í¬ì¤í¼ì»¤.png','1669769992440_ì¤í± ë¸ë£¨í¬ì¤ ì¤í¼ì»¤ ì.jpg','1669769992440_ì¤í± ë¸ë£¨í¬ì¤ ì¤í¼ì»¤ ìì.jpg','스피커','스웨덴산','2022-11-30');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `noticeTitle` varchar(100) DEFAULT NULL,
  `noticeWriter` varchar(50) DEFAULT NULL,
  `noticeContent` text,
  `noticeView` int DEFAULT NULL,
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `customerName` varchar(50) DEFAULT NULL,
  `destination` varchar(1000) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `orderedItem` varchar(100) DEFAULT NULL,
  `totalPrice` int DEFAULT NULL,
  `orderTime` datetime DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','오버핏 후드티',52000,'2022-11-28 15:17:03'),(2,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','[맞춤제작] 오버핏 맨투맨',48000,'2022-11-28 16:12:51'),(3,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','[맞춤제작] 오버핏 맨투맨',48000,'2022-11-28 16:16:03'),(4,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','앤틱 블루투스 스피커',261000,'2022-11-28 16:45:16'),(5,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','앤틱 블루투스 스피커',261000,'2022-11-28 16:45:23'),(6,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','앤틱 블루투스 스피커',261000,'2022-11-28 16:48:23'),(7,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','앤틱 블루투스 스피커',261000,'2022-11-28 16:51:52'),(8,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','앤틱 블루투스 스피커',261000,'2022-11-28 16:53:18'),(9,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','앤틱 블루투스 스피커',261000,'2022-11-28 16:53:29'),(10,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','앤틱 블루투스 스피커',261000,'2022-11-29 11:20:36'),(11,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','앤틱 블루투스 스피커',261000,'2022-11-29 12:42:09'),(12,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','라탄 컵받침',12900,'2022-11-29 15:53:46'),(13,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','앤틱 블루투스 스피커',261000,'2022-11-29 15:58:41'),(14,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','보냉백 세트',19000,'2022-11-29 15:59:33'),(15,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','보냉백 세트',19000,'2022-11-29 16:00:05'),(16,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','[맞춤제작] 오버핏 후드티',62000,'2022-11-29 16:51:21'),(17,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','레고 세트',8400,'2022-11-29 17:25:33'),(18,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','[맞춤제작] 오버핏 후드티',62000,'2022-11-29 17:29:40'),(19,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','앤틱 블루투스 스피커',261000,'2022-11-29 17:31:04'),(20,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','오버핏 후드티',52000,'2022-11-29 17:31:43'),(21,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','레고 세트',8400,'2022-11-30 09:17:51'),(22,'홍길동','부산 수영구 광남로 70 (남천동)6층','01012345678','포토카드 케이스',15900,'2022-11-30 09:22:14');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `Writer` varchar(50) DEFAULT NULL,
  `ItemNo` varchar(50) DEFAULT NULL,
  `attach` varchar(255) DEFAULT NULL,
  `Contents` varchar(255) DEFAULT NULL,
  `Rating` varchar(50) DEFAULT NULL,
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'qwerqwer','16','1669683396818_ì¤í± ë¸ë£¨í¬ì¤ ì¤í¼ì»¤ ìì.jpg','음질도 좋고 인테리어 소품으로도 좋습니다!','5','2022-11-29'),(2,'qwerqwer','16','1669683423374_ì¤í± ë¸ë£¨í¬ì¤ ì¤í¼ì»¤ ì.jpg','배송이 빨라요!','4','2022-11-29'),(3,'qwerqwer','14','1669708393793_[ë§ì¶¤ì ì] ì¤ë²í íëí°.png','조하여','1','2022-11-29'),(4,'asdfasdf','26','1669770056949_ì¤í± ë¸ë£¨í¬ì¤ ì¤í¼ì»¤ ìì.jpg','음질도 좋고 인테리어 소품으로 딱이에요~~~','5','2022-11-30'),(5,'aud8637282','26','1669770299560_ì¤í± ë¸ë£¨í¬ì¤ ì¤í¼ì»¤ ì.jpg','배송빠름요ㅋ','4','2022-11-30'),(6,'aud8637282','25','1669770334753_[ë§ì¶¤ì ì] ë§¨í¬ë§¨.png','따뜻하고 좋아요!','5','2022-11-30'),(7,'aud8637282','25','1669770384975_[ë§ì¶¤ì ì] ì¤ë²í íëí°.png','오버핏이라 한치수 작게 주문해도 될듯요','3','2022-11-30'),(8,'aud8637282','24','1669770421278_ì¤ë²í íëí°.png','배송도 빠르고 옷도 이쁘네요','5','2022-11-30'),(9,'qwerqwer','24','1669770452160_[ë§ì¶¤ì ì] ì¤ë²í íëí°.png','감사합니다 잘입을게여','4','2022-11-30');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `id` varchar(50) DEFAULT NULL,
  `pw` varchar(255) DEFAULT NULL,
  `sellername` varchar(10) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `zip` varchar(50) DEFAULT NULL,
  `address` varchar(1000) DEFAULT NULL,
  `channelname` varchar(100) DEFAULT NULL,
  `channelPlatform` varchar(50) DEFAULT NULL,
  `channelGenre` varchar(50) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `sellerimage` varchar(255) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `grade` varchar(10) DEFAULT NULL,
  `regdate` date DEFAULT NULL,
  PRIMARY KEY (`idx`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'aud8637282','$2b$10$63/ErALZOLOqaagFMl/S5OJgDhvO/9hdYnpyPQYrfRy2sA9TJpyH6','현영 박','aud8637282@naver.com','01064364837','18445','경기 화성시 동탄중앙로 200 (반송동, 메타폴리스) A동 6004호','랄로','2','2','www.naver.com','1669356961794_dummyUserImg.jpg','랄로입니다','일반회원','2022-11-25'),(2,'admin','$2b$10$ZOOEUy8gwpEIVFZEiiXgfuENb.HiAESMywNqdslL.uFDFWs0V717.','관리자','aud8637282@naver.com','01012345678','40240','경북 울릉군 울릉읍 독도이사부길 55 (독도리)1층','랄로','3','2','www.naver.com','1669592114633_devilgu.jpg','랄로입니다','일반회원','2022-11-28'),(3,'qwerqwer','$2b$10$egM/QBWnKZRRaSbj9AV/YO/ib9iL9Q81wOoyMUr/Di.KXxz1XCC4u','홍길동','aud8637282@naver.com','01012345678','48304','부산 수영구 광남로 70 (남천동)6층','랄로','2','1','www.naver.com','1669593733792_chulsu.jpeg','1234','일반회원','2022-11-28'),(4,'asdfasdf','$2b$10$uDoy1Dxq8Oj3icpCndCp6OKqbFbtmFO.o9iBkdJrejFJpUHPfbQj2','김철수','aud8637282@naver.com','01012345678','18444','경기 화성시 메타폴리스로 22 (반송동, 동탄시범다은마을 메타역 롯데캐슬)306동 1503호','랄로','2','2','www.naver.com','1669768953505_chulsu.jpeg','랄로입니다','일반회원','2022-11-30'),(5,'wjdgnsgml','$2b$10$HpqGwLwdDDu4sDPDiceolOaK/aYASY5ex7mrp8pbgPqvok0..gUVe','정훈희','wjsgnsgml@naver.com','01012345678','48307','부산 수영구 광남로 4 (남천동)109/402','육식왕','1','5','www.naver.com','1669771147642_chulsu.jpeg','육식왕입니다.','일반회원','2022-11-30'),(6,'dmd11122','$2b$10$YPbsN6uO95Dxzmr5o.U6ZufqjKCioqO4TZBZIa6gBqCsNPfYUzM6a','김철수','2dsqa82@naver.com','01012345678','48094','부산 해운대구 구남로12번길 4 (우동, 한신포차)1층','뚝딱이형','1','5','www.naver.com','1669771223317_chulsu.jpeg','안녕','일반회원','2022-11-30'),(7,'tjwjdgns123','$2b$10$Xw8HAAgIjeQ/SOyOJzgfXu6gdbAub14eQ15nctF/jBZEetJGIHw7C','서정훈','tjwjdgns1232@naver.com','01012345678','48119','부산 해운대구 마린시티1로 91 (우동, 해운대두산위브포세이돈)1503호','코딩왕','1','6','www.naver.com','1669771320557_chulsu.jpeg','하이!','일반회원','2022-11-30'),(8,'gtb3232323','$2b$10$Fn4X88N7rk8ZmrQULBIUG.pzcXSTKMFRoGk72LxLANMKjmJ0evtSS','권태근','gtb32323232@naver.com','01012345678','06265','서울 강남구 강남대로 272 (도곡동, 도곡푸르지오)305동 2201호','랄로','1','1','www.naver.com','1669771380605_chulsu.jpeg','랄로입니다','일반회원','2022-11-30'),(9,'aud863728212','$2b$10$IvQP4unEdX6dxb5bPGc05u6HEn7KMDvUfUrGoPPuDDqzq715urFR2','박현영','aud8637282@naver.com','01012345678','18455','경기 화성시 메타폴리스로 54 (반송동, 동탄파라곤II)A동 605호','박튜브','1','4','www.naver.com','1669771510469_chulsu.jpeg','여행가즈아','일반회원','2022-11-30'),(10,'indfindi','$2b$10$PezEjExESLLBSFEt4SP44OX3FHso3dc5hG5iR/Tpzb.044wb8UVRO','일론머스크','musk123@naver.com','01012345678','05551','서울 송파구 올림픽로 300 (신천동, 롯데월드타워앤드롯데월드몰)1층','화성가즈아','2','4','www.naver.com','1669771606604_chulsu.jpeg','화성갈끄니까','일반회원','2022-11-30'),(11,'ioimm2222','$2b$10$D7YCxI65aDcDFW47bpJQbu2sf0yV5kBLqo6IYMxuZt.02pi8HT7Tq','빌게이츠','bill000@naver.com','01012345678','28506','충북 청주시 청원구 수동로58번길 46-5 (우암동, 게이츠빌)503호','컴퓨터왕','4','6','www.naver.com','1669771664221_chulsu.jpeg','컴퓨터왕','일반회원','2022-11-30'),(12,'gfrffgfg','$2b$10$mN7EsfzKXo6KgcrCYK5ET.BFKe65RZf4xrQlc4YynSDeI4RaXQ2uu','김지은','aud8632@naver.com','01012345678','06036','서울 강남구 가로수길 14-3 (신사동)5층','랄로','3','2','www.naver.com','1669771742710_[ë§ì¶¤ì ì] ì¤ë²í íëí°.png','랄로입니다','일반회원','2022-11-30');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-30 10:37:38
