/*/**********************************************************************************
 *  Purpose         : Commercial data processing that implements a data type to keep 
                        track of customer information.
 *  @file           : mainCommercial.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 09-01-2019
 **********************************************************************************/
var read = require('readline-sync');
var fs = require('fs');
//read file from inventory.json 
var element = fs.readFileSync('company.json');
var element1 = fs.readFileSync('customer.json');
var element2 = fs.readFileSync('transaction.json');
//JSON.parse-Converts a JavaScript Object Notation (JSON) string into an object.
var companyData = JSON.parse(element);
var customerData = JSON.parse(element1);
var transactionData = JSON.parse(element2);
function StockAccount() 
{
    console.log('\n*** COMMERCIAL DATA PROCESSING ***');
    console.log('1.Create Account \n2.Open Account \n3.Edit Company \n4.Exit');
    var choiceOperation = read.question('Enter your choice :')
    if (choiceOperation == 1) 
    {
        //  TO CREATE NEW USER ACCOUNT
        var Id = read.question('Enter customer Id :');
        var Name = read.question('Enter customer name :');
        customerData.customerdetail.push(
        {
            custId: Id,
            custName: Name,
            symbol: "",
            amount: 0,
            shares: 0
        });
        fs.writeFileSync('./customer.json', JSON.stringify(customerData));
        console.log('Customer added successfully.');
        console.log(customerData);
        StockAccount();
    }
    else if (choiceOperation == 2) 
    {
        //  TO OPEN EXISTING USER ACCOUNT
        var openAcc = read.question('Enter customer id :');
        for (let j = 0; j < customerData.customerdetail.length; j++) 
        {
            if (openAcc == customerData.customerdetail[j].custId) 
            {
                console.log();
                console.log('Id :', customerData.customerdetail[j].custId);
                console.log('Symbol :', customerData.customerdetail[j].symbol);
                console.log('Amount balance :', customerData.customerdetail[j].amount);
                console.log('Shares :', customerData.customerdetail[j].shares);
                console.log('\n1.Buy shares \n2.Sell shares \n3.Add Money \n4.Display \n5.Exit');
                var performOp = read.question('\nEnter which operation to perform :');
                if (performOp == 1) 
                {
                    console.log(companyData);
                    var chooseCompany = read.question('Enter company name to buy share :');
                    for (let i = 0; i < companyData.company.length; i++) 
                    {
                        if (chooseCompany === companyData.company[i].symbol) 
                        {
                            console.log('You can buy share upto :', customerData.customerdetail[j].amount);
                            var buy = read.question('Enter how many shares to buy :');
                            if (buy < companyData.company[i].totalShare) 
                            {
                                console.log('Price of per share = ', companyData.company[i].pricePerShare);
                                var total = Number(buy * companyData.company[i].pricePerShare);
                                console.log('Total cost of share will be :', total);
                                if (customerData.customerdetail[j].amount > total) 
                                { 
                                    customerData.customerdetail[j].amount = parseInt(Number(customerData.customerdetail[j].amount) - Number(total));
                                    console.log('After buying shares your current balance is :', customerData.customerdetail[j].amount);
                                    customerData.customerdetail[j].shares = parseInt(Number(customerData.customerdetail[j].shares) + Number(buy));
                                    console.log('After buying shares your current shares are :', customerData.customerdetail[j].shares);
                                    companyData.company[i].totalShare = parseInt(Number(companyData.company[i].totalShare) - Number(buy));
                                    fs.writeFileSync('./customer.json', JSON.stringify(customerData));
                                    fs.writeFileSync('./company.json', JSON.stringify(companyData));
                                    var d = new Date();
                                    var date = d.getDate();
                                    var month = d.getMonth();
                                    var year = d.getFullYear();
                                    var today = date + "/" + (month + 1) + "/" + year;
                                    transactionData.transaction.push(
                                    {
                                        Id: customerData.customerdetail[j].custId,
                                        type: "buy",
                                        symbolName: companyData.company[i].symbol,
                                        transactionDate: date + "/" + (month + 1) + "/" + year
                                    });
                                    fs.writeFileSync('./transaction.json', JSON.stringify(transactionData));
                                    console.log('transaction added after buy..');
                                    StockAccount();
                                }
                                else 
                                {
                                    console.log('You have insufficient balance.');
                                    StockAccount();
                                }
                            }
                            else 
                            {
                                console.log("Number of share to bought are greater than company's total share");
                                process.exit();
                            }
                        }
                    }
                    StockAccount();
                }
                else if (performOp == 2) 
                {
                    console.log("Current balance :", customerData.customerdetail[j].amount);
                    console.log("Currently you have total shares for sell = ", customerData.customerdetail[j].shares);
                    var sellShare = read.question('Enter how many shares you want to sell :');
                    if (sellShare < customerData.customerdetail[j].shares) 
                    {
                        var companyToSell = read.question('Enter compnay name to sell shares :');
                        for (var i = 0; i < companyData.company.length; i++) 
                        {
                            if (companyToSell === companyData.company[i].symbol) 
                            {
                                companyData.company[i].totalShare = Number(Number(companyData.company[i].totalShare) + Number(sellShare));
                                customerData.customerdetail[j].shares = Number(customerData.customerdetail[j].shares - sellShare);
                                var d = new Date();
                                var date = d.getDate();
                                var month = d.getMonth();
                                var year = d.getFullYear();
                                var today = date + "/" + (month + 1) + "/" + year;
                                console.log('cust id :', customerData.customerdetail[j].custId);
                                console.log('company name :', companyData.company[i].symbol);
                                transactionData.transaction.push(
                                {
                                    Id: customerData.customerdetail[j].custId,
                                    type: "sell",
                                    symbolName: companyData.company[i].symbol,
                                    transactionDate: date + "/" + (month + 1) + "/" + year
                                });   
                            } 
                        }
                        fs.writeFileSync('./transaction.json', JSON.stringify(transactionData));
                        console.log('transaction added after sell..');
                        fs.writeFileSync('./customer.json', JSON.stringify(customerData));
                        fs.writeFileSync('./company.json', JSON.stringify(companyData));
                        console.log('Shares sold successfully.');
                        StockAccount();
                    }
                    else 
                    {
                        console.log('No of shares to sell is greater than total shares you have.');
                    }
                    StockAccount();
                }
                else if (performOp == 3) 
                {
                    var updateAmount = read.question('Enter amount to add :');
                    customerData.customerdetail[j].amount = parseInt(Number(customerData.customerdetail[j].amount) + Number(updateAmount));
                    console.log(customerData.customerdetail[j]);
                    fs.writeFileSync('./customer.json', JSON.stringify(customerData));
                    StockAccount();
                }
                else if (performOp == 4) 
                {
                    console.log('TRANSACTION Information');
                    console.log(transactionData);
                }
                else if (performOp == 5) 
                {
                    StockAccount();
                }
            }
        }
    }
    // TO EDIT COMPANY 
    else if (choiceOperation == 3) 
    {
        console.log('\n1.Add Company \n2.Remove Company \n3.Exit');
        var compChoice = read.question('Enter you choice :');
        // TO ADD COMPANY 
        if (compChoice == 1) 
        {
            var name = read.question('Enter company name :');
            var PerShare = read.question('Enter company price per share :');
            var total = read.question('Enter company total share :');
            companyData.company.push(
            {
                symbol: name,
                pricePerShare: PerShare,
                totalShare: total
            });
            fs.writeFileSync('./company.json', JSON.stringify(companyData), 'utf-8', function () 
            {
                console.log('done')
            });
            console.log("Company Added Successfully.");
            console.log(companyData);
            StockAccount();
        }
        // TO REMOVE COMPANY 
        else if (compChoice == 2) 
        {
            var attribute = read.question('Enter name of company you want to delete :');
            for (var i = 0; i < companyData.company.length; i++) 
            {
                if (attribute === companyData.company[i].symbol) 
                {
                    companyData.company.splice(i, 1);
                }
            }
            fs.writeFileSync('./company.json', JSON.stringify(companyData));
            console.log('Company Removed Successfully.');
            console.log(companyData);
            StockAccount();
        }
        else if (compChoice == 3) 
        {
            console.log('Back to main menu :');
            StockAccount();
        }
        else {
            console.log('Invalid choice.');
        }
    }
    // TO EXIT FROM MAIN MENU
    else if (choiceOperation == 4) 
    {
        console.log('Exiting main menu..');
        process.exit();
    }
    else 
    {
        console.log('Invalid choice.');
    }
}
StockAccount();