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

("Bath Towel", "Housewares", 6, 15),

("Impact Drill", "Hardware", 80, 6),

("Spray Paint", "Paint", 8, 14),

("Picture Frame", "Decorations", 25, 8);

CREATE TABLE departments (
	DepartmentId INT NOT NULL AUTO_INCREMENT,
	DepartmentName VARCHAR(100) NOT NULL,
	OverheadCost DECIMAL(10,2) NOT NULL,
	TotalSales DECIMAL(10,2),
	PRIMARY KEY(DepartmentId)
);

INSERT INTO departments(DepartmentName, OverheadCost) VALUES("Sporting Goods", 500);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES("Electronics", 500);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES("Housewares", 500);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES("Hardware", 500);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES("Paint", 500);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES("Decorations", 500);
