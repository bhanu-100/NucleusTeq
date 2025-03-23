package com.example.hrportal.service;

import com.example.hrportal.model.EmployeeModel;

import java.util.List;

public interface EmployeeServiceInterface {
    public void test();
    public List<EmployeeModel> showAllEmployeeDetails();
    public void updateEmployeeDetails(EmployeeModel employee);
    public void deleteEmployeeDetails(String id);
    public void createEmployeeDetails(EmployeeModel employee);
    public EmployeeModel getEmployeeDetails(String id);
}
