var read = require('readline-sync');
var fs=require('fs');
//read file from inventory.json 
var element = fs.readFileSync('company.json');
var element1 = fs.readFileSync('customer.json');
var element2 = fs.readFileSync('transaction.json');
//JSON.parse-Converts a JavaScript Object Notation (JSON) string into an object.
var companyData = JSON.parse(element);
var customerData = JSON.parse(element1);
var transactionData = JSON.parse(element2);
function commercial()
{
    console.log('\n*** COMMERCIAL DATA PROCESSING ***');
    console.log('1.Create Account \n2.Open Account \n3.Edit Company \n4.Exit');
    var choiceOperation = read.question('Enter your choice :')
    if(choiceOperation == 1)
    {
        //  TO CREATE NEW USER ACCOUNT
        var Id = read.question('Enter customer Id :');
        var Name = read.question('Enter customer name :');
        customerData.customerdetail.push(
        {
            custId : Id,
            custName : Name,
            symbol : "",
            amount : 0,
            shares : 0
        });
        fs.writeFileSync('./customer.json', JSON.stringify(customerData), 'utf-8', function (){ 
            console.log('done') 
        });
        console.log('Customer added successfully.');
        console.log(customerData);  
        commercial();
    }
    else if(choiceOperation == 2)
    {
        //  TO OPEN EXISTING USER ACCOUNT
        var openAcc = read.question('Enter customer id :');
        for(var i=0;i<customerData.customerdetail.length;i++)
        {           
            if(openAcc == customerData.customerdetail[i].custId)
            { 
                console.log();
                console.log('Id :',customerData.customerdetail[i].custId);
                console.log('Symbol :',customerData.customerdetail[i].symbol);
                console.log('Amount balance :',customerData.customerdetail[i].amount);
                console.log('Shares :',customerData.customerdetail[i].shares);
                console.log('\n1.Buy shares \n2.Sell shares \n3.Add Money \n4.Display \n5.Exit');  
                var performOp = read.question('\nEnter which operation to perform :'); 
                if(performOp == 1)
                {

                }  
                else if(performOp == 2)
                {

                } 
                else if(performOp == 3)
                {
                    var updateAmount = read.question('Enter amount to add :');
                    customerData.customerdetail[i].amount = parseInt(customerData.customerdetail[i].amount + updateAmount) ;
                    console.log(customerData.customerdetail[i]);
                }
                else if(performOp == 4)
                {
                    console.log('Updated Information');
                    console.log(customerData.customerdetail[i]);       
                }    
                else if(performOp == 5)
                {
                    commercial();
                }           
            }
        }
        
    }
    // TO EDIT COMPANY 
    else if(choiceOperation == 3)
    {
        console.log('\n1.Add Company \n2.Remove Company \n3.Exit');
        var compChoice = read.question('Enter you choice :');
        // TO ADD COMPANY 
        if(compChoice == 1)
        {
            var name = read.question('Enter company name :');
            var PerShare = read.question('Enter company price per share :');
            var total = read.question('Enter company total share :');
            companyData.company.push({
                symbol : name,
                pricePerShare : PerShare,
                totalShare : total
            });
            fs.writeFileSync('./company.json', JSON.stringify(companyData), 'utf-8', function (){ 
                console.log('done') 
            });
            console.log("Company Added Successfully.");
            console.log(companyData); 
            commercial();
        }
        // TO REMOVE COMPANY 
        else if(compChoice == 2)
        {
            var attribute = read.question('Enter name of company you want to delete :');
            for(var i=0;i<companyData.company.length;i++)
            {
                if(attribute === companyData.company[i].symbol)
                {
                    companyData.company.splice(i, 1);
                }
            }
            fs.writeFileSync('./company.json', JSON.stringify(companyData), 'utf-8', function (){ 
                console.log('done') 
            });
            console.log('Company Removed Successfully.');    
            console.log(companyData); 
            commercial();  
        }
        else if(compChoice == 3)
        {
            console.log('Back to main menu :');        
            commercial();
        }
        else
        {
            console.log('Invalid choice.'); 
        } 
    }
    // TO EXIT FROM MAIN MENU
    else if(choiceOperation == 4)
    {
        console.log('Exiting main menu..');      
        process.exit(); 
    }  
    else
    {
        console.log('Invalid choice.'); 
    }     
}
commercial();