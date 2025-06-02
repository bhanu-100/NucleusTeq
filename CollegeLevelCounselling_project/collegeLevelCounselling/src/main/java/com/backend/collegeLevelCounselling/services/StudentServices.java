package com.backend.collegeLevelCounselling.services;

import com.backend.collegeLevelCounselling.models.Pair;
import com.backend.collegeLevelCounselling.models.StudentModel;
import com.backend.collegeLevelCounselling.models.UserModel;
import com.backend.collegeLevelCounselling.repositories.StudentRepoInterface;
import com.backend.collegeLevelCounselling.repositories.UserRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.*;

@Service
public class StudentServices implements StudentBussinessServicesInterface {

    @Autowired
    private StudentRepoInterface studentRepo;

    @Autowired
    private SeatBussinessServicesInterface seatServices;

    @Autowired
    private UserRepoInterface userRepo;

    @Override
    public List<StudentModel> getTop15Students() {
        try {
            return studentRepo.findAll().stream()
                    .sorted((s1, s2) -> {
                        int statusCompare = s1.getStatus().compareTo(s2.getStatus());
                        if (statusCompare == 0) {
                            return Integer.compare(s1.getRank(), s2.getRank());
                        }
                        return statusCompare;
                    })
                    .limit(15)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Error fetching top students", e);
        }
    }

    @Override
    public List<StudentModel> getAllPendingStudents() {
        try {
            return studentRepo.findAll().stream()
                    .filter(student -> "pending".equalsIgnoreCase(student.getStatus()))
                    .sorted(Comparator.comparingInt(StudentModel::getRank))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Error fetching pending students", e);
        }
    }

    @Override
    public boolean acceptStudent(String email) {
        try {
            List<StudentModel> students = studentRepo.findAll();
            for (StudentModel student : students) {
                if (student.getEmail().equals(email)) {
                    boolean seatDeleted = seatServices.deleteSeat(student.getBranch());
                    if (seatDeleted) {
                        student.setStatus("accept");
                        studentRepo.save(student);
                        return true;
                    } else {
                        throw new ResponseStatusException(BAD_REQUEST, "No available seat in " + student.getBranch());
                    }
                }
            }
            throw new ResponseStatusException(NOT_FOUND, "Student with email " + email + " not found");
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Error accepting student", e);
        }
    }

    @Override
    public boolean rejectStudent(String email) {
        try {
            List<StudentModel> students = studentRepo.findAll();
            for (StudentModel student : students) {
                if (student.getEmail().equals(email)) {
                    student.setStatus("reject");
                    studentRepo.save(student);
                    return true;
                }
            }
            throw new ResponseStatusException(NOT_FOUND, "Student with email " + email + " not found");
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Error rejecting student", e);
        }
    }

    @Override
    public boolean editStudentDetails(StudentModel oldStudent) {
        try {
            List<StudentModel> students = studentRepo.findAll();
            for (StudentModel student : students) {
                if (student.getEmail().equals(oldStudent.getEmail())) {
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
            throw new ResponseStatusException(NOT_FOUND, "Student not found");
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Error editing student details", e);
        }
    }

    @Override
    public Map<String, Pair<StudentModel, Integer>> getStudentDetails(Map<String, String> requestData) {
        try {
            String requestEmail = requestData.get("email");
            if (requestEmail == null) {
                throw new ResponseStatusException(BAD_REQUEST, "Email is required");
            }

            Map<String, Pair<StudentModel, Integer>> studentData = new HashMap<>();
            List<StudentModel> students = studentRepo.findAll();

            List<StudentModel> accepted = new ArrayList<>();
            List<StudentModel> pending = new ArrayList<>();
            List<StudentModel> rejected = new ArrayList<>();

            for (StudentModel student : students) {
                switch (student.getStatus().toLowerCase()) {
                    case "accept":
                        accepted.add(student);
                        break;
                    case "pending":
                        pending.add(student);
                        break;
                    case "reject":
                        rejected.add(student);
                        break;
                }
            }

            accepted.sort(Comparator.comparingInt(StudentModel::getRank));
            pending.sort(Comparator.comparingInt(StudentModel::getRank));
            rejected.sort(Comparator.comparingInt(StudentModel::getRank));

            List<StudentModel> sorted = new ArrayList<>();
            sorted.addAll(accepted);
            sorted.addAll(pending);
            sorted.addAll(rejected);

            for (int i = 0; i < sorted.size(); i++) {
                if (requestEmail.equals(sorted.get(i).getEmail())) {
                    studentData.put("student", new Pair<>(sorted.get(i), i + 1));
                    return studentData;
                }
            }

            throw new ResponseStatusException(NOT_FOUND, "Student not found with email " + requestEmail);
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Error fetching student details", e);
        }
    }

    @Override
    @Transactional
    public boolean saveStudent(Map<String, String> requestData) {
        try {
            if (requestData.get("email") == null) {
                throw new ResponseStatusException(BAD_REQUEST, "Email is required");
            }

            StudentModel student = new StudentModel();
            UserModel user = new UserModel();

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

            userRepo.save(user);

            return true;
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Error saving student", e);
        }
    }
}
