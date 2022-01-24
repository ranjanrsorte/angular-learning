import { Sequelize } from "sequelize";
import pkg from 'sequelize';

const { DataTypes } = pkg;

import employee from './models/employee.js';
import e from "express";

const sequelize = new Sequelize(
    "practice_db", "root", "mysql", {
    host: "localhost",
    port: "3306",
    dialect: "mysql"
}
);

sequelize.authenticate().then(
    (authenticate) => {
        console.log("Connection to database is successful");
    },
    (error) => {
        console.log("Some Error occurred while connection to database", error);
    }
);

class DataAccess {
    constructor() {
        employee.init(sequelize, DataTypes);
    }

    async getEmployeeData(req, res) {

        await sequelize.sync({ force: false });

        let records = await employee.findAll();
        if (records) {
            return res
                .status(200)
                .send({ message: "Data is received successfully", data: records });
        }
        return res.status(500).send({ message: "Some error Occurred" });
    }

    async addEmployee(req, res) {
        await sequelize.sync({ force: false });
        let emp = await employee.create(req.body);
        if (emp) {
            return res.status(200).send({ message: "Data Added Successfully", data: emp });
        }
        return res.status(500).send({ message: "Some error occurred while adding data"});
    }

    async updateEmployee(req, res) {
        await sequelize.sync({ force: false });
        let emp = await employee.update({
            EmpName: req.body.EmpName,
            EmpEmail: req.body.EmpEmail,
            EmpCity: req.body.EmpCity,
            EmpPhone: req.body.EmpPhone
        },{
            where: {
                Id: parseInt(req.params.Id)
            }
        });
        if (emp) {
            return res.status(200).send({ message: "Data Successfully Updated", data: emp});
        }
        return res.status(500).send({ message: "Some error occurred while updating data"});
    }

    async deleteEmployee(req, res) {
        await sequelize.sync({ force:false });
        let emp = await employee.destroy({ where: { Id: req.params.Id} });
        if(emp)
            return res.status(200).send({ message: "Data Deleted Successfully", data: emp});
        
        return res.status(500).send({ message: "Some error occurred while deleting data"});
    }
}
export default DataAccess;