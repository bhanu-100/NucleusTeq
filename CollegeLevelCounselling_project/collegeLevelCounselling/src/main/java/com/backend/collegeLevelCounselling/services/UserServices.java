package com.backend.collegeLevelCounselling.services;

import com.backend.collegeLevelCounselling.models.UserModel;
import com.backend.collegeLevelCounselling.repositories.UserRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

import static org.springframework.http.HttpStatus.*;

@Service
public class UserServices implements UserBussinessServicesInterface {

    @Autowired
    private UserRepoInterface userRepo;

    @Override
    public boolean saveUser(UserModel user) {
        try {
            if (user == null || user.getEmail() == null) {
                throw new ResponseStatusException(BAD_REQUEST, "User or email cannot be null");
            }
            userRepo.save(user);
            return true;
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Failed to save user", e);
        }
    }

    @Override
    public List<UserModel> getAllAdmissionOfficerUsers() {
        try {
            List<UserModel> users = userRepo.findAll();
            List<UserModel> admissionOfficerUsers = new ArrayList<>();

            for (UserModel user : users) {
                if ("admissionOfficer".equalsIgnoreCase(user.getRole())) {
                    admissionOfficerUsers.add(user);
                }
            }
            return admissionOfficerUsers;
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Failed to fetch admission officers", e);
        }
    }

    @Override
    public boolean removeAdmissionOfficerByEmail(String email) {
        try {
            if (email == null || email.isEmpty()) {
                throw new ResponseStatusException(BAD_REQUEST, "Email is required");
            }

            List<UserModel> users = userRepo.findAll();
            for (UserModel user : users) {
                if (email.equals(user.getEmail())) {
                    userRepo.delete(user);
                    return true;
                }
            }
            throw new ResponseStatusException(NOT_FOUND, "User with email " + email + " not found");
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Failed to remove admission officer", e);
        }
    }

    @Override
    public Map<String, String> findUser(Map<String, String> requestData) {
        try {
            String email = requestData.get("email");
            String password = requestData.get("password");
            String role = requestData.get("role");

            if (email == null || password == null || role == null) {
                throw new ResponseStatusException(BAD_REQUEST, "Email, password, and role are required");
            }

            Optional<UserModel> userOpt = userRepo.findByEmail(email);
            Map<String, String> responseData = new HashMap<>();

            if (userOpt.isPresent()) {
                UserModel user = userOpt.get();
                if (password.equals(user.getPassword()) && role.equals(user.getRole())) {
                    responseData.put("email", user.getEmail());
                    responseData.put("fullName", user.getFullName());
                    responseData.put("role", user.getRole());
                    responseData.put("success", "true");
                    return responseData;
                }
            }

            responseData.put("success", "false");
            responseData.put("error", "Invalid details provided");
            return responseData;
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Failed to find user", e);
        }
    }

    @Override
    public Map<String, String> forgotPassword(Map<String, String> requestData) {
        try {
            String email = requestData.get("email");

            if (email == null || email.isEmpty()) {
                throw new ResponseStatusException(BAD_REQUEST, "Email is required");
            }

            Optional<UserModel> userOpt = userRepo.findByEmail(email);
            Map<String, String> responseData = new HashMap<>();

            if (userOpt.isPresent()) {
                UserModel user = userOpt.get();
                responseData.put("email", user.getEmail());
                responseData.put("password", user.getPassword());
                responseData.put("success", "true");
                return responseData;
            }

            responseData.put("success", "false");
            responseData.put("error", "Invalid details provided");
            return responseData;
        } catch (Exception e) {
            throw new ResponseStatusException(INTERNAL_SERVER_ERROR, "Failed to process forgot password", e);
        }
    }
}
