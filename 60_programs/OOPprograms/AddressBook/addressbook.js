/**************************************************************************
* Purpose: Simple Address Book to store address and to find the adress of existing person.
* @filename  addressbook.js
* @author Shweta Bochare
* @version 1.0
* @since 10/01/2019 
*****************************************************************************/
//used for taking input from user
var read = require('readline-sync');
//used for performing file operations
var fs = require('fs');
//used to read.question data from json file
var data = fs.readFileSync('Addressbook.json');
//for holding the object
var arrayOfObjects = JSON.parse(data);
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;

class Address 
{
    createAddress() 
    {
        console.log("**Please enter info to create a address profile***");
        var name = read.question("Please enter your first name: ");
        var lastName = read.question("Please enter your last name: ");
        if (nameRestriction.test(name) == false && name.length > 3 && nameRestriction.test(lastName) == false) 
        {
            console.log("Invalid name!");
            return false;
        }
        console.log("Please enter your address");
        var street = read.question("Enter street: ");
        var city = read.question("Enter city: ");
        if (nameRestriction.test(city) == false) 
        {
            console.log("Invalid city name!");
            return false;
        }
        var state = read.question("Enter state: ");
        if (nameRestriction.test(state) == false) 
        {
            console.log("Invalid state name!");
            return false;
        }
        var nation = read.question("Enter nationality: ");
        if (nameRestriction.test(nation) == false) 
        {
            console.log("Invalid Nationality!");
            return false;
        }
        var zip = read.question("Enter Zip/Postal code: ");
        if (contactRestriction.test(zip) == false || zip.length != 6) 
        {
            console.log("Invalid Zipcode!!please enter minimum 6 digits ");
            return false;
        }
        var phoneNum = read.question("Enter phone number: ");
        if (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) 
        {
            console.log("Invalid number!");
            return false;
        }
        arrayOfObjects.Person.push({
            Name: name,
            LastName: lastName,
            Address: {
                Street: street,
                City: city,
                State: state,
                Nation: nation,
                Zip: zip,
                PhoneNum: phoneNum
            }
        })
        address();
        console.log("Address updated succesfully!");
        console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
    }
    compare1(a, b) 
    {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) 
        {
            return -1;
        }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) 
        {
            return 1;
        }
        return 0;
    }
    sorting() 
    {
        console.log(arrayOfObjects.Person.sort(this.compare1));     //this is a keyword
    }
    openProfile() 
    {
        var temp = -1;
        if (arrayOfObjects.Person.length > 0) 
        {
            for (var i = 0; i < arrayOfObjects.Person.length; i++) 
            {
                console.log(arrayOfObjects.Person[i]);
            }
            var update = read.question("Please enter the name of profile: ");
            for (var k = 0; k < arrayOfObjects.Person.length; k++) 
            {
                if (update == arrayOfObjects.Person[k].Name) 
                {
                    temp = k;
                    console.log("Please select an option to modify your profile ");
                    console.log("1: Update");
                    console.log("2: Delete");
                    console.log("3: Add");
                    console.log("4: Sort");
                    console.log("5: Save");
                    console.log("6: Quit");
                    var choice2 = read.question("Please enter your choice: ");
                    switch (parseInt(choice2)) 
                    {
                        case 1:
                            console.log("What do you want to update? ");
                            console.log("1: Street");
                            console.log("2: City");
                            console.log("3: State");
                            console.log("4: Nation");
                            console.log("5: Zip code");
                            console.log("6: Phone");
                            console.log("7: Exit");
                            var choice3 = read.question("Please enter your choice: ");
                            switch (parseInt(choice3)) 
                            {
                                case 1:
                                    var sUpdate = read.question("Enter the new street number: ");
                                    if (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) 
                                    {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = 
                                    {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": 
                                        {
                                            "Street": sUpdate,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k]["Address"].PhoneNum
                                        }

                                    }
                                    arrayOfObjects.Person[k] = obj;
                                    address();
                                    break;
                                case 2:
                                    var cUpdate = read.question("Enter the new city name: ");
                                    if (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) 
                                    {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = 
                                    {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": 
                                        {
                                            "Street": arrayOfObjects.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k]["Address"].PhoneNum
                                        }

                                    }
                                    arrayOfObjects.Person[k] = obj;
                                    address();
                                    break;
                                case 3:
                                    var stUpdate = read.question("Enter the new state name: ");
                                    if (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) 
                                    {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = 
                                    {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": 
                                        {
                                            "Street": arrayOfObjects.Person[k]["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": stUpdate,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k]["Address"].PhoneNum
                                        }

                                    }
                                    arrayOfObjects.Person[k] = obj;
                                    address();
                                    break;
                                case 4:
                                    var nUpdate = read.question("Enter the new nation name: ");
                                    if (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) 
                                    {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = 
                                    {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": 
                                        {
                                            "Street": arrayOfObjects.Person[k]["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": nUpdate,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    arrayOfObjects.Person[k] = obj;
                                    address();
                                    break;
                                case 5:
                                    var zUpdate = read.question("Enter the new zip code: ");
                                    if (contactRestriction.test(zUpdate) == false || zUpdate.length != 6) 
                                    {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                    var obj = 
                                    {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": 
                                        {
                                            "Street": arrayOfObjects.Person[k]["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": arrayOfObjects.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    arrayOfObjects.Person[k] = obj;
                                    address();
                                    break;
                                case 6:
                                    var pUpdate = read.question("Enter the new phone number: ");
                                    if (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) 
                                    {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                    var obj = 
                                    {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address":
                                        {
                                            "Street": arrayOfObjects.Person[k]["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": pUpdate
                                        }
                                    }
                                    arrayOfObjects.Person[k] = obj;
                                    address();
                                    break;
                                case 7:
                                    console.log("Exit!");
                                    address();
                                    break;
                            }
                            break;
                        case 2:
                            var update = read.question("Please enter the index of item you want to delete: ");
                            delete arrayOfObjects.Person[update];
                            for (var k = 0; k < arrayOfObjects.Person.length; k++) 
                            {
                                if (arrayOfObjects.Person[k] == null) 
                                {
                                    arrayOfObjects.Person.splice(k, 1);
                                }
                            }
                            address();
                            break;
                        case 3:
                            this.createAddress();
                            break;
                        case 4:
                            this.sorting();
                            address();
                            break;
                        case 5:
                            address();
                            break;
                        case 6:
                            console.log("Exit");
                            address();
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }
            } 
            if (temp == -1) 
            {
                console.log("Profile not present in the address book! Please create one.");
                address();
            }
        }
        else 
        {
            console.log("No profiles to display!! Please create a new profile!");
            this.createAddress();
        }
    }
}

function address() 
{
    var a = new Address();
    console.log("//*********ADDRESS BOOK*********//");
    console.log("1: Create Address Profile");
    console.log("2: Open Address Book");
    console.log("3: Save");
    console.log("4: Exit");
    var choice1 = read.question("Please enter your choice: ");
    if (choice1 == 1) 
    {
        a.createAddress();
        address();
    }
    if (choice1 == 2) 
    {
        a.openProfile();
        address();
    }
    if (choice1 == 3) 
    {
        fs.writeFileSync('./Addressbook.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) 
        {
            if (err) throw err
            console.log('Done!');
        })
    }
    if (choice1 == 4) 
    {
        console.log("Exit!");
        process.exit();
    }
}
address();