-- MySQL dump 10.13  Distrib 5.7.17, for osx10.12 (x86_64)
--
-- Host: localhost    Database: stile_db
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Appointments`
--

DROP TABLE IF EXISTS `Appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Appointments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `available_date` varchar(255) DEFAULT NULL,
  `start_time` varchar(255) DEFAULT NULL,
  `end_time` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Appointments`
--

LOCK TABLES `Appointments` WRITE;
/*!40000 ALTER TABLE `Appointments` DISABLE KEYS */;
/*!40000 ALTER TABLE `Appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Availabilities`
--

DROP TABLE IF EXISTS `Availabilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Availabilities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `available_date` varchar(255) DEFAULT NULL,
  `start_time` varchar(255) DEFAULT NULL,
  `end_time` varchar(255) DEFAULT NULL,
  `open` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Availabilities`
--

LOCK TABLES `Availabilities` WRITE;
/*!40000 ALTER TABLE `Availabilities` DISABLE KEYS */;
/*!40000 ALTER TABLE `Availabilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profiles`
--

DROP TABLE IF EXISTS `Profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imageURL` varchar(255) DEFAULT NULL,
  `dob` text,
  `phone` text,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profiles`
--

LOCK TABLES `Profiles` WRITE;
/*!40000 ALTER TABLE `Profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `Profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `SequelizeMeta_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20170720215030-unnamed-migration.js'),('20170722120116-unnamed-migration.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Stylists`
--

DROP TABLE IF EXISTS `Stylists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Stylists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imageURL` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `start_time` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Stylists`
--

LOCK TABLES `Stylists` WRITE;
/*!40000 ALTER TABLE `Stylists` DISABLE KEYS */;
INSERT INTO `Stylists` VALUES (1,'/assets/img/stylist_1.jpg','3212253159','Karen','Smith','2345 Magnolia Blv Orlando Fl','2:00p','2017-07-22 12:08:01','2017-07-22 12:08:01'),(2,'/assets/img/stylist_2.jpg','4072253143','Don','Julio','843 Osceola Parkway Orlando FL','5:00p','2017-07-22 12:08:01','2017-07-22 12:08:01'),(3,'/assets/img/stylist_3.jpg','4072253159','Cedric','Barber','863 Sandlake Road Orlando FL','8:00a','2017-07-22 12:08:01','2017-07-22 12:08:01'),(4,'/assets/img/stylist_4.jpg','4072253143','Tina','James','843 Central Florida Prk Orlando FL','4:00p','2017-07-22 12:08:01','2017-07-22 12:08:01'),(5,'/assets/img/stylist_5.jpg','4072253143','Jack','Daniels','201 Orange Avenue Orlando FL','3:00p','2017-07-22 12:08:01','2017-07-22 12:08:01');
/*!40000 ALTER TABLE `Stylists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `imageURL` varchar(255) DEFAULT NULL,
  `phone` text,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,NULL,NULL,NULL,NULL,NULL,NULL,'2017-08-14 03:09:45','2017-08-14 03:09:45'),(2,NULL,NULL,NULL,NULL,NULL,NULL,'2017-08-14 03:11:45','2017-08-14 03:11:45'),(3,NULL,NULL,NULL,NULL,NULL,NULL,'2017-08-14 03:12:30','2017-08-14 03:12:30'),(4,NULL,NULL,NULL,NULL,NULL,NULL,'2017-08-14 03:12:34','2017-08-14 03:12:34'),(5,NULL,NULL,NULL,NULL,NULL,NULL,'2017-08-14 03:20:17','2017-08-14 03:20:17'),(6,NULL,NULL,NULL,NULL,NULL,NULL,'2017-08-14 03:27:55','2017-08-14 03:27:55'),(7,NULL,NULL,NULL,NULL,NULL,NULL,'2017-08-14 03:38:16','2017-08-14 03:38:16'),(8,'andre.m.seballo@gmail.com','Ams:1984',NULL,'4077024469','Andre','Seballo','2017-08-14 03:46:18','2017-08-14 03:46:18'),(9,'seballo@andrews.edu','787107054847','https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/15590530_741425116817_3267472555972156634_n.jpg?oh=2523e388877612564b85684418d2db04&oe=59F0BDD3',NULL,'Andre','Seballo','2017-08-15 01:59:12','2017-08-15 01:59:12'),(10,'seballo@andrews.edu','seballo@andrews.edu','https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/15590530_741425116817_3267472555972156634_n.jpg?oh=2523e388877612564b85684418d2db04&oe=59F0BDD3',NULL,'Andre','Seballo','2017-08-15 19:46:44','2017-08-15 19:46:44');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-16 13:54:38
