import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { Department } from "../models/department.model";
import { Employee } from "../models/employee.model";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" }
  ];
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };

  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 11, 31),
        dateInputFormat: "DD/MM/YYYY"
      }
    );
  }

  ngOnInit() {}

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
