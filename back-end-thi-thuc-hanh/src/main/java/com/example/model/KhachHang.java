package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class KhachHang {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @OneToMany(mappedBy = "khachHang")
    @JsonBackReference
    private Set<SoTietKiem> soTietKiems;

    public KhachHang() {
    }

    public KhachHang(int id, String name, Set<SoTietKiem> soTietKiems) {
        this.id = id;
        this.name = name;
        this.soTietKiems = soTietKiems;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<SoTietKiem> getSoTietKiems() {
        return soTietKiems;
    }

    public void setSoTietKiems(Set<SoTietKiem> soTietKiems) {
        this.soTietKiems = soTietKiems;
    }
}
