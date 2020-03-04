-- --------------------------------------------------------
-- Hôte :                        localhost
-- Version du serveur:           5.7.24 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Listage de la structure de la base pour papyrus
CREATE DATABASE IF NOT EXISTS `papyrus` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `papyrus`;

-- Listage de la structure de la table papyrus. entcom
CREATE TABLE IF NOT EXISTS `entcom` (
  `numCom` int(11) NOT NULL AUTO_INCREMENT,
  `obsCom` varchar(50) DEFAULT NULL,
  `datCom` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `numFou` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`numCom`),
  KEY `numFou` (`numFou`),
  CONSTRAINT `entcom_ibfk_1` FOREIGN KEY (`numFou`) REFERENCES `fournis` (`numFou`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table papyrus. fournis
CREATE TABLE IF NOT EXISTS `fournis` (
  `numFou` smallint(6) NOT NULL,
  `nomFou` varchar(25) NOT NULL,
  `rueFou` varchar(50) NOT NULL,
  `posFou` char(5) NOT NULL,
  `vilFou` varchar(30) NOT NULL,
  `conFou` varchar(15) NOT NULL,
  `satisf` tinyint(10) DEFAULT NULL,
  PRIMARY KEY (`numFou`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table papyrus. ligcom
CREATE TABLE IF NOT EXISTS `ligcom` (
  `numLig` tinyint(4) NOT NULL,
  `qteCde` int(11) NOT NULL,
  `priUni` decimal(9,2) NOT NULL,
  `qteLiv` int(11) DEFAULT NULL,
  `derLiv` date NOT NULL,
  `numCom` int(11) NOT NULL,
  `codArt` char(4) NOT NULL,
  PRIMARY KEY (`numCom`,`numLig`),
  KEY `codArt` (`codArt`),
  CONSTRAINT `ligcom_ibfk_1` FOREIGN KEY (`numCom`) REFERENCES `entcom` (`numCom`),
  CONSTRAINT `ligcom_ibfk_2` FOREIGN KEY (`codArt`) REFERENCES `produit` (`codArt`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table papyrus. produit
CREATE TABLE IF NOT EXISTS `produit` (
  `codArt` char(4) NOT NULL,
  `libArt` varchar(30) NOT NULL,
  `stkAle` int(11) NOT NULL,
  `stkPhy` int(11) NOT NULL,
  `qteAnn` int(11) NOT NULL,
  `uniMes` char(5) NOT NULL,
  PRIMARY KEY (`codArt`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table papyrus. vente
CREATE TABLE IF NOT EXISTS `vente` (
  `delLiv` smallint(6) NOT NULL,
  `qte1` int(11) NOT NULL,
  `prix1` decimal(9,2) NOT NULL,
  `qte2` int(11) DEFAULT NULL,
  `prix2` decimal(9,2) DEFAULT NULL,
  `qte3` int(11) DEFAULT NULL,
  `prix3` decimal(9,2) DEFAULT NULL,
  `numFou` smallint(6) NOT NULL,
  `codArt` char(4) NOT NULL,
  KEY `numFou` (`numFou`),
  KEY `codArt` (`codArt`),
  CONSTRAINT `vente_ibfk_1` FOREIGN KEY (`numFou`) REFERENCES `fournis` (`numFou`),
  CONSTRAINT `vente_ibfk_2` FOREIGN KEY (`codArt`) REFERENCES `produit` (`codArt`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE USER "util1"@'%' IDENTIFIED BY "util1";

GRANT ALL PRIVILEGES ON papyrus.* TO "util1"
IDENTIFIED BY "util1";

CREATE USER "util2"@'%' IDENTIFIED BY "util2";

GRANT select
ON papyrus.* 
TO "util2"
IDENTIFIED BY "util2";

CREATE USER "util3"@'%' IDENTIFIED BY "util3";

GRANT select 
ON papyrus.fournis 
TO "util3"
IDENTIFIED BY "util3";


-- Les données exportées n'étaient pas sélectionnées.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
