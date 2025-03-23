package com.example.hrportal.controller;

import com.example.hrportal.model.HrModel;
import com.example.hrportal.service.HrServiceInterface;
import jakarta.validation.Valid;
import org.springframework.ui.Model;
import com.example.hrportal.model.EmployeeModel;
import com.example.hrportal.service.EmployeeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/")
public class UrlController {

    @Autowired
    private EmployeeServiceInterface employeeService;

    @Autowired
    private HrServiceInterface hrService;

    public boolean loginUser = false;
    public HrModel hrModel;

    @GetMapping("/")
    public String startPage(Model model) {
        model.addAttribute("HrModel", new HrModel());
        return "login";
    }

    @GetMapping("/home")
    public String home(Model model) {
        List<EmployeeModel> employees = employeeService.showAllEmployeeDetails();
        model.addAttribute("employees", employees);
        model.addAttribute("loginUser", loginUser);
        model.addAttribute("hrModel", hrModel);
        return "index";
    }

    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("HrModel", new HrModel());
        return "login";
    }

    @PostMapping("/home")
    public String login(@Valid HrModel user, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            model.addAttribute("HrModel", user);
            return "login";
        }
        if(hrService.getHrDetails(user)){
            loginUser=true;
            hrModel=user;
          return "redirect:/home";
        }
        return "redirect:/login";
    }

    @GetMapping("/addEmployee")
    public String getEmployee(Model model) {
        model.addAttribute("EmployeeModel", new EmployeeModel());
        model.addAttribute("loginUser", loginUser);
        model.addAttribute("hrModel", hrModel);
        return "addEmployee";
    }

    @PostMapping("/addEmployee")
    public String addEmployee(@ModelAttribute EmployeeModel employee, Model model) {
        employeeService.createEmployeeDetails(employee);
        return "redirect:/home";
    }

    @GetMapping("/editEmployee/{id}")  // Fetch employee before editing
    public String editEmployee(@PathVariable String id, Model model) {
        EmployeeModel employee = employeeService.getEmployeeDetails(id);
        model.addAttribute("employee", employee);
        model.addAttribute("loginUser", loginUser);
        model.addAttribute("hrModel", hrModel);
        return "editEmployee";
    }

    @PostMapping("/updateEmployee")
    public String updateEmployee(@ModelAttribute EmployeeModel employee, Model model) {
        employeeService.updateEmployeeDetails(employee);
        return "redirect:/home";
    }

    @GetMapping("/deleteEmployee/{id}")
    public String deleteEmployee(@PathVariable String id) {
        employeeService.deleteEmployeeDetails(id);
        return "redirect:/home";
    }
}
