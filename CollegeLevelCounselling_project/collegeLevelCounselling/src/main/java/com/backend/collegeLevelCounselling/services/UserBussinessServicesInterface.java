package com.backend.collegeLevelCounselling.services;

import com.backend.collegeLevelCounselling.models.UserModel;

import java.util.List;
import java.util.Map;

public interface UserBussinessServicesInterface {
    boolean saveUser(UserModel person);
    List<UserModel> getAllAdmissionOfficerUsers();
    boolean removeAdmissionOfficerByEmail(String email);
    Map<String,String> findUser(Map<String, String> requestData);
    Map<String,String> forgotPassword(Map<String, String> requestData);
}
