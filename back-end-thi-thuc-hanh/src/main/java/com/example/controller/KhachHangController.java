package com.example.controller;

import com.example.model.SoTietKiem;
import com.example.service.IKhachHangService;
import com.example.service.ISoTietKiemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class KhachHangController {

    @Autowired
    private IKhachHangService iKhachHangService;

 
    @GetMapping("soTietKiem")
    public ResponseEntity<List<SoTietKiem>> showList() {
        List<SoTietKiem> soTietKiemList = soTietKiemService.findAll();
        if (soTietKiemList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(soTietKiemList, HttpStatus.OK);
    }
}
