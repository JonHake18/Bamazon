DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    id INT(10) NOT NULL AUTO_INCREMENT,
    Product_Name VARCHAR(100) NULL,
    Department_Name VARCHAR(100) NULL,
    Price INT(10) NULL,
    Stock_Quantity INT(10),
    PRIMARY KEY (id)
);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Basketball", "Sporting Goods", 20, 10), 

("Toilet Paper", "Housewares", 5, 20),

("Playstation 4", "Electronics", 200, 4),

("Tennis Racquet", "Sporting Goods", 45, 8),

("Big Screen TV", "Electronics", 350, 6),

("Football", "Sporting Goods", 35, 12),

("Bath Towel", "Houseware", 6, 15),

("Impact Drill", "Hardware", 80, 6),

("Spray Paint", "Paint", 8, 14),

("Picture Frame", "Decorations", 25, 8);
