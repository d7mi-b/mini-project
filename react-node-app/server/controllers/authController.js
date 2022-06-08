const Student = require('../Models/studentModel');
const Employee = require('../Models/employeeModel');






module.exports.login_get = (req,res) => {
    res.status(200).send("Hello")
}



 

module.exports.login_post = async (req,res) => {

    const {username , password} = req.body;

    try{
        const student = await Student.login(username,password);
        if(student){
            console.log(student)
        res.status(200).json({student: student.id})
        }
      
        
    }
    catch(err) {
        
        const employee = await Employee.login(username,password)
        if(employee){
            res.status(200).json({employee: employee.id})
        }

        res.status(400).json({})

    }
       
}





//To add students with Hashed password

module.exports.registerStudent= async (req,res) => {
    
        
        //create student 

        try{
            const student = await Student.create({
            name:"Halah",
            age:22,
            email:"halah@gmail.com",
            phoneNo:7345689,
            dateOfBirth:"12-3-1999",
            level:4,
            department:"Computer Engineering",
            typeOfRegister:"public",
            wallet:10000,
            grades:[],
            username:1111111,
            password:"1234"
            })
            res.status(201).json(student)
        }
        catch (err){
            console.log(err);
            res.status(400).send('error student not created')
        }
    
}

module.exports.registerEmployee= async (req,res) => {
    
        
    //create employee

    try{
        const employee = await Employee.create({
       
            name:"Ahmed",
            phone_NO:712946795,
            department:"Computer Engineering",
            email:"Ahmed@gmail.com",
            date_Of_Birth:"2-5-1989",
            username:"27380",
            password:1234
        })
        res.status(201).json(employee)
    }
    catch (err){
        console.log(err);
        res.status(400).send('error employee not created')
    }
}