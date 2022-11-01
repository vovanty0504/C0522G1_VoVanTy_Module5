package com.example.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
public class SoTietKiem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String ngayMoSo;
    private String thoiGianBatDauGui;
    private String kyHan;
    private String soTienGui;
    private String laiXuat;
    private String uuDai;

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "khach_hang_id", referencedColumnName = "id")
    private KhachHang khachHang;

    public SoTietKiem() {
    }

    public SoTietKiem(int id, String ngayMoSo, String thoiGianBatDauGui, String kyHan,
                      String soTienGui, String laiXuat, String uuDai, KhachHang khachHang) {
        this.id = id;
        this.ngayMoSo = ngayMoSo;
        this.thoiGianBatDauGui = thoiGianBatDauGui;
        this.kyHan = kyHan;
        this.soTienGui = soTienGui;
        this.laiXuat = laiXuat;
        this.uuDai = uuDai;
        this.khachHang = khachHang;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNgayMoSo() {
        return ngayMoSo;
    }

    public void setNgayMoSo(String ngayMoSo) {
        this.ngayMoSo = ngayMoSo;
    }

    public String getThoiGianBatDauGui() {
        return thoiGianBatDauGui;
    }

    public void setThoiGianBatDauGui(String thoiGianBatDauGui) {
        this.thoiGianBatDauGui = thoiGianBatDauGui;
    }

    public String getKyHan() {
        return kyHan;
    }

    public void setKyHan(String kyHan) {
        this.kyHan = kyHan;
    }

    public String getSoTienGui() {
        return soTienGui;
    }

    public void setSoTienGui(String soTienGui) {
        this.soTienGui = soTienGui;
    }

    public String getLaiXuat() {
        return laiXuat;
    }

    public void setLaiXuat(String laiXuat) {
        this.laiXuat = laiXuat;
    }

    public String getUuDai() {
        return uuDai;
    }

    public void setUuDai(String uuDai) {
        this.uuDai = uuDai;
    }

    public KhachHang getKhachHang() {
        return khachHang;
    }

    public void setKhachHang(KhachHang khachHang) {
        this.khachHang = khachHang;
    }
}
