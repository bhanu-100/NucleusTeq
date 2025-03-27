package com.backend.collegeLevelCounselling.services;

import com.backend.collegeLevelCounselling.models.StudentModel;

import java.util.List;
import java.util.Map;

public interface StudentBussinessServicesInterface {
    boolean saveStudent(StudentModel student);
    List<StudentModel> getTop15Students();
    List<StudentModel> getAllPendingStudents();
    boolean acceptStudent(String email);
    boolean rejectStudent(String email);
    boolean editStudentDetails(StudentModel student);
    StudentModel getStudentDetails(Map<String, String> requestData);
}
