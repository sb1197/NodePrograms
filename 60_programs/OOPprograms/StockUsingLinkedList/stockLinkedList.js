var read =  require('readline-sync');
var fs = require('fs');
var element = fs.readFileSync('company.json');
var companyData = JSON.parse(element);
const linked = require('../StockLinkedList/LinkedList');
var list = new linked.LinkedList;
for(var key in companyData.company){
        list.add(companyData.company[key])  
    }
function Stocklinkedlist()
{
    console.log('\n1.Add Data \n2.Remove Data \n3.Save \n4.Display \n5.Exit');
    var choice = read.question('Enter your choice :');
    if(choice == 1)
    {
        var name = read.question('Enter company name :');
        var PerShare = read.question('Enter per share price :');
        var total = read.question('Enter total number of shares :');
        var v = {
            symbol: name,
            pricePerShare: PerShare,
            totalShare: total
        }
        list.add(v);      
        console.log('Company added successfully');
        Stocklinkedlist();
    }
    else if(choice == 2)
    {
        var array = [];
        array = list.printList1();  
        console.log(array);
          
        var curr = list.head;   
        var deleteCompany = read.question('Enter the company you want to delete :');
        let n = 0;
        var flag=true;
        while(curr && flag)
        {
            n++;           
            if(curr.data.symbol === deleteCompany)
            {  
                console.log('curr :',curr.data.symbol);                
                list.popIndex(n);
                flag=false;              
            }
            curr = curr.next;
        }
        if(flag)
        {
            console.log('Index not found');
        }
        console.log('UPDATED LIST');
        var array = [];
        array = list.printList1();  
        console.log(array);
        Stocklinkedlist();
    }
    else if(choice == 3)
    {
        var outputarray = [];
        outputarray = list.printList1();
        console.log('Output Array is :');     
        console.log(outputarray);
        var b={"company":outputarray}
        fs.writeFileSync('./company.json', JSON.stringify(b), 'utf-8', function () 
        {
            console.log('done')
        });
        console.log('Data saved to file'); 
        Stocklinkedlist();       
    }
    else if(choice == 4)
    {
        var array = [];
        array = list.printList1();  
        console.log(array);
        Stocklinkedlist();
    }
    else if(choice == 5)
    {
        console.log("exit");
        process.exit();      
    }
    else 
    {
        console.log('Invalid choice ..Try Again.'); 
        Stocklinkedlist();        
    } 
}
Stocklinkedlist();