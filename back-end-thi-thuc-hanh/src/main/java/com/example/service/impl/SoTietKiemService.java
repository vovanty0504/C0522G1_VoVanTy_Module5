package com.example.service.impl;

import com.example.model.SoTietKiem;
import com.example.repository.SoTietKiemRepository;
import com.example.service.ISoTietKiemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SoTietKiemService implements ISoTietKiemService {

    @Autowired
    private SoTietKiemRepository soTietKiemRepository;

    @Override
    public List<SoTietKiem> findAll() {
        return soTietKiemRepository.findAll();
    }
}
