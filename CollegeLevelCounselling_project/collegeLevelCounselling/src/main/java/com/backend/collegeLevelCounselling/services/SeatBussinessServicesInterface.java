package com.backend.collegeLevelCounselling.services;

import com.backend.collegeLevelCounselling.models.SeatModel;

import java.util.List;

public interface SeatBussinessServicesInterface {
    List<SeatModel> getAllSeats();
    boolean addSeat(String branch, String seat);
    boolean deleteSeat(String branch);
}
