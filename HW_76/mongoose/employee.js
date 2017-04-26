const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: String,
    deparment: { type: mongoose.Schema.Types.ObjectId, ref: 'department' }
});

employeeSchema.methods.print = function () {
    console.log("Name: "+ this.name + ", Salary:" + this.salary);
};

module.exports = mongoose.model('employee', employeeSchema);