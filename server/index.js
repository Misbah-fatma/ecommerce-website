const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")

const UserModel = require('./models/Users.js')

const app = express()
app.use(express.json())

app.use(cors({
    origin: true,
     credentials: true
    }))

mongoose.connect('mongodb://127.0.0.1:27017/employee')

app.post("/register", (req, res) =>{
    UserModel.create(req.body) 
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            console.log("Success");
            if(user.password === password) {
            res.json("Success")
                }
                else{
            res.json("the password is incorrect")
                }
        }
                 else {
            res.json("No record existed")
        }
})
})


app.listen(3001, () => {
    console.log("Server is Running")
})