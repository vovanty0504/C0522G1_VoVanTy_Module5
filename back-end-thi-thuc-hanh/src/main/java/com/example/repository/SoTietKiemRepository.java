package com.example.repository;

import com.example.model.SoTietKiem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SoTietKiemRepository extends JpaRepository<SoTietKiem, Integer> {
}
