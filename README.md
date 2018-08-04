#BAMAZON

A project for the KU Coding bootcamp which makes use of Node.js and MySQL in order to form an interactive inventory management system and order processing system similar to that of an Amazon style site. 

The app works through command line interface options with three seperate apps with different uses depending upon the user: customer, manager, and supervisor. 

The customer level option will allow the customer to view products being offered and attempt to order the specified quantity of the product if there is a sufficient stock. A total is then reported to the customer and a new order queried. If stock is insufficient then the customer is notified and prompted to provide a new selection. Screenshot in screenshot folder called customerScreenshot.

The manager level application allows the manager to view what products are at low stock, alter the inventory of the stock, or add a new product to the list of options for the customer. Screenshot in the screenshot folder called managerScreenshot.

The supervisor level application allows for the supervisor to add a department which can then be analyzed to determine sales, profits, and overhead costs for the department. Screenshot in the screenshot folder called supervisorScreenshot.