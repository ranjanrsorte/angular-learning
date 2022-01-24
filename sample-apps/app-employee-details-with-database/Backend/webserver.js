import express from 'express';
import cors from 'cors';
import DataAccess from './dataaccess.js';

const instance = express();

instance.use(express.json());
instance.use(express.urlencoded({extended:false}));

instance.use(cors({
    origin:'*',
    methods: '*',
    allowedHeaders: '*'
}));
const port = process.env.PORT || 7011;
const da = new DataAccess();

instance.get("/get/employee", da.getEmployeeData);
instance.post("/add/employee", da.addEmployee);
instance.put("/update/employee/:Id", da.updateEmployee);
instance.delete("/delete/employee/:Id", da.deleteEmployee);

instance.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});