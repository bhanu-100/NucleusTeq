package com.example.hrportal.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class HrMapper implements RowMapper<HrModel> {
    @Override
    public HrModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        HrModel hrModel = new HrModel(rs.getString("EMAIL"), rs.getString("PASSWORD"));
        return hrModel;
    }
}
