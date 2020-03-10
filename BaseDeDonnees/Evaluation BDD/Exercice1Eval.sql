
CREATE DATABASE IF NOT EXISTS `exercice1eval`;
USE `exercice1eval`;


CREATE TABLE IF NOT EXISTS `client` (
  `cli_num` int(11) NOT NULL,
  `cli_nom` varchar(50) DEFAULT NULL,
  `cli_adresse` varchar(50) DEFAULT NULL,
  `cli_tel` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`cli_num`),
  KEY `cli_nom` (`cli_nom`),
  CREATE INDEX `cli_nom` on `client`
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `produit` (
  `pro_num` int(11) NOT NULL,
  `pro_libelle` varchar(50) DEFAULT NULL,
  `pro_description` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`pro_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `commande` (
  `com_num` int(11) NOT NULL,
  `cli_num` int(11) DEFAULT NULL,
  `com_date` datetime,
  `com_obs` varchar(50),
  PRIMARY KEY (`com_num`),
  KEY `cli_num` (`cli_num`),
  CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`cli_num`) REFERENCES `client` (`cli_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `est_compose` (
  `com_num` int(11) NOT NULL,
  `pro_num` int(11) NOT NULL,
  `est_qte` int(11) DEFAULT NULL,
  PRIMARY KEY (`com_num`,`pro_num`),
  KEY `pro_num` (`pro_num`),
  CONSTRAINT `est_compose_ibfk_1` FOREIGN KEY (`com_num`) REFERENCES `commande` (`com_num`),
  CONSTRAINT `est_compose_ibfk_2` FOREIGN KEY (`pro_num`) REFERENCES `produit` (`pro_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

