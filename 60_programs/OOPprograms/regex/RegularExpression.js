/*/**********************************************************************************
 *  Purpose         : Using Regex replace the input file with correct strings and write 
                        the output to a Outputfile.
 *  @file           : RegularExpression.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 07-01-2018
 **********************************************************************************/

var utility =  require('../../utility/Utility');
var read = require('readline-sync');

const fileStream = require('fs');
var file = fileStream.readFileSync('regexFile.txt','utf8');
console.log(file);

var fullName = read.question('Enter your fullname :');

var name = fullName.split(" ");
var fName = name[0];
var mName = name[1];
var lName = name[2];

var status = utility.validateName(fName);
if(status == true)
{
    var status1 = utility.validateName(mName);
    if(status1 == true)
    {
        var status2 = utility.validateName(lName);
        if(status2 == true)
        {        
            console.log('First name :',fName);
            console.log('Middle name :',mName);
            console.log('Last name :',lName); 
        }
        else
        {
            console.log("Invalid fullName"); 
            process.exit(); 
        }
    }
}

var contact = read.question('Enter your contact number :');
var flag = utility.validateContact(contact);
if(flag == true)
{
    console.log("Contact is :",contact);
}
else
{
    console.log("Invalid Contact");
}
var d = new Date();
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var today = date+"/"+(month+1)+"/"+year;

 utility.displayRegexFile(file,fName,fullName,contact,today);
 