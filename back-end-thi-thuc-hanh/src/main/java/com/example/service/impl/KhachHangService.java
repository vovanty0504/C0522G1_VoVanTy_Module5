package com.example.service.impl;

import com.example.model.KhachHang;
import com.example.repository.KhachHangRepository;
import com.example.service.IKhachHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KhachHangService implements IKhachHangService {

    @Autowired
    private KhachHangRepository khachHangRepository;

    @Override
    public List<KhachHang> findAll() {
        return khachHangRepository.findAll();
    }
}
