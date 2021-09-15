const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');

class User{
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.streetName = faker.address.streetName()
        this.city = faker.address.city()
        this.state = faker.address.state()
        this.zipCode = faker.address.zipCode()
        this.country = faker.address.country()
    }
}

app.get("/api/users/new", (req,res)=>{
    let newUser = new User()
    res.json({data: newUser})
})

app.get("/api/companies/new", (req,res)=>{
    let newCompany = new Company()
    res.json({data: newCompany})
})

app.get("/api/user/company", (req,res)=>{
    let newCompUser =  new User()
    res.json({data: newCompUser})
})

// app.get("/api/user/company", (req,res)=>{
//     let newCompUser =  new Company()
//     res.json({data: newCompUser})

app.listen( port, () => console.log(`Listening on port: ${port}`) );