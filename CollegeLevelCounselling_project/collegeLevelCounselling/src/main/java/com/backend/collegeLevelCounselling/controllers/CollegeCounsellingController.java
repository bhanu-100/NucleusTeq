package com.backend.collegeLevelCounselling.controllers;

import com.backend.collegeLevelCounselling.models.SeatModel;
import com.backend.collegeLevelCounselling.models.StudentModel;
import com.backend.collegeLevelCounselling.models.UserModel;
import com.backend.collegeLevelCounselling.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class CollegeCounsellingController {


    @Autowired
    private UserBussinessServicesInterface userServices;
    @Autowired
    private StudentBussinessServicesInterface studentServices;
    @Autowired
    private SeatBussinessServicesInterface seatServices;

    @PostMapping("/studentStatus")
    public ResponseEntity<StudentModel> StudentStatus(@RequestBody Map<String, String> requestData) {
        return ResponseEntity.ok(studentServices.getStudentDetails(requestData));
    }
    @PostMapping("/forgot")
    public ResponseEntity<Map<String,String>> forgot(@RequestBody Map<String, String> requestData) {
        return ResponseEntity.ok(userServices.forgotPassword(requestData));
    }
    @PostMapping("/signUp")
    public ResponseEntity<Boolean> signUpn(@RequestBody UserModel user) {
        return ResponseEntity.ok(userServices.saveUser(user));
    }
    @PostMapping("/signIn")
    public ResponseEntity<Map<String,String>> signIn(@RequestBody Map<String, String> requestData) {
        return ResponseEntity.ok(userServices.findUser(requestData));
    }
    @PostMapping("/studentRegistration")
    public ResponseEntity<Boolean>  studentRegistration(@RequestBody StudentModel student) {
        return ResponseEntity.ok(studentServices.saveStudent(student));
    }
    @PostMapping("/editStudentDetails")
    public ResponseEntity<Boolean>  editStudentDetails(@RequestBody StudentModel student) {
        return ResponseEntity.ok(studentServices.editStudentDetails(student));
    }
    @PostMapping("/acceptStudent")
    public ResponseEntity<Boolean>  AcceptStudent(@RequestBody Map<String, String> requestData) {
        return ResponseEntity.ok(studentServices.acceptStudent(requestData.get("email")));
    }
    @PostMapping("/rejectStudent")
    public ResponseEntity<Boolean>  RejectStudent(@RequestBody Map<String, String> requestData) {
        return ResponseEntity.ok(studentServices.rejectStudent(requestData.get("email")));
    }
    @PostMapping("/updateSeats")
    public ResponseEntity<Boolean>  updateSeats(@RequestBody Map<String, String> requestData) {
        return ResponseEntity.ok(seatServices.addSeat(requestData.get("branch"),requestData.get("seats")));
    }
    @PostMapping("/removeAdmissionOfficer")
    public ResponseEntity<Boolean>  removeAdmin(@RequestBody Map<String, String> requestData) {
        return ResponseEntity.ok(userServices.removeAdmissionOfficerByEmail(requestData.get("email")));
    }
    @PostMapping("/addAdmissionOfficer")
    public ResponseEntity<Boolean>  addAdmin(@RequestBody Map<String, String> requestData) {
        return ResponseEntity.ok(userServices.addAdmissionOfficerByEmail(requestData.get("email")));
    }
    @GetMapping("/top15StudentTable")
    public ResponseEntity<List<StudentModel>> getTop15StudentTable() {
        return ResponseEntity.ok(studentServices.getTop15Students());
    }
    @GetMapping("/allStudentTable")
    public ResponseEntity<List<StudentModel>> getAllPendingStudentTable() {
        return ResponseEntity.ok(studentServices.getAllPendingStudents());
    }
    @GetMapping("/seatTable")
    public ResponseEntity<List<SeatModel>> getSeatTable() {
        return ResponseEntity.ok(seatServices.getAllSeats());
    }
    @GetMapping("/officerTable")
    public ResponseEntity<List<UserModel>> getOfficerTable() {
        return ResponseEntity.ok(userServices.getAllAdmissionOfficerUsers());
    }

}