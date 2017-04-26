const mongoose = require('mongoose'),
    Employee = require('./employee'),
    Department = require('./department');

mongoose.connect('mongodb://127.0.0.1:27017/employees');

mongoose.connection.on('error', err => {
    console.error(err);
});

mongoose.connection.on('open', () => {
    console.log('connected');

    const allEmployees = [],
        allDepartments = [],
        joeSmith = new Employee({
            name: 'Joe Smith',
            salary: '50000',
        });

    donaldTrump = new Employee({
        name: 'Donald Trump',
        salary: '120000',
    });

    bernieSanders = new Employee({
        name: 'Bernie Sanders',
        salary: '12000',
    });
    bobJones = new Employee({
        name: 'Bob Jones',
        salary: '1000000',
    });

    const politicalDepartment = new Department({
            name: 'Political'
        }),
        janitorialDepartment = new Department({
            name: 'Janitorial'
        });

    allDepartments.push(politicalDepartment, janitorialDepartment);

    joeSmith.department = janitorialDepartment;
    donaldTrump.department = politicalDepartment;
    bernieSanders.department = politicalDepartment;
    bobJones.department = janitorialDepartment;

    allEmployees.push(joeSmith, donaldTrump, bernieSanders, bobJones);
    janitorialDepartment.employees.push(joeSmith);
    janitorialDepartment.employees.push(bobJones);
    politicalDepartment.employees.push(donaldTrump);
    politicalDepartment.employees.push(bernieSanders);

    allEmployees.forEach((e) => e.save());
    allDepartments.forEach((d) => d.save());
    Department.find().populate("employees").exec((err, res) => {
        console.log("in the populate");
        res.forEach(result => {
            result.print();
        });
    });
});