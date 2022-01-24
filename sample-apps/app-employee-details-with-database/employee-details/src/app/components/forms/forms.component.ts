import { Component, OnInit } from '@angular/core';
import { EmployeedataService } from './../../services/employeedata.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  details: any[] = [];
  employees:any;
  constructor(private employeedata:EmployeedataService) {
    this.employeedata.employees().subscribe((data) => {
      this.employees = data;
      this.details = this.employees.data;
    })
  }

  ngOnInit(): void {
  }

  employeeid: number = 0;
  employeename: string = '';
  employeeemail: string = '';
  employeephone: number = 0;
  employeecity: string = '';

  addEmployee(data: any) {
    this.employeedata.addEmployee(data).subscribe((result) => {
      this.employeedata.employees().subscribe((data) => {
        this.employees = data;
        this.details = this.employees.data;
      })
    });
    this.clear();
  }

  getEmployeeData(data: any) {
    this.employeeid = data.Id;
    this.employeename = data.EmpName;
    this.employeeemail = data.EmpEmail;
    this.employeephone = data.EmpPhone;
    this.employeecity = data.EmpCity;
  }

  updateEmployee(data: any) {
    this.employeedata.updateEmployee(data).subscribe((result) => {
      this.employeedata.employees().subscribe((data) => {
        this.employees = data;
        this.details = this.employees.data;
      })
    });
    this.details.sort((a, b) => (a.Id < b.Id ? -1 : 1));
    this.clear();
  }

  deleteEmployee(data: any){
    this.employeedata.deleteEmployee(data.Id).subscribe((result) => {
      this.employeedata.employees().subscribe((data) => {
        this.employees = data;
        this.details = this.employees.data;
      })
    });
    this.clear();
  }

  clear() {
    this.employeeid = 0;
    this.employeename = '';
    this.employeeemail = '';
    this.employeephone = 0;
    this.employeecity = '';
  }
}
