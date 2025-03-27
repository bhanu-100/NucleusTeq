package com.backend.collegeLevelCounselling.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "STUDENT_MODEL")
public class StudentModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long user_id;
    @Column(nullable = false)
    private String fullName;
    @Column(nullable = false)
    private String gender;
    @Column(nullable = false)
    private String category;
    @Column(nullable = false)
    private String branch;
    @Column(nullable = false, unique = true)
    private String rollno;
    @Column(nullable = false, unique = true)
    private Integer rank;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String status;
    @Column(nullable = false)
    private String phoneno;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String fatherName;
    @Column(nullable = false)
    private LocalDate date;
}