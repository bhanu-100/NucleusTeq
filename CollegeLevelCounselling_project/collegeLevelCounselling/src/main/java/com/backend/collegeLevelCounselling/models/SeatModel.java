package com.backend.collegeLevelCounselling.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "SEAT_MODEL")
public class SeatModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true)
    private String branch;
    @Column(nullable = false)
    private Integer totalSeats;
    @Column(nullable = false)
    private Integer vacantSeats;
}