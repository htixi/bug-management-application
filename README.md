# bug-management-application

Technologies:

– NodeJS/Express
– Sequelize
– MySQL
– AngularJS

HowTo:

– Install all the dependencies using npm install
– Create create database using mysql
– Build the frontend code using angular
– Run node app.js
– Visit http://localhost:5500

Run & Check results:
Start NodeJS server by running this command node app.js
-> Logs:
sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules\sequelize\lib\sequelize.js:242:13
Running on http://localhost:5500
Executing (default): CREATE TABLE IF NOT EXISTS `developers` (`id` INTEGER auto_increment , `info` JSON, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `developers`
Executing (default): CREATE TABLE IF NOT EXISTS `bugs` (`id` INTEGER auto_increment , `info` JSON, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `developerId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`developerId`) REFERENCES `developers` (`id`) ON DELETE SET NULL ON UPDATE
CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `bugs`
Executing (default): CREATE TABLE IF NOT EXISTS `Bug_Developers` (`createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `developerId` INTEGER , `bugId` INTEGER , PRIMARY KEY (`developerId`, `bugId`), FOREIGN KEY (`developerId`) REFERENCES `developers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`bugId`) REFERENCES `bugs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Bug_Developers`
Executing (default): CREATE TABLE IF NOT EXISTS `testers` (`id` INTEGER auto_increment , `info` JSON, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `bugId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`bugId`) REFERENCES `bugs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `testers`
Executing (default): CREATE TABLE IF NOT EXISTS `issuers` (`id` INTEGER auto_increment , `info` JSON, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `bugId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`bugId`) REFERENCES `bugs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `issuers`
Database & tables created!

Bootstrap view: http://127.0.0.1:5500/
