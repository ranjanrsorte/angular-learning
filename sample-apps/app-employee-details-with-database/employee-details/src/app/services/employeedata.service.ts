import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {
  url = "http://localhost:7011";
  constructor(private http:HttpClient) { }
  employees() {
    return this.http.get(this.url + "/get/employee");
  }
  addEmployee(data:any) {
    return this.http.post(this.url + "/add/employee", data);
  }
  updateEmployee(data:any) {
    return this.http.put(this.url + "/update/employee/" + data.Id, data);
  }
  deleteEmployee(id:any) {
    return this.http.delete(this.url + "/delete/employee/" + id);
  }
}
