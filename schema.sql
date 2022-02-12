CREATE DATABASE IF NOT EXISTS area;
USE area;
CREATE TABLE IF NOT EXISTS users (userId INT(11) NOT NULL AUTO_INCREMENT,
    type ENUM('email', 'google', 'facebook'), username VARCHAR(255), PRIMARY KEY(userId));
CREATE TABLE IF NOT EXISTS passwords (userId INT(11), password VARCHAR(255));
CREATE TABLE IF NOT EXISTS emails (userId INT(11), email VARCHAR(255));
CREATE TABLE IF NOT EXISTS googleIds (userId INT(11), googleId VARCHAR(255));
CREATE TABLE IF NOT EXISTS facebookIds (userId INT(11), facebookId VARCHAR(255));
CREATE TABLE IF NOT EXISTS serviceTokens (placeholder VARCHAR(255), service VARCHAR(255), serviceToken TEXT);
CREATE TABLE IF NOT EXISTS areas (userId INT(11), placeholder VARCHAR(255),
    running BOOLEAN DEFAULT false, oldValue TEXT,
    serviceAction VARCHAR(255), action VARCHAR(255), serviceActionConfig TEXT,
    serviceReaction VARCHAR(255), reaction VARCHAR(255), serviceReactionConfig TEXT);