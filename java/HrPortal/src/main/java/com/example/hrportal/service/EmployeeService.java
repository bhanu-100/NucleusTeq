package com.example.hrportal.service;

import com.example.hrportal.data.EmployeeDataAccessInterface;
import com.example.hrportal.model.EmployeeModel;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class EmployeeService implements EmployeeServiceInterface{

    @Autowired
    EmployeeDataAccessInterface DataAccess;

    @Override
    public void test() {
        System.out.println("test");
    }

    @Override
    public List<EmployeeModel> showAllEmployeeDetails() {
       return DataAccess.showAllEmployeeDetails();
    }

    @Override
    public void updateEmployeeDetails(EmployeeModel employee) {
       DataAccess.updateEmployeeDetails(employee);
    }

    @Override
    public void deleteEmployeeDetails(String id) {
       DataAccess.deleteEmployeeDetails(id);
    }

    @Override
    public void createEmployeeDetails(EmployeeModel employee) {
      DataAccess.createEmployeeDetails(employee);
    }
    @Override
    public EmployeeModel getEmployeeDetails(String id) {
        return DataAccess.getEmployeeDetails(id);
    }
}
