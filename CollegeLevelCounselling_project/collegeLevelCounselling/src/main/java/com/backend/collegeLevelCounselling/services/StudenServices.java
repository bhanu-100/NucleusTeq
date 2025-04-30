package com.backend.collegeLevelCounselling.services;

import com.backend.collegeLevelCounselling.models.Pair;
import com.backend.collegeLevelCounselling.models.StudentModel;
import com.backend.collegeLevelCounselling.models.UserModel;
import com.backend.collegeLevelCounselling.repositories.StudentRepoInterface;
import com.backend.collegeLevelCounselling.repositories.UserRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class StudenServices implements StudentBussinessServicesInterface {

    @Autowired
    private StudentRepoInterface studentRepo;
    @Autowired
    private SeatBussinessServicesInterface seatServices;
    @Autowired
    private UserRepoInterface UserRepo;

    @Override
    public List<StudentModel> getTop15Students() {
        List<StudentModel> students = studentRepo.findAll();
        // Sort students by rank in ascending order (lower rank is better)
        students = students.stream()
                .sorted((s1, s2) -> {
                    // Compare status: "Accepted" first
                    int statusCompare = s1.getStatus().compareTo(s2.getStatus());

                    // If both have the same status, sort by rank (ascending)
                    if (statusCompare == 0) {
                        return Integer.compare(s1.getRank(), s2.getRank());
                    }
                    return statusCompare;
                })
                .limit(15) // Get top 15 students
                .collect(Collectors.toList());

        return students;
    }
    @Override
    public List<StudentModel> getAllPendingStudents() {
        List<StudentModel> students = studentRepo.findAll();

        students = students.stream()
                .filter(student -> "pending".equalsIgnoreCase(student.getStatus()))
                .sorted(Comparator.comparingInt(StudentModel::getRank))
                .collect(Collectors.toList());

        return students;
    }


    @Override
    public boolean acceptStudent(String email) {
        List<StudentModel> students = studentRepo.findAll();
        for (StudentModel student : students) {
            if (student.getEmail().equals(email)) {
                boolean value = seatServices.deleteSeat(student.getBranch());
                if (value) {
                    student.setStatus("accept");
                    studentRepo.save(student);
                    return true;
                }
            }
        }
        return false;
    }

    @Override
    public boolean rejectStudent(String email) {
        List<StudentModel> students = studentRepo.findAll();
        for (StudentModel student : students) {
            if (student.getEmail().equals(email)) {
                student.setStatus("reject");
                studentRepo.save(student);
                return true;
            }
        }
        return false;
    }
    @Override
    public boolean editStudentDetails(StudentModel oldStudent) {
        List<StudentModel> students = studentRepo.findAll();
        for (StudentModel student : students) {
            if (student.getEmail().equals(oldStudent.getEmail()) ){
                student.setStatus(oldStudent.getStatus());
                student.setRank(oldStudent.getRank());
                student.setDate(oldStudent.getDate());
                student.setAddress(oldStudent.getAddress());
                student.setBranch(oldStudent.getBranch());
                student.setRollno(oldStudent.getRollno());
                student.setCategory(oldStudent.getCategory());
                student.setFullName(oldStudent.getFullName());
                student.setGender(oldStudent.getGender());
                student.setPhoneno(oldStudent.getPhoneno());
                student.setFatherName(oldStudent.getFatherName());
                studentRepo.save(student);
                return true;
            }
        }
        return false;
    }


    @Override
    public Map<String, Pair<StudentModel, Integer>> getStudentDetails(Map<String, String> requestData) {
        Map<String, Pair<StudentModel, Integer>> studentData = new HashMap<>();
        List<StudentModel> students = studentRepo.findAll();

        // Separate students by status
        List<StudentModel> acceptedStudents = new ArrayList<>();
        List<StudentModel> pendingStudents = new ArrayList<>();
        List<StudentModel> rejectedStudents = new ArrayList<>();

        for (StudentModel student : students) {
            switch (student.getStatus()) {
                case "accept":
                    acceptedStudents.add(student);
                    break;
                case "pending":
                    pendingStudents.add(student);
                    break;
                case "rejected":
                    rejectedStudents.add(student);
                    break;
            }
        }

        // Sort each list by rank
        acceptedStudents.sort(Comparator.comparingInt(StudentModel::getRank));
        pendingStudents.sort(Comparator.comparingInt(StudentModel::getRank));
        rejectedStudents.sort(Comparator.comparingInt(StudentModel::getRank));

        // Combine all the lists: accept -> pending -> reject
        List<StudentModel> allSortedStudents = new ArrayList<>();
        allSortedStudents.addAll(acceptedStudents);
        allSortedStudents.addAll(pendingStudents);
        allSortedStudents.addAll(rejectedStudents);

        // Now find the student matching the requested email and assign the position
        for (int i = 0; i < allSortedStudents.size(); i++) {
            StudentModel student = allSortedStudents.get(i);
            if (student.getEmail().equals(requestData.get("email"))) {
                // Return the student with position (index + 1)
                studentData.put("student", new Pair<>(student, i + 1)); // Position is index + 1
                return studentData;
            }
        }

        return null; // Return null if student is not found
    }

    @Override
    public boolean saveStudent(Map<String, String> requestData) {
        StudentModel student = new StudentModel();
        UserModel user = new UserModel();
       if (requestData.get("email") != null) {

           student.setEmail(requestData.get("email"));
           student.setFullName(requestData.get("fullName"));
           student.setPhoneno(requestData.get("phoneno"));
           student.setRollno(requestData.get("rollno"));
           student.setCategory(requestData.get("category"));
           student.setAddress(requestData.get("address"));
           student.setGender(requestData.get("gender"));
           student.setBranch(requestData.get("branch"));
           student.setStatus(requestData.get("status"));
           student.setDate(LocalDate.parse(requestData.get("date")));
           student.setFatherName(requestData.get("fatherName"));
           student.setRank(Integer.parseInt(requestData.get("rank")));
           student.setUser_id(null);
           studentRepo.save(student);
            user.setEmail(requestData.get("email"));
            user.setPassword(requestData.get("password"));
            user.setFullName(requestData.get("fullName"));
            user.setRole(requestData.get("role"));
           UserRepo.save(user);

           return true;
       }
        return false;
    }
}
