package com.backend.collegeLevelCounselling.services;

import com.backend.collegeLevelCounselling.models.StudentModel;
import com.backend.collegeLevelCounselling.models.UserModel;
import com.backend.collegeLevelCounselling.repositories.StudentRepoInterface;
import com.backend.collegeLevelCounselling.repositories.UserRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
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
    public StudentModel getStudentDetails(Map<String, String> requestData) {
        List<StudentModel> students = studentRepo.findAll();
        for (StudentModel student : students) {
            if (student.getEmail().equals(requestData.get("email"))) {
                return  student;
            }
        }
        return null;
    }

    @Override
    public boolean saveStudent(StudentModel student) {
        if(student.getEmail()!=null){
            System.out.println(student);
            Optional<UserModel> user = UserRepo.findByEmail(student.getEmail());
            if(user.isPresent()){
                student.setUser_id(user.get().getId());
            }
            else{
                student.setUser_id(null);
            }
            studentRepo.save(student);
            return true;
        }
        return false;
    }
}
