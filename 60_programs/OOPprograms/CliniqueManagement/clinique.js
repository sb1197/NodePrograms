/***************************************************************************
 *purpose   : To print doctor patient report within the clinique managment system.    
 * @file    : Clinique.js
 * @author  : Shweta Bochare
 * @version : 1.0
 * @since   : 10/01/2019 
 *******************************************************************************/
//used to take input from user
var read = require('readline-sync');
//used for performing file operations
var fs = require('fs');
var patientData = fs.readFileSync('patient.json', 'utf8');
var doctorData = fs.readFileSync('doctor.json', 'utf8');
var jsonpatientData = JSON.parse(patientData);
var jsondoctorData = JSON.parse(doctorData);
function Clinique() 
{
    do {
        console.log("1.Add Appointment");
        console.log("2.Print list");
        console.log("3.search");
        console.log("4.save");
        console.log("5.Exit!");
        var option = read.question('Enter the option:');
        switch (parseInt(option)) 
        {
            case 1:
                console.log("****Doctors Available are****");
                console.log(jsondoctorData.Doctors);
                var inputName = read.question(' Enter Patient Name: ');
                var inputID = parseInt(Math.random() * 1000);
                var inputmobNo = read.question(' Enter your Mobile Number: ');
                var inputAge = read.question(' please Enter your Age: ');
                var inputAppointed_To = read.question('whose appointment u want: ');
                jsonpatientData.Patients.push({
                    "Name": inputName,
                    "ID": inputID,
                    "mobNo": inputmobNo,
                    "Age": inputAge,
                    "Appointed_To": inputAppointed_To
                });
                console.log("Appointment Added Successfully...");
                console.log(jsonpatientData.Patients);
                Clinique();
                break;
            case 2:
                console.log(jsonpatientData);
                console.log(jsondoctorData);
                Clinique();
                break;
            case 3:
                console.log("****SEARCH LIST******");
                console.log("1.Doctor \n 2.Patient");
                var option2 = read.question('Enter Option: ');
                if (option2 == 1) 
                {
                    console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability");
                    var option3 = read.question('Enter option: ');
                    if (option3 == 1) 
                    {
                        var i = read.question('Enter Name: ');
                        for (var key in jsondoctorData.Doctors) 
                        {
                            if (jsondoctorData.Doctors[key].Name == i) 
                            {
                                console.log(" Doctor Details");
                                console.log(jsondoctorData.Doctors[key]);
                            }
                        }
                    }
                    else if (option3 == 2) 
                    {
                        var i = read.question('Enter ID: ');
                        for (var key in jsondoctorData.Doctors) 
                        {
                            if (jsondoctorData.Doctors[key].ID == i) 
                            {
                                console.log(" Doctor Details");
                                console.log(jsondoctorData.Doctors[key]);
                            }
                        }
                    }
                    else if (option3 == 3) 
                    {
                        var i = read.question('Enter Specialization: ');
                        for (var key in jsondoctorData.Doctors) 
                        {
                            if (jsondoctorData.Doctors[key].Specialization == i) 
                            {
                                console.log(" Doctor Details");
                                console.log(jsondoctorData.Doctors[key]);
                            }
                        }
                    }
                    else if (option3 == 4) 
                    {
                        var i = read.question('Enter Availability: ');
                        for (var key in jsondoctorData.Doctors) 
                        {
                            if (jsondoctorData.Doctors[key].Availability == i) 
                            {
                                console.log("Doctors Details");
                                console.log(jsondoctorData.Doctors[key]);
                            }
                        }
                    }
                    Clinique();
                }
                if (option2 == 2) 
                {
                    console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age");
                    var option4 = read.question('Enter option: ');
                    if (option4 == 1) 
                    {
                        var i = read.question('Enter Name: ');
                        for (var key in jsonpatientData.Patients) 
                        {
                            if (jsonpatientData.Patients[key].Name == i) 
                            {
                                console.log(" Patients Details");
                                console.log(jsonpatientData.Patients[key]);
                            }
                        }
                    }
                    else if (option4 == 2) 
                    {
                        var i = read.question('Enter ID: ');
                        for (var key in jsonpatientData.Patients) 
                        {
                            if (jsonpatientData.Patients[key].ID == i) 
                            {
                                console.log("Patient Details");
                                console.log(jsonpatientData.Patients[key]);
                            }
                        }
                    }
                    else if (option4 == 3) 
                    {
                        var i = read.question('Enter mobNo: ');
                        for (var key in jsonpatientData.Patients) 
                        {
                            if (jsonpatientData.Patients[key].mobNo == i) 
                            {
                                console.log("Patient Details");
                                console.log(jsonpatientData.Patients[key]);
                            }
                        }
                    }
                    else if (option4 == 4) 
                    {
                        var i = read.question('Age: ');
                        for (var key in jsonpatientData.Patients) 
                        {
                            if (jsonpatientData.Patients[key].Age == i) 
                            {
                                console.log("Patient Details");
                                console.log(jsonpatientData.Patients[key]);
                            }
                        }
                    }
                    Clinique();
                }
                break;
            case 4:
                fs.writeFileSync('./patient.json', JSON.stringify(jsonpatientData), 'utf-8', function (err) {
                    if (err) throw err
                    console.log('Done!');
                })
                Clinique();
                break;
            case 5:
                process.exit();
                break;
            default:
                console.log("please enter valid input");
        }
    } while (option != 4);
}
Clinique();