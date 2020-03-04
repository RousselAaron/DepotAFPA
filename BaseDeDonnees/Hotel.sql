DROP DATABASE IF EXISTS `hotel`;
CREATE DATABASE IF NOT EXISTS `hotel` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `hotel`;

DROP TABLE IF EXISTS `station`;
CREATE TABLE IF NOT EXISTS `station` (
    `sta_num` int(10) PRIMARY KEY,
    `sta_nom` varchar(50) COLLATE utf8_unicode_ci
);

DROP TABLE IF EXISTS `hotel`;
CREATE TABLE IF NOT EXISTS `hotel` (
    `hot_capacite` int(10),
    `hot_categorie` varchar(50) COLLATE utf8_unicode_ci,
    `hot_nom` varchar(50) COLLATE utf8_unicode_ci,
    `hot_adresse` varchar(50) COLLATE utf8_unicode_ci,
    `hot_num` int(11) PRIMARY KEY,
    `hot_sta_num` int(11),
    FOREIGN KEY (hot_sta_num) REFERENCES station(sta_num) 
);

DROP TABLE IF EXISTS `chambre`;
CREATE TABLE IF NOT EXISTS `chambre` (
    `cha_capacite` int(2),
    `cha_confort` int(2),
    `cha_exposition` varchar(50) COLLATE utf8_unicode_ci,
    `cha_type` varchar(50) COLLATE utf8_unicode_ci,
    `cha_num` int(4) PRIMARY KEY,
    `cha_hot_num` int(4),
    FOREIGN KEY (cha_hot_num) REFERENCES hotel(hot_num) 

);

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
    `cli_adresse` varchar(50) COLLATE utf8_unicode_ci,
    `cli_nom` varchar(50) COLLATE utf8_unicode_ci,
    `cli_prenom` varchar(50) COLLATE utf8_unicode_ci,
    `cli_num` int(10) PRIMARY KEY
);

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
    `res_cha_num` int(10),
    `res_cli_num` int(10),
    `res_date_debut` date,
    `res_date_fin` date,
    `res_date_reservation` date,
    `res_montant_arrhes` decimal(10,0),
    `res_prix_total` decimal(10,0),
PRIMARY KEY (res_cha_num, res_cli_num),
FOREIGN KEY (res_cha_num) REFERENCES chambre(cha_num),
FOREIGN KEY (res_cli_num) REFERENCES client(cli_num)
);