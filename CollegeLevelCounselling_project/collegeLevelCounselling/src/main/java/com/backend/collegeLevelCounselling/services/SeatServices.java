package com.backend.collegeLevelCounselling.services;

import com.backend.collegeLevelCounselling.models.SeatModel;
import com.backend.collegeLevelCounselling.repositories.SeatRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatServices implements SeatBussinessServicesInterface {

    @Autowired
    private SeatRepoInterface seatRepo;

    @Override
    public List<SeatModel> getAllSeats() {
        try {
            return seatRepo.findAll();
        } catch (Exception e) {
            System.err.println("Error while fetching all seats: " + e.getMessage());
            return null;
        }
    }

    @Override
    public boolean addSeat(String branch, String seat) {
        try {
            int seatCount = Integer.parseInt(seat);
            List<SeatModel> seats = seatRepo.findAll();
            for (SeatModel seatModel : seats) {
                if (seatModel.getBranch().equals(branch)) {
                    seatModel.setTotalSeats(seatModel.getTotalSeats() + seatCount);
                    seatRepo.save(seatModel);
                    return true;
                }
            }
        } catch (NumberFormatException nfe) {
            System.err.println("Invalid seat number format: " + seat);
        } catch (Exception e) {
            System.err.println("Error while adding seat: " + e.getMessage());
        }
        return false;
    }

    @Override
    public boolean deleteSeat(String branch) {
        try {
            List<SeatModel> seats = seatRepo.findAll();
            for (SeatModel seatModel : seats) {
                if (seatModel.getBranch().equals(branch)) {
                    int leftSeats = seatModel.getVacantSeats();
                    if (leftSeats > 0) {
                        seatModel.setVacantSeats(leftSeats - 1);
                        seatRepo.save(seatModel);
                        return true;
                    } else {
                        System.err.println("No vacant seats left for branch: " + branch);
                    }
                }
            }
        } catch (Exception e) {
            System.err.println("Error while deleting seat: " + e.getMessage());
        }
        return false;
    }
}
