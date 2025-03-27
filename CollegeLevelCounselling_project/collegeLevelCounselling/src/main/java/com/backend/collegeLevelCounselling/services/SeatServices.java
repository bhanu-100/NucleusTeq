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
        return seatRepo.findAll();
    }

    @Override
    public boolean addSeat(String branch, String seat) {
      List<SeatModel> seats = seatRepo.findAll();
       for (SeatModel seatModel : seats) {
           if (seatModel.getBranch().equals(branch)) {
               seatModel.setTotalSeats(seatModel.getTotalSeats()+Integer.parseInt(seat));
               seatRepo.save(seatModel);
               return true;
           }
       }
       return false;
    }

    @Override
    public boolean deleteSeat(String branch) {
        List<SeatModel> seats = seatRepo.findAll();
        for (SeatModel seatModel : seats) {
            if (seatModel.getBranch().equals(branch)) {
                int leftSeats = seatModel.getVacantSeats();
                if(leftSeats>0) {
                    seatModel.setVacantSeats(leftSeats-1);
                    seatRepo.save(seatModel);
                    return true;
                }
            }
        }
        return false;
    }

}
