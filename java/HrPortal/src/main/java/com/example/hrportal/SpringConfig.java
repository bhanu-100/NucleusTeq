package com.example.hrportal;

import com.example.hrportal.data.EmployeeDataAccess;
import com.example.hrportal.data.EmployeeDataAccessInterface;
import com.example.hrportal.data.HrDataAccess;
import com.example.hrportal.data.HrDataAccessInterface;
import com.example.hrportal.service.EmployeeService;
import com.example.hrportal.service.EmployeeServiceInterface;
import com.example.hrportal.service.HrService;
import com.example.hrportal.service.HrServiceInterface;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.RequestScope;

@Configuration
public class SpringConfig {
    @Bean(name="EmployeeService")
    @RequestScope
    public EmployeeServiceInterface getEmployeeService(){
        return new EmployeeService();
    }
    @Bean(name="DataAccess")
    @RequestScope
    public EmployeeDataAccessInterface getEmployeeDataAccess(){
        return new EmployeeDataAccess();
    }
    @Bean(name="hrService")
    @RequestScope
    public HrServiceInterface getHrService(){
        return new HrService();
    }
    @Bean(name="HrData")
    @RequestScope
    public HrDataAccessInterface getHrDataAccess(){
        return new HrDataAccess();
    }


}
