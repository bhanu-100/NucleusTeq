package com.backend.collegeLevelCounselling.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "USER_MODEL")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String fullName;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String role;

}