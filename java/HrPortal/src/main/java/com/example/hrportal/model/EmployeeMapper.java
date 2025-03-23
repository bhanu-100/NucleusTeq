package com.example.hrportal.model;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
public class EmployeeMapper implements RowMapper<EmployeeModel> {
    @Override
    public EmployeeModel mapRow(ResultSet rs, int arg1) throws SQLException {

        EmployeeModel employee = new EmployeeModel(rs.getString("EMPLOYEE_ID"), rs.getString("EMPLOYEE_NAME") ,rs.getString("EMPLOYEE_DEPARTMENT"), rs.getString("EMPLOYEE_EMAIL"),rs.getFloat("EMPLOYEE_SALARY"));
        return employee;
    }
}
