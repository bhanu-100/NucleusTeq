package com.example.hrportal.service;

import com.example.hrportal.data.HrDataAccessInterface;
import com.example.hrportal.model.HrModel;
import org.springframework.beans.factory.annotation.Autowired;

public class HrService implements HrServiceInterface {

    @Autowired
    HrDataAccessInterface hrDataAccess;
    @Override
    public void test() {
        System.out.println("test");
    }

    @Override
    public boolean getHrDetails( HrModel user ) {
        return hrDataAccess.getHrDetails(user);
    }
}
