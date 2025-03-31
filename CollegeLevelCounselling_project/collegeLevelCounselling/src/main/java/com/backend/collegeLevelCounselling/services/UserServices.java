package com.backend.collegeLevelCounselling.services;

import com.backend.collegeLevelCounselling.models.UserModel;
import com.backend.collegeLevelCounselling.repositories.UserRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServices implements UserBussinessServicesInterface {
    @Autowired
    private UserRepoInterface UserRepo;
    @Override
    public boolean saveUser(UserModel user) {
        UserRepo.save(user);
        return true;
    }

    @Override
    public List<UserModel> getAllAdmissionOfficerUsers() {
        List<UserModel> admissionOfficerUsers=new ArrayList<UserModel>();
        List<UserModel> users= UserRepo.findAll();
        for (UserModel user : users) {
            if (user.getRole().equals("admissionOfficer")) {
                admissionOfficerUsers.add(user);
            }
        }
        return admissionOfficerUsers;
    }

    @Override
    public boolean addAdmissionOfficerByEmail(String email) {
        List<UserModel> users= UserRepo.findAll();
        for (UserModel user : users) {
            if (user.getEmail().equals(email)) {
                user.setRole("admissionOfficer");//update into database
                UserRepo.save(user);
                return true;
            }
        }
        return false;
    }
    @Override
    public boolean removeAdmissionOfficerByEmail(String email) {
        List<UserModel> users= UserRepo.findAll();
        for (UserModel user : users) {
            if (user.getEmail().equals(email)) {
                user.setRole("student");//update into database
                UserRepo.save(user);
                return true;
            }
        }
        return false;
    }

    @Override
    public Map<String, String> findUser(Map<String, String> requestData) {
        Map<String, String> responseData = new HashMap<String, String>();
        Optional<UserModel> user = UserRepo.findByEmail(requestData.get("email"));
        if (user.isPresent() && user.get().getRole().equals(requestData.get("role"))) {
            responseData.put("email", user.get().getEmail());
            responseData.put("fullName", user.get().getFullName());
            responseData.put("role", user.get().getRole());
            responseData.put("success", "true");
            return responseData;
        }
        responseData.put("success", "false");
        responseData.put("error", "Invalid details provided");
        return responseData;
    }

    @Override
    public Map<String, String> forgotPassword(Map<String, String> requestData) {
        Map<String, String> responseData = new HashMap<String, String>();
        Optional<UserModel> user = UserRepo.findByEmail(requestData.get("email"));
        if (user.isPresent()) {
            responseData.put("email", user.get().getEmail());
            responseData.put("password", user.get().getPassword());
            responseData.put("success", "true");
            return responseData;
        }
        responseData.put("success", "false");
        responseData.put("error", "Invalid details provided");
        return responseData;
    }
}