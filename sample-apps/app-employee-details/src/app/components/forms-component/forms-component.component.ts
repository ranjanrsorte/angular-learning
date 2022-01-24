import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms-component.component.html',
  styleUrls: ['./forms-component.component.css']
})
export class FormsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  details: any[] = [];
  employeeid: number = 0;
  employeename: string = '';
  employeeemail: string = '';
  employeephone: number = 0;
  employeecity: string = '';

  addEmployee(data: any) {
    this.details.push(data);
    this.clear();
  }

  getEmployeeData(data: any) {
    this.employeeid = data.empid;
    this.employeename = data.empname;
    this.employeeemail = data.empemail;
    this.employeephone = data.empphone;
    this.employeecity = data.empcity;
  }

  updateEmployee(data: any) {
    this.details = this.details.filter(x => x.empid != data.empid);
    this.details.push(data);
    this.details.sort((a, b) => (a.empid < b.empid ? -1 : 1));
    this.clear();
  }

  deleteEmployee(data: any){
    this.details = this.details.filter(x => x.empid !== data.empid);
    console.log(this.details);
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
