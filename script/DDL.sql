create database choassys;
use choassys;
CREATE TABLE `choassys`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NULL,
  `price` FLOAT(12,2) NULL,
  `category` VARCHAR(45) NULL,
  `material` VARCHAR(45) NULL,
  `discount` INT NULL,
  `specification` VARCHAR(700) NULL,
  `icon_img` VARCHAR(255) NULL,
  `images` VARCHAR(800) NULL,
  `description` VARCHAR(1255) NULL,
  `lastupdate` timestamp default current_timestamp,
  PRIMARY KEY (`id`));

CREATE TABLE `choassys`.`feedback` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(100) NULL,
  `msg` VARCHAR(255) NULL,
  `mobile` VARCHAR(10) NOT NULL,
  `address` VARCHAR(255) NULL,
  `lastupdate` timestamp default current_timestamp,
   PRIMARY KEY (`id`));

CREATE TABLE `choassys`.`customer` (
  `mobile` VARCHAR(10) NOT NULL,
  `product_id` INT NULL,
  `paymentstatus` VARCHAR(10) NULL,
  `paymentnumber` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `pan` VARCHAR(45) NULL,
  `user_id` VARCHAR(10) NOT NULL,
  `adhar` VARCHAR(45) NULL,
  `orderid` INT NOT NULL AUTO_INCREMENT,
 `lastupdate` timestamp default current_timestamp,
 PRIMARY KEY (`orderid`));


CREATE TABLE `choassys`.`user` (
  `username` VARCHAR(10) NOT NULL,
  `location` VARCHAR(45) NULL,
  `password` VARCHAR(255) NULL,
  `mobile` VARCHAR(10) NOT NULL,
  `admin` VARCHAR(1) NOT NULL,
 `lastupdate` timestamp default current_timestamp,
  PRIMARY KEY (`mobile`));


CREATE TABLE `choassys`.`favourite` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `startprice` FLOAT(12,2) NULL,
  `category` VARCHAR(45) NULL,
  `material` VARCHAR(45) NULL,
  `discount` INT NULL,
  `icon_img` VARCHAR(255) NULL,
  `lastupdate` timestamp default current_timestamp,
  PRIMARY KEY (`id`));

CREATE TABLE `choassys`.`advertisement` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NULL,
  `price` FLOAT(12,2) NULL,
  `category` VARCHAR(45) NULL,
  `material` VARCHAR(45) NULL,
  `discount` INT NULL,
  `specification` VARCHAR(700) NULL,
  `icon_img` VARCHAR(255) NULL,
  `images` VARCHAR(800) NULL,
  `description` VARCHAR(1255) NULL,
  `lastupdate` timestamp default current_timestamp,
  PRIMARY KEY (`id`));