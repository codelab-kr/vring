-- Path: databases/mysql/init.sql
GRANT ALL ON *.* TO root@'%';
CREATE DATABASE IF NOT EXISTS shop;
CREATE USER 'shop'@'localhost' IDENTIFIED WITH mysql_native_password BY 'testtest';
GRANT ALL ON shop.* to shop@'localhost';
GRANT ALL ON shop.* to shop@'%';
