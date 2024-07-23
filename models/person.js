const mongoose = require('mongoose');
//Define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },  
    salary: {
        type: Number,
        require: true
    },
});

//  Create person model
const  Person = mongoose.model('Person', personSchema);
module.exports = Person;



// {
//     "name":"soumya",
//     "age":22,
//     "work":"cheif",
//     "mobile":"987465123",
//     "email":"workforsoumya21@gmail.com",
//     "address":"khordha",
//     "salary":"5000"
// }




