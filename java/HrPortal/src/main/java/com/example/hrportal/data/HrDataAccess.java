package com.example.hrportal.data;

import com.example.hrportal.model.HrModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class HrDataAccess implements HrDataAccessInterface {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public boolean getHrDetails(HrModel user) {
        String sql = "SELECT COUNT(*) FROM HR WHERE EMAIL = ? AND PASSWORD = ?";
        int count = jdbcTemplate.queryForObject(sql, Integer.class, user.getEmail(), user.getPassword());
        return count > 0; // Returns true if HR exists, false otherwise
    }
}
