var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected as ' + connection.threadId);
});

function displayInventory() {
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        console.log('-----------------------------------------------')
        for (i = 0; i < result.length; i++) {
            console.log('ID: ' + result[i].id + '|| Product Name: ' + result[i].Product_Name + '|| Price: ' + result[i].Price);
        }
    })
    promptCustomer();
};

function promptCustomer() {
    inquirer.prompt([{
        name: 'selectId',
        message: 'Please enter the ID of the product you wish to purchase',
        validate: function (value) {
            var valid = value.match(/^[0-9]+$/)
            if (valid) {
                return true
            }
            return 'Please enter a valid Product ID'
        }
    }, {
        name: 'selectQuantity',
        message: 'How many of this product would you like to order?',
        validate: function (value) {
            var valid = value.match(/^[0-9]+$/)
            if (valid) {
                return true
            }
            return 'Please enter a numerical value'
        }
    }]).then(function (answer) {
        connection.query('SELECT * FROM products WHERE ?', {id: answer.selectId}, function (err, res) {
            if (answer.selectQuantity > res[0].Quantity) {
                console.log('Insufficient Quantity');
                console.log('This order has been cancelled');
                console.log('');
                orderPrompt();
            }
            else {
                amountOwed = res[0].Price * answer.selectQuantity;
                currentDepartment = res[0].DepartmentName;
                console.log('Thanks for your order');
                console.log('You owe $' + amountOwed);
                console.log('');

                connection.query('UPDATE products SET ? Where ?', [{
                    Quantity: res[0].Quantity - answer.selectQuantity
                }, {
                    id: answer.selectId
                }], function (err, res) {
                    if (err) throw err;
                });

                logSaleToDepartment();
                orderPrompt();
            }
        })

    }, function (err, res) {
        if (err) throw err;
    })
};

function orderPrompt() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'choice',
        message: 'Would you like to place another order?'
    }]).then(function (answer) {
        if (answer.choice) {
            promptCustomer();
        }
        else {
            console.log('Thank you for shopping at Bamazon!');
            connection.end();
        }
    })
};

function logSaleToDepartment() {
    connection.query('SELECT * FROM departments WHERE DepartmentName = ?', [currentDepartment], function (err, res) {
        updateSales = res[0].TotalSales + amountOwed;
        updateDepartmentTable();
        if (err) throw err;
    })
};

function updateDepartmentTable() {
    connection.query('UPDATE departments SET ? WHERE ?', [{
        TotalSales: updateSales
    }, {
        DepartmentName: currentDepartment
    }], function (err, res) {
        if (err) throw err;
    });
};

displayInventory();