package com.example.hrportal.data;

import com.example.hrportal.model.EmployeeMapper;
import com.example.hrportal.model.EmployeeModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmployeeDataAccess implements EmployeeDataAccessInterface {

    @Autowired
    private JdbcTemplate jdbcTemplate;  // Using JdbcTemplate for all queries

    @Override
    public List<EmployeeModel> showAllEmployeeDetails() {
        String sql = "SELECT * FROM EMPLOYEE";
        return jdbcTemplate.query(sql, new EmployeeMapper());
    }

    @Override
    public void createEmployeeDetails(EmployeeModel employee) {
        String sql = "INSERT INTO EMPLOYEE (EMPLOYEE_ID, EMPLOYEE_NAME, EMPLOYEE_DEPARTMENT, EMPLOYEE_EMAIL, EMPLOYEE_SALARY) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, employee.getEmployeeId(), employee.getEmployeeName(), employee.getEmployeeDepartment(), employee.getEmployeeEmail(), employee.getEmployeeSalary());
    }

    @Override
    public void updateEmployeeDetails(EmployeeModel employee) {
        String sql = "UPDATE EMPLOYEE SET EMPLOYEE_NAME = ?, EMPLOYEE_DEPARTMENT = ?, EMPLOYEE_EMAIL = ?, EMPLOYEE_SALARY = ? WHERE EMPLOYEE_ID = ?";
        jdbcTemplate.update(sql, employee.getEmployeeName(), employee.getEmployeeDepartment(), employee.getEmployeeEmail(), employee.getEmployeeSalary(), employee.getEmployeeId());
    }

    @Override
    public void deleteEmployeeDetails(String id) {
        String sql = "DELETE FROM EMPLOYEE WHERE EMPLOYEE_ID = ?";
        jdbcTemplate.update(sql, id);
    }
    @Override
    public EmployeeModel getEmployeeDetails(String id) {
        String sql = "SELECT * FROM EMPLOYEE WHERE EMPLOYEE_ID = ?";
        return jdbcTemplate.queryForObject(sql, new EmployeeMapper(), id);
    }

}
