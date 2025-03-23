package com.example.hrportal.model;

public class EmployeeModel {

    private String employeeId;
    private String employeeName;
    private String employeeDepartment;
    private String employeeEmail;
    private float employeeSalary;

    public EmployeeModel() {}

    public EmployeeModel(String employeeId, String employeeName, String employeeDepartment,
                         String employeeEmail, float employeeSalary) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeDepartment = employeeDepartment;
        this.employeeEmail = employeeEmail;
        this.employeeSalary = employeeSalary;
    }

    @Override
    public String toString() {
        return "EmployeeModel{" +
                "employeeId='" + employeeId + '\'' +
                ", employeeName='" + employeeName + '\'' +
                ", employeeDepartment='" + employeeDepartment + '\'' +
                ", employeeEmail='" + employeeEmail + '\'' +
                ", employeeSalary='" + employeeSalary + '\'' +
                '}';
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public String getEmployeeDepartment() {
        return employeeDepartment;
    }

    public String getEmployeeEmail() {
        return employeeEmail;
    }

    public float getEmployeeSalary() {
        return employeeSalary;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public void setEmployeeDepartment(String employeeDepartment) {
        this.employeeDepartment = employeeDepartment;
    }

    public void setEmployeeEmail(String employeeEmail) {
        this.employeeEmail = employeeEmail;
    }

    public void setEmployeeSalary(float employeeSalary) {
        this.employeeSalary = employeeSalary;
    }
}
