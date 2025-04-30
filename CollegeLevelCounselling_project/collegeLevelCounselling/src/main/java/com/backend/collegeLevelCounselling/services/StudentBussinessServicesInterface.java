package com.backend.collegeLevelCounselling.services;

import com.backend.collegeLevelCounselling.models.Pair;
import com.backend.collegeLevelCounselling.models.StudentModel;

import java.util.List;
import java.util.Map;

public interface StudentBussinessServicesInterface {
    boolean saveStudent(Map<String, String> requestData);
    List<StudentModel> getTop15Students();
    List<StudentModel> getAllPendingStudents();
    boolean acceptStudent(String email);
    boolean rejectStudent(String email);
    boolean editStudentDetails(StudentModel student);
    Map<String, Pair<StudentModel,Integer>> getStudentDetails(Map<String, String> requestData);
}
