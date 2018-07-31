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
    displayInventory();
    // promptCustomer();
});

function displayInventory() {
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        console.log('-----------------------------------------------')
        for (i = 0; i < result.length; i++) {
            console.log('ID: ' + result[i].id + '|| Product Name: ' + result[i].Product_Name + '|| Price: ' + result[i].Price);
        }
    })
};

// function promptCustomer() {
//     inquirer.prompt([/* Pass your questions in here */]).then(answers => {
//         // Use user feedback for... whatever!!
//     });
// };